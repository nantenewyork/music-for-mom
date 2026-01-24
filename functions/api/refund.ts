interface Env {
    POLAR_ACCESS_TOKEN: string;
}

// Polar Production API
const POLAR_API_URL = 'https://api.polar.sh/v1';

// 환불 처리 API
export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { checkoutId, orderId, reason } = await context.request.json() as { 
            checkoutId?: string; 
            orderId?: string;
            reason?: string;
        };

        const accessToken = context.env.POLAR_ACCESS_TOKEN;
        
        if (!accessToken) {
            return new Response(
                JSON.stringify({ error: 'Polar access token not configured' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // orderId가 있으면 직접 환불 처리
        if (orderId) {
            const refundResponse = await fetch(`${POLAR_API_URL}/orders/${orderId}/refund`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reason: reason || 'customer_request',
                }),
            });

            if (!refundResponse.ok) {
                const errorData = await refundResponse.json();
                console.error('Refund error:', errorData);
                return new Response(
                    JSON.stringify({ 
                        error: 'Refund failed', 
                        details: errorData,
                        support: 'support@auraclassical.com'
                    }),
                    { status: 500, headers: { 'Content-Type': 'application/json' } }
                );
            }

            const refundData = await refundResponse.json();
            return new Response(
                JSON.stringify({ 
                    success: true, 
                    message: 'Refund processed successfully',
                    refund: refundData 
                }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // checkoutId가 있으면 checkout 상태 확인 후 필요시 환불
        if (checkoutId) {
            // Checkout 상태 확인
            const checkoutResponse = await fetch(`${POLAR_API_URL}/checkouts/${checkoutId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!checkoutResponse.ok) {
                return new Response(
                    JSON.stringify({ error: 'Checkout not found' }),
                    { status: 404, headers: { 'Content-Type': 'application/json' } }
                );
            }

            const checkoutData = await checkoutResponse.json();

            // 결제 완료되었지만 문제가 있는 경우
            if (checkoutData.status === 'succeeded' && checkoutData.order_id) {
                // 자동 환불 처리
                const refundResponse = await fetch(`${POLAR_API_URL}/orders/${checkoutData.order_id}/refund`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        reason: reason || 'payment_error_auto_refund',
                    }),
                });

                if (!refundResponse.ok) {
                    const errorData = await refundResponse.json();
                    return new Response(
                        JSON.stringify({ 
                            error: 'Auto refund failed',
                            details: errorData,
                            checkoutId,
                            orderId: checkoutData.order_id,
                            support: 'support@auraclassical.com - 이 정보와 함께 문의해주세요'
                        }),
                        { status: 500, headers: { 'Content-Type': 'application/json' } }
                    );
                }

                const refundData = await refundResponse.json();
                return new Response(
                    JSON.stringify({ 
                        success: true, 
                        message: 'Auto refund processed',
                        refund: refundData 
                    }),
                    { status: 200, headers: { 'Content-Type': 'application/json' } }
                );
            }

            // 결제가 완료되지 않은 경우
            return new Response(
                JSON.stringify({ 
                    success: true,
                    message: 'No refund needed - payment was not completed',
                    status: checkoutData.status 
                }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ error: 'checkoutId or orderId is required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Refund API error:', error);
        return new Response(
            JSON.stringify({ 
                error: 'Internal server error',
                support: 'support@auraclassical.com'
            }),
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
