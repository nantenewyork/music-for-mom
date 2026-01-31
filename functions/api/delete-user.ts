interface Env {
    SUPABASE_SERVICE_ROLE_KEY: string
    VITE_SUPABASE_URL: string
    VITE_SUPABASE_ANON_KEY: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const serviceRoleKey = context.env.SUPABASE_SERVICE_ROLE_KEY
        const supabaseUrl = context.env.VITE_SUPABASE_URL

        // 1. Verify User Token (Check if the request is from a logged-in user)
        const authHeader = context.request.headers.get('Authorization')
        if (!authHeader) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
        }

        // Use standard client to verify the user's token
        const userToken = authHeader.replace('Bearer ', '')
        const verificationResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'apikey': context.env.VITE_SUPABASE_ANON_KEY
            }
        })

        if (!verificationResponse.ok) {
            return new Response(JSON.stringify({ error: 'Invalid Token' }), { status: 401 })
        }

        const userData = await verificationResponse.json()
        const userId = (userData as any).id

        // 2. Perform Deletion using Service Role Key
        if (!serviceRoleKey) {
            console.error('Missing SUPABASE_SERVICE_ROLE_KEY')
            return new Response(
                JSON.stringify({ error: 'Server configuration error: Missing Service Role Key' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Call Supabase Admin API to delete user
        const deleteResponse = await fetch(`${supabaseUrl}/auth/v1/admin/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        })

        if (!deleteResponse.ok) {
            const errorText = await deleteResponse.text()
            console.error('Failed to delete user:', errorText)
            return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 })
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (err) {
        console.error('Delete user error:', err)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    }
}
