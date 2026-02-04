import PaymentButton from './PaymentButton'

interface PaywallPageProps {
    onPurchaseSuccess: () => void
    onNavigate?: (page: 'terms' | 'refund' | 'privacy') => void
    userId?: string
    userEmail?: string
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

function PaywallPage({ onPurchaseSuccess, onNavigate, userId, userEmail }: PaywallPageProps) {

    const problems = [
        { icon: 'search', text: '태교 음악 찾는 데 매일 30분씩 소비' },
        { icon: 'repeat', text: '같은 곡만 반복해서 지루함' },
        { icon: 'quiz', text: '오늘 기분에 맞는 곡을 모르겠음' },
    ]

    const features = [
        {
            icon: 'auto_awesome',
            title: '무제한 AI 음악 추천',
            desc: '하루 종일 몇 번이든 새로운 음악 발견'
        },
        {
            icon: 'partly_cloudy_day',
            title: '날씨 기반 큐레이션',
            desc: '오늘의 날씨에 어울리는 클래식 선곡'
        },
        {
            icon: 'cloud_sync',
            title: '클라우드 저장소',
            desc: '모든 기기에서 저장한 음악 동기화'
        },
        {
            icon: 'block',
            title: '광고 없는 경험',
            desc: '순수하게 음악에만 집중할 수 있어요'
        },
    ]

    const earlyAdopterBenefits = [
        '평생 ₩9,900 고정 (향후 가격 인상 없음)',
        '신기능 우선 체험 및 베타 테스터 기회',
        '피드백 직접 반영 (당신이 서비스를 만듭니다)',
    ]

    return (
        <div
            style={{
                ...styles.impressionistBg,
                color: colors.warmSlate,
                fontFamily: 'Manrope, sans-serif',
                width: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 1rem',
            }}
        >
            <main className="flex-1 flex flex-col items-center w-full max-w-5xl">
                {/* Hero */}
                <div className="text-center mb-8 sm:mb-12 max-w-3xl px-2">
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4"
                        style={{
                            backgroundColor: 'rgba(134, 239, 172, 0.3)',
                            border: '1px solid rgba(34, 197, 94, 0.4)',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <span className="material-symbols-outlined text-xs sm:text-sm text-green-700">eco</span>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-green-700">
                            출시 기념 특별 혜택
                        </span>
                    </div>

                    <h1
                        className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4"
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            color: colors.warmSlate,
                        }}
                    >
                        태교 음악, 이제 AI가<br />
                        <span style={{ fontStyle: 'italic', color: colors.deepGold }}>매일 골라드립니다</span>
                    </h1>

                    <p className="text-sm sm:text-lg max-w-2xl mx-auto mb-8" style={{ color: `${colors.warmSlate}99` }}>
                        Music for Mom이 3초 만에 해결합니다
                    </p>

                    {/* Problems */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 max-w-2xl mx-auto">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50/80 border border-red-100"
                            >
                                <span className="material-symbols-outlined text-red-600 text-lg">{problem.icon}</span>
                                <span className="text-xs sm:text-sm text-red-800 font-medium">{problem.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="w-full grid md:grid-cols-2 gap-6 px-2 max-w-5xl">
                    {/* Left: Free Trial Card */}
                    <div
                        className="rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8"
                        style={{
                            ...styles.glassPanelWarm,
                            ...styles.painterlyShadow,
                        }}
                    >
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-4">
                                <span className="material-symbols-outlined text-green-600">verified</span>
                                <span className="text-sm font-bold text-green-800">3일 무료 체험</span>
                            </div>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-5xl font-bold" style={{ color: colors.deepGold }}>₩9,900</span>
                                <span className="text-lg" style={{ color: `${colors.warmSlate}99` }}>/월</span>
                            </div>
                            <p className="text-xs text-amber-800 font-medium">
                                ☕ 커피 2잔 값으로 매일 새로운 음악
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-3 mb-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                                        style={{ backgroundColor: `${colors.deepGold}1a` }}
                                    >
                                        <span className="material-symbols-outlined text-lg" style={{ color: colors.deepGold }}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold" style={{ color: colors.warmSlate }}>{feature.title}</h3>
                                        <p className="text-xs" style={{ color: `${colors.warmSlate}99` }}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div>
                            <PaymentButton
                                onSuccess={onPurchaseSuccess}
                                onNavigateToTerms={() => onNavigate?.('terms')}
                                onNavigateToRefund={() => onNavigate?.('refund')}
                                onNavigateToPrivacy={() => onNavigate?.('privacy')}
                                userId={userId}
                                userEmail={userEmail}
                            />
                            <p className="mt-3 text-xs text-center" style={{ color: `${colors.warmSlate}66` }}>
                                ✅ 3일 동안 완전 무료 · ⏰ 체험 종료 1일 전 알림 · 🔓 1클릭 해지
                            </p>
                        </div>
                    </div>

                    {/* Right: Early Adopter Benefits */}
                    <div className="flex flex-col gap-6">
                        {/* Early Adopter Card */}
                        <div
                            className="rounded-3xl p-6 border-2 border-amber-200"
                            style={{
                                background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.2) 100%)',
                                boxShadow: '0 8px 30px rgba(217, 119, 6, 0.15)',
                            }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-symbols-outlined text-2xl text-amber-700">emoji_events</span>
                                <h2 className="text-lg font-bold text-amber-900">얼리 어답터 특별 혜택</h2>
                            </div>
                            <p className="text-sm text-amber-800 mb-4">
                                선착순 <strong>100명</strong>까지만 제공됩니다
                            </p>
                            <ul className="space-y-2">
                                {earlyAdopterBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-amber-600 text-lg mt-0.5">star</span>
                                        <span className="text-sm text-amber-900">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Risk-Free Guarantee */}
                        <div
                            className="rounded-2xl p-5 bg-white/50 border border-white/60"
                            style={styles.glassPanelWarm}
                        >
                            <h3 className="text-base font-bold mb-3" style={{ color: colors.warmSlate }}>
                                💯 리스크 제로 보장
                            </h3>
                            <ul className="space-y-2 text-sm" style={{ color: `${colors.warmSlate}cc` }}>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>3일 안에 해지하면 <strong>완전 무료</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>카드 등록 필요하지만 <strong>즉시 청구 없음</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>언제든지 <strong>1클릭으로 해지</strong> 가능</span>
                                </li>
                            </ul>
                        </div>

                        {/* Transparency Note */}
                        <div className="text-xs text-center p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                            <p className="text-blue-800">
                                <strong>투명한 운영:</strong> Music for Mom은 2026년 1월 출시된 신규 서비스입니다.
                                완벽하진 않지만 매일 개선하고 있습니다. 함께 좋은 서비스를 만들어요! 🙏
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PaywallPage
