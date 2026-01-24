import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed'

interface PaymentButtonProps {
    onSuccess?: () => void
    onNavigateToTerms?: () => void
    onNavigateToRefund?: () => void
    onNavigateToPrivacy?: () => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

function PaymentButton({ onSuccess, onNavigateToTerms, onNavigateToRefund, onNavigateToPrivacy }: PaymentButtonProps) {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const [agreedTerms, setAgreedTerms] = useState(false)
    const [agreedPrivacy, setAgreedPrivacy] = useState(false)
    const [agreedThirdParty, setAgreedThirdParty] = useState(false)

    const allAgreed = agreedTerms && agreedPrivacy && agreedThirdParty

    useEffect(() => {
        // Initialize Polar Embed Checkout
        PolarEmbedCheckout.init()
    }, [])

    // 자동 환불 처리 함수
    const handleAutoRefund = async (checkoutId: string, reason: string) => {
        try {
            console.log('Attempting auto refund for checkout:', checkoutId)
            const refundResponse = await fetch('/api/refund', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    checkoutId, 
                    reason 
                }),
            })
            
            const refundData = await refundResponse.json()
            console.log('Refund response:', refundData)
            
            if (refundData.success) {
                alert(t('alerts.autoRefundSuccess'))
            } else {
                alert(`${t('alerts.autoRefundFailed')}\n\n${t('alerts.checkoutId', { id: checkoutId })}`)
            }
        } catch (refundError) {
            console.error('Auto refund error:', refundError)
            alert(`${t('alerts.autoRefundFailed')}\n\n${t('alerts.checkoutId', { id: checkoutId })}`)
        }
    }

    const handleCheckout = async () => {
        if (!allAgreed) {
            alert(t('alerts.pleaseAgree'))
            return
        }

        setLoading(true)
        let currentCheckoutId: string | null = null
        
        try {
            // Create checkout session
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            
            const data = await response.json()
            currentCheckoutId = data.id
            
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
                    try {
                        // Save purchase status to localStorage
                        localStorage.setItem('aura-classical-purchased', 'true')
                        localStorage.setItem('aura-classical-purchase-date', new Date().toISOString())
                        localStorage.setItem('aura-classical-checkout-id', currentCheckoutId || '')
                        
                        if (onSuccess) {
                            onSuccess()
                        }
                    } catch (successError) {
                        // 결제는 성공했지만 후처리 실패 시 자동 환불
                        console.error('Post-payment error:', successError)
                        if (currentCheckoutId) {
                            handleAutoRefund(currentCheckoutId, 'post_payment_error')
                        }
                    }
                })

                checkout.addEventListener('close', () => {
                    setLoading(false)
                })
            }
        } catch (error) {
            console.error('Checkout error:', error)
            setLoading(false)
            
            // 결제 생성 중 에러 발생 시 환불 시도
            if (currentCheckoutId) {
                handleAutoRefund(currentCheckoutId, 'checkout_creation_error')
            } else {
                alert(t('alerts.paymentError'))
            }
        }
    }

    const handleAgreeAll = () => {
        const newState = !(agreedTerms && agreedPrivacy && agreedThirdParty)
        setAgreedTerms(newState)
        setAgreedPrivacy(newState)
        setAgreedThirdParty(newState)
    }

    return (
        <div style={{ width: '100%' }}>
            {/* 약관 동의 섹션 */}
            <div 
                style={{ 
                    marginBottom: '1.5rem',
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
            >
                {/* 전체 동의 */}
                <label 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        cursor: 'pointer',
                        paddingBottom: '0.75rem',
                        borderBottom: `1px solid ${colors.deepGold}20`,
                        marginBottom: '0.75rem',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={allAgreed}
                        onChange={handleAgreeAll}
                        style={{ 
                            width: '1.25rem', 
                            height: '1.25rem',
                            accentColor: colors.deepGold,
                        }}
                    />
                    <span style={{ fontWeight: 700, color: colors.warmSlate }}>
                        {t('payment.agreeAll')}
                    </span>
                </label>

                {/* 개별 동의 항목들 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {/* 이용약관 동의 */}
                    <label 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={agreedTerms}
                            onChange={(e) => setAgreedTerms(e.target.checked)}
                            style={{ 
                                width: '1rem', 
                                height: '1rem',
                                accentColor: colors.deepGold,
                            }}
                        />
                        <span style={{ fontSize: '0.875rem', color: `${colors.warmSlate}cc` }}>
                            <span style={{ color: '#ef4444' }}>{t('payment.required')}</span>{' '}
                            <button 
                                onClick={(e) => { e.preventDefault(); onNavigateToTerms?.() }}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    padding: 0,
                                    color: colors.deepGold, 
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {t('payment.agreeTerms')}
                            </button>
                            {t('payment.agreeTermsSuffix')}
                        </span>
                    </label>

                    {/* 개인정보처리방침 동의 */}
                    <label 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={agreedPrivacy}
                            onChange={(e) => setAgreedPrivacy(e.target.checked)}
                            style={{ 
                                width: '1rem', 
                                height: '1rem',
                                accentColor: colors.deepGold,
                            }}
                        />
                        <span style={{ fontSize: '0.875rem', color: `${colors.warmSlate}cc` }}>
                            <span style={{ color: '#ef4444' }}>{t('payment.required')}</span>{' '}
                            <button 
                                onClick={(e) => { e.preventDefault(); onNavigateToPrivacy?.() }}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    padding: 0,
                                    color: colors.deepGold, 
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {t('payment.agreePrivacy')}
                            </button>
                            {t('payment.agreePrivacySuffix')}
                        </span>
                    </label>

                    {/* 제3자 정보 제공 동의 */}
                    <label 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={agreedThirdParty}
                            onChange={(e) => setAgreedThirdParty(e.target.checked)}
                            style={{ 
                                width: '1rem', 
                                height: '1rem',
                                accentColor: colors.deepGold,
                            }}
                        />
                        <span style={{ fontSize: '0.875rem', color: `${colors.warmSlate}cc` }}>
                            <span style={{ color: '#ef4444' }}>{t('payment.required')}</span>{' '}
                            {t('payment.agreeThirdParty')}{' '}
                            <button 
                                onClick={(e) => { e.preventDefault(); onNavigateToPrivacy?.() }}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    padding: 0,
                                    color: colors.deepGold, 
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {t('payment.agreeThirdPartyLink')}
                            </button>
                            {t('payment.agreeThirdPartySuffix')}
                        </span>
                    </label>

                    {/* 환불 규정 확인 */}
                    <div 
                        style={{ 
                            marginTop: '0.5rem',
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            backgroundColor: `${colors.deepGold}10`,
                            fontSize: '0.75rem',
                            color: `${colors.warmSlate}99`,
                        }}
                    >
                        {t('payment.refundNotice')}{' '}
                        <button 
                            onClick={(e) => { e.preventDefault(); onNavigateToRefund?.() }}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                padding: 0,
                                color: colors.deepGold, 
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                            }}
                        >
                            {t('payment.refundPolicy')}
                        </button>
                        {t('payment.refundNoticeSuffix')}
                    </div>
                </div>
            </div>

            {/* 결제 버튼 */}
            <button
                onClick={handleCheckout}
                disabled={loading || !allAgreed}
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                    width: '100%',
                    background: allAgreed 
                        ? `linear-gradient(135deg, ${colors.deepGold} 0%, ${colors.primaryWarm} 100%)`
                        : '#9ca3af',
                    boxShadow: allAgreed ? `0 10px 25px -5px ${colors.deepGold}66` : 'none',
                }}
            >
                {loading ? (
                    <>
                        <div 
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        />
                        {t('payment.processing')}
                    </>
                ) : (
                    <>
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {allAgreed ? t('payment.buyNow') : t('payment.pleaseAgree')}
                    </>
                )}
            </button>
        </div>
    )
}

export default PaymentButton
