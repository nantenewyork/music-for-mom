import { useState, useEffect } from 'react'
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed'

interface PaymentButtonProps {
    onSuccess?: () => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
}

function PaymentButton({ onSuccess }: PaymentButtonProps) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Initialize Polar Embed Checkout
        PolarEmbedCheckout.init()
    }, [])

    const handleCheckout = async () => {
        setLoading(true)
        
        try {
            // Create checkout session
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            
            const data = await response.json()
            
            if (data.url) {
                // Open embedded checkout
                const checkout = await PolarEmbedCheckout.create(data.url, {
                    theme: 'light',
                    onLoaded: () => {
                        setLoading(false)
                    },
                })

                // Listen for success
                checkout.addEventListener('success', () => {
                    // Save purchase status to localStorage
                    localStorage.setItem('aura-classical-purchased', 'true')
                    localStorage.setItem('aura-classical-purchase-date', new Date().toISOString())
                    
                    if (onSuccess) {
                        onSuccess()
                    }
                })

                checkout.addEventListener('close', () => {
                    setLoading(false)
                })
            }
        } catch (error) {
            console.error('Checkout error:', error)
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
                background: `linear-gradient(135deg, ${colors.deepGold} 0%, ${colors.primaryWarm} 100%)`,
                boxShadow: `0 10px 25px -5px ${colors.deepGold}66`,
            }}
        >
            {loading ? (
                <>
                    <div 
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    />
                    처리 중...
                </>
            ) : (
                <>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    지금 구매하기 - $12
                </>
            )}
        </button>
    )
}

export default PaymentButton
