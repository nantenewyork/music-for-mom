import PaymentButton from './PaymentButton'

interface PaywallPageProps {
    onPurchaseSuccess: () => void
    onNavigate?: (page: 'terms' | 'refund' | 'privacy') => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

const features = [
    {
        icon: 'auto_awesome',
        title: 'AI 맞춤 큐레이션',
        description: '기분에 맞는 클래식 음악을 AI가 추천'
    },
    {
        icon: 'youtube_activity',
        title: 'YouTube 연동',
        description: '실제 YouTube 검색 결과로 바로 감상'
    },
    {
        icon: 'favorite',
        title: '개인 라이브러리',
        description: '마음에 드는 곡을 저장하고 관리'
    },
    {
        icon: 'all_inclusive',
        title: '평생 이용권',
        description: '한 번 구매로 영원히 사용'
    },
]

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
                <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{ display: 'flex', height: '5rem', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div 
                                style={{ 
                                    display: 'flex',
                                    height: '2.5rem',
                                    width: '2.5rem',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '9999px',
                                    backgroundColor: colors.deepGold,
                                    color: 'white',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>auto_awesome</span>
                            </div>
                            <h2 
                                style={{ 
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    letterSpacing: '-0.025em',
                                    color: colors.deepGold,
                                }}
                            >
                                Aura Classical
                            </h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 1.5rem' }}>
                {/* Hero */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '48rem' }}>
                    <div 
                        style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderRadius: '9999px',
                            padding: '0.375rem 1rem',
                            marginBottom: '1.5rem',
                            backgroundColor: 'rgba(254, 243, 199, 0.5)',
                            border: '1px solid rgba(217, 119, 6, 0.2)',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', color: colors.deepGold }}>verified</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: colors.deepGold }}>
                            Lifetime Access
                        </span>
                    </div>
                    
                    <h1 
                        style={{ 
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            color: colors.warmSlate,
                        }}
                    >
                        임산부를 위한<br />
                        <span style={{ fontStyle: 'italic', color: colors.deepGold }}>AI 클래식 음악</span> 큐레이션
                    </h1>
                    
                    <p style={{ fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto', color: `${colors.warmSlate}99` }}>
                        오늘의 기분에 맞는 클래식 음악으로, 당신과 아기의 특별한 순간을 더욱 빛나게 해드립니다.
                    </p>
                </div>

                {/* Pricing Card */}
                <div style={{ width: '100%', maxWidth: '28rem' }}>
                    <div 
                        style={{
                            ...styles.glassPanelWarm,
                            ...styles.painterlyShadow,
                            borderRadius: '2.5rem',
                            padding: '2rem',
                        }}
                    >
                        {/* Price */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', textDecoration: 'line-through', color: `${colors.warmSlate}66` }}>$29</span>
                                <span 
                                    style={{ 
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: 'white',
                                        backgroundColor: '#ef4444',
                                    }}
                                >
                                    59% OFF
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.25rem' }}>
                                <span style={{ fontSize: '3.5rem', fontWeight: 700, color: colors.deepGold }}>$12</span>
                                <span style={{ fontSize: '1.125rem', color: `${colors.warmSlate}99` }}>USD</span>
                            </div>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: `${colors.warmSlate}66` }}>
                                일회성 결제 • 평생 이용
                            </p>
                        </div>

                        {/* Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {features.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div 
                                        style={{ 
                                            display: 'flex',
                                            height: '2.5rem',
                                            width: '2.5rem',
                                            flexShrink: 0,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '9999px',
                                            backgroundColor: `${colors.deepGold}1a`,
                                        }}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: colors.deepGold }}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 700, color: colors.warmSlate }}>{feature.title}</h3>
                                        <p style={{ fontSize: '0.875rem', color: `${colors.warmSlate}99` }}>{feature.description}</p>
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
                            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: `${colors.warmSlate}66`, textAlign: 'center' }}>
                                🔒 안전한 결제 by Polar
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div style={{ marginTop: '4rem', maxWidth: '32rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.625, color: `${colors.deepGold}b3` }}>
                        💕 임신 중 클래식 음악은 스트레스를 줄이고 태아와의 유대감을 높여줍니다.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer 
                style={{
                    ...styles.glassPanelWarm,
                    padding: '2.5rem 0',
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                }}
            >
                <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', color: colors.deepGold }}>auto_awesome</span>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: `${colors.deepGold}80` }}>
                                © 2024 Aura Classical AI
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <button onClick={() => onNavigate?.('terms')} style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>Terms</button>
                            <button onClick={() => onNavigate?.('refund')} style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>Refund</button>
                            <button onClick={() => onNavigate?.('privacy')} style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: `${colors.deepGold}80`, background: 'none', border: 'none', cursor: 'pointer' }}>Privacy</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PaywallPage
