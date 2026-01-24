import { useTranslation } from 'react-i18next'
import PaymentButton from './PaymentButton'
import LanguageSwitch from './LanguageSwitch'

interface PaywallPageProps {
    onPurchaseSuccess: () => void
    onNavigate?: (page: 'terms' | 'refund' | 'privacy') => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

const styles = {
    impressionistBg: {
        background: `
            radial-gradient(circle at 15% 15%, rgba(254, 243, 199, 0.7) 0%, transparent 40%),
            radial-gradient(circle at 85% 20%, rgba(251, 207, 232, 0.6) 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(255, 251, 235, 1) 0%, transparent 100%),
            radial-gradient(circle at 80% 80%, rgba(254, 215, 170, 0.5) 0%, transparent 50%),
            linear-gradient(to bottom right, #fff7ed, #fdf2f2, #fffbeb)
        `,
        backgroundAttachment: 'fixed' as const,
    },
    glassPanelWarm: {
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px) saturate(140%)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 12px 40px 0 rgba(180, 83, 9, 0.08)',
    },
    painterlyShadow: {
        boxShadow: '0 20px 50px -12px rgba(180, 83, 9, 0.12)',
    },
}

function PaywallPage({ onPurchaseSuccess, onNavigate }: PaywallPageProps) {
    const { t } = useTranslation()
    
    const features = [
        {
            icon: 'auto_awesome',
            titleKey: 'paywall.feature1Title',
            descKey: 'paywall.feature1Desc'
        },
        {
            icon: 'youtube_activity',
            titleKey: 'paywall.feature2Title',
            descKey: 'paywall.feature2Desc'
        },
        {
            icon: 'favorite',
            titleKey: 'paywall.feature3Title',
            descKey: 'paywall.feature3Desc'
        },
        {
            icon: 'all_inclusive',
            titleKey: 'paywall.feature4Title',
            descKey: 'paywall.feature4Desc'
        },
    ]
    
    return (
        <div 
            style={{ 
                ...styles.impressionistBg,
                color: colors.warmSlate,
                fontFamily: 'Manrope, sans-serif',
                minHeight: '100vh',
                overflowX: 'hidden',
            }}
        >
            {/* Header */}
            <header 
                style={{
                    ...styles.glassPanelWarm,
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    width: '100%',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div 
                                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white shadow-lg"
                                style={{ backgroundColor: colors.deepGold }}
                            >
                                <span className="material-symbols-outlined text-lg sm:text-2xl">auto_awesome</span>
                            </div>
                            <h2 
                                className="text-xl sm:text-2xl font-semibold tracking-tight"
                                style={{ 
                                    fontFamily: 'Playfair Display, serif',
                                    color: colors.deepGold,
                                }}
                            >
                                {t('common.appName')}
                            </h2>
                        </div>
                        <LanguageSwitch />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12">
                {/* Hero */}
                <div className="text-center mb-6 sm:mb-10 max-w-3xl px-2">
                    <div 
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 sm:mb-6"
                        style={{ 
                            backgroundColor: 'rgba(254, 243, 199, 0.5)',
                            border: '1px solid rgba(217, 119, 6, 0.2)',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>verified</span>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>
                            {t('paywall.badge')}
                        </span>
                    </div>
                    
                    <h1 
                        className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 sm:mb-6"
                        style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: colors.warmSlate,
                        }}
                    >
                        {t('paywall.title')}<br />
                        <span style={{ fontStyle: 'italic', color: colors.deepGold }}>{t('paywall.titleHighlight')}</span> {t('paywall.titleEnd')}
                    </h1>
                    
                    <p className="text-sm sm:text-lg max-w-lg mx-auto" style={{ color: `${colors.warmSlate}99` }}>
                        {t('paywall.subtitle')}
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="w-full max-w-md px-2">
                    <div 
                        className="rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8"
                        style={{
                            ...styles.glassPanelWarm,
                            ...styles.painterlyShadow,
                        }}
                    >
                        {/* Price */}
                        <div className="text-center mb-6 sm:mb-8">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-lg sm:text-xl line-through" style={{ color: `${colors.warmSlate}66` }}>{t('paywall.originalPrice')}</span>
                                <span 
                                    className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-white"
                                    style={{ backgroundColor: '#ef4444' }}
                                >
                                    {t('paywall.discount')}
                                </span>
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl sm:text-5xl font-bold" style={{ color: colors.deepGold }}>{t('paywall.price')}</span>
                                <span className="text-sm sm:text-lg" style={{ color: `${colors.warmSlate}99` }}>{t('paywall.currency')}</span>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm" style={{ color: `${colors.warmSlate}66` }}>
                                {t('paywall.oneTime')}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div 
                                        className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full"
                                        style={{ backgroundColor: `${colors.deepGold}1a` }}
                                    >
                                        <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold" style={{ color: colors.warmSlate }}>{t(feature.titleKey)}</h3>
                                        <p className="text-xs sm:text-sm" style={{ color: `${colors.warmSlate}99` }}>{t(feature.descKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div>
                            <PaymentButton 
                                onSuccess={onPurchaseSuccess} 
                                onNavigateToTerms={() => onNavigate?.('terms')}
                                onNavigateToRefund={() => onNavigate?.('refund')}
                                onNavigateToPrivacy={() => onNavigate?.('privacy')}
                            />
                            <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-center" style={{ color: `${colors.warmSlate}66` }}>
                                {t('paywall.securePayment')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mt-8 sm:mt-12 max-w-lg text-center px-4">
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: `${colors.deepGold}b3` }}>
                        {t('paywall.benefit')}
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer 
                className="py-6 sm:py-10 mt-auto"
                style={{
                    ...styles.glassPanelWarm,
                    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.deepGold}80` }}>
                                {t('footer.copyright')}
                            </p>
                        </div>
                        <div className="flex gap-4 sm:gap-8">
                            <button onClick={() => onNavigate?.('terms')} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>{t('footer.terms')}</button>
                            <button onClick={() => onNavigate?.('refund')} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>{t('footer.refund')}</button>
                            <button onClick={() => onNavigate?.('privacy')} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>{t('footer.privacy')}</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PaywallPage
