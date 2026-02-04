import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface PaymentButtonProps {
    onSuccess?: () => void
    onNavigateToTerms?: () => void
    onNavigateToRefund?: () => void
    onNavigateToPrivacy?: () => void
    userId?: string
    userEmail?: string
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

function PaymentButton({ onSuccess, onNavigateToTerms, onNavigateToRefund, onNavigateToPrivacy, userId, userEmail }: PaymentButtonProps) {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const [agreedTerms, setAgreedTerms] = useState(false)
    const [agreedPrivacy, setAgreedPrivacy] = useState(false)
    const [agreedThirdParty, setAgreedThirdParty] = useState(false)

    const allAgreed = agreedTerms && agreedPrivacy && agreedThirdParty

    const handleCheckout = async () => {
        if (!allAgreed) {
            alert(t('alerts.pleaseAgree'))
            return
        }

        setLoading(true)

        try {
            // Get Polar product ID from environment
            const productId = import.meta.env.VITE_POLAR_PRODUCT_ID

            if (!productId) {
                throw new Error('Polar product ID not configured')
            }

            // Construct Polar checkout URL with metadata
            const baseUrl = `https://polar.sh/checkout/${productId}`
            const params = new URLSearchParams()

            if (userEmail) {
                params.append('customer_email', userEmail)
            }

            if (userId) {
                params.append('metadata[user_id]', userId)
            }

            const checkoutUrl = `${baseUrl}?${params.toString()}`

            // Redirect to Polar hosted checkout
            window.location.href = checkoutUrl

        } catch (error) {
            console.error('Checkout error:', error)
            setLoading(false)
            alert(t('alerts.paymentError'))
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
