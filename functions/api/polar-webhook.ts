// Webhook handler for Polar subscription events
// POST /api/polar-webhook

interface PolarWebhookEvent {
    type: string
    data: {
        subscription?: {
            id: string
            user_id: string
            status: string
            current_period_end: string
            metadata?: {
                user_id?: string
            }
        }
    }
}

interface Env {
    SUPABASE_SERVICE_ROLE_KEY: string
    VITE_SUPABASE_URL: string
    POLAR_WEBHOOK_SECRET?: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const supabaseUrl = context.env.VITE_SUPABASE_URL
        const serviceRoleKey = context.env.SUPABASE_SERVICE_ROLE_KEY

        if (!serviceRoleKey) {
            return new Response(JSON.stringify({ error: 'Missing service role key' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        // Parse webhook payload
        const event: PolarWebhookEvent = await context.request.json()

        console.log('Polar webhook received:', event.type)

        // Handle different event types
        switch (event.type) {
            case 'subscription.created':
            case 'subscription.updated':
                // Update subscription in Supabase
                const subscription = event.data.subscription
                if (!subscription) break

                const upsertResponse = await fetch(`${supabaseUrl}/rest/v1/subscriptions`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json',
                        'Prefer': 'resolution=merge-duplicates'
                    },
                    body: JSON.stringify({
                        user_id: subscription.metadata?.user_id || subscription.user_id,
                        polar_subscription_id: subscription.id,
                        status: subscription.status,
                        current_period_end: subscription.current_period_end,
                        updated_at: new Date().toISOString()
                    })
                })

                if (!upsertResponse.ok) {
                    console.error('Failed to update subscription:', await upsertResponse.text())
                }
                break

            case 'subscription.canceled':
                // Mark subscription as canceled
                const canceledSub = event.data.subscription
                if (!canceledSub) break

                const cancelResponse = await fetch(
                    `${supabaseUrl}/rest/v1/subscriptions?polar_subscription_id=eq.${canceledSub.id}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${serviceRoleKey}`,
                            'apikey': serviceRoleKey,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            status: 'canceled',
                            updated_at: new Date().toISOString()
                        })
                    }
                )

                if (!cancelResponse.ok) {
                    console.error('Failed to cancel subscription:', await cancelResponse.text())
                }
                break

            default:
                console.log('Unhandled event type:', event.type)
        }

        return new Response(JSON.stringify({ received: true }), {
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (err) {
        console.error('Webhook error:', err)
        return new Response(JSON.stringify({ error: 'Webhook processing failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}
