interface Env {
    POLAR_ACCESS_TOKEN: string;
}

const PRODUCT_ID = '5d190fd3-1633-4d52-940a-728a0c0c3827';

// Sandbox 환경 사용 (테스트용)
const POLAR_API_URL = 'https://sandbox-api.polar.sh/v1';
// Production 환경 사용시 아래로 변경:
// const POLAR_API_URL = 'https://api.polar.sh/v1';

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const accessToken = context.env.POLAR_ACCESS_TOKEN;
        
        if (!accessToken) {
            return new Response(
                JSON.stringify({ error: 'Polar access token not configured' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Get the origin for embed
        const origin = context.request.headers.get('origin') || 'https://music-for-mom.pages.dev';

        // Create Checkout Session via Polar API (Sandbox)
        const response = await fetch(`${POLAR_API_URL}/checkouts/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: [PRODUCT_ID],
                embed_origin: origin,
                success_url: `${origin}?checkout=success`,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Polar API error:', errorData);
            return new Response(
                JSON.stringify({ error: 'Failed to create checkout session' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const checkout = await response.json();

        return new Response(
            JSON.stringify({ 
                url: checkout.url,
                id: checkout.id,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    } catch (error) {
        console.error('Error creating checkout:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to create checkout' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// CORS preflight
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};
