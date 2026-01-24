import PaymentButton from './PaymentButton'

interface PaywallPageProps {
    onPurchaseSuccess: () => void
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

function PaywallPage({ onPurchaseSuccess }: PaywallPageProps) {
    return (
        <div className="impressionist-bg body-sans min-h-screen overflow-x-hidden" style={{ color: colors.warmSlate }}>
            {/* Header */}
            <header className="sticky top-0 z-50 w-full glass-panel-warm border-b border-white/20">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex h-20 items-center justify-center">
                        <div className="flex items-center gap-3">
                            <div 
                                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
                                style={{ backgroundColor: colors.deepGold }}
                            >
                                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                            </div>
                            <h2 className="premium-serif text-2xl font-semibold tracking-tight" style={{ color: colors.deepGold }}>
                                Aura Classical
                            </h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-6 py-12 lg:py-20">
                {/* Hero */}
                <div className="text-center mb-12 fade-in max-w-3xl">
                    <div 
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 shadow-sm"
                        style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(217, 119, 6, 0.2)' }}
                    >
                        <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>verified</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: colors.deepGold }}>Lifetime Access</span>
                    </div>
                    
                    <h1 className="premium-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6" style={{ color: colors.warmSlate }}>
                        임산부를 위한<br />
                        <span className="italic" style={{ color: colors.deepGold }}>AI 클래식 음악</span> 큐레이션
                    </h1>
                    
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: `${colors.warmSlate}99` }}>
                        오늘의 기분에 맞는 클래식 음악으로, 당신과 아기의 특별한 순간을 더욱 빛나게 해드립니다.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="w-full max-w-lg fade-in">
                    <div className="glass-panel-warm painterly-shadow rounded-[2.5rem] p-8 md:p-10">
                        {/* Price */}
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-2xl line-through" style={{ color: `${colors.warmSlate}66` }}>$29</span>
                                <span 
                                    className="px-3 py-1 rounded-full text-sm font-bold text-white"
                                    style={{ backgroundColor: '#ef4444' }}
                                >
                                    59% OFF
                                </span>
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl md:text-6xl font-bold" style={{ color: colors.deepGold }}>$12</span>
                                <span className="text-lg" style={{ color: `${colors.warmSlate}99` }}>USD</span>
                            </div>
                            <p className="mt-2 text-sm" style={{ color: `${colors.warmSlate}66` }}>
                                일회성 결제 • 평생 이용
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div 
                                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                                        style={{ backgroundColor: `${colors.deepGold}1a` }}
                                    >
                                        <span className="material-symbols-outlined text-xl" style={{ color: colors.deepGold }}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold" style={{ color: colors.warmSlate }}>{feature.title}</h3>
                                        <p className="text-sm" style={{ color: `${colors.warmSlate}99` }}>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <PaymentButton onSuccess={onPurchaseSuccess} />
                            <p className="mt-4 text-xs" style={{ color: `${colors.warmSlate}66` }}>
                                🔒 안전한 결제 by Polar
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mt-16 max-w-2xl text-center">
                    <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.deepGold}b3` }}>
                        💕 임신 중 클래식 음악은 스트레스를 줄이고 태아와의 유대감을 높여줍니다.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="glass-panel-warm py-10 mt-auto border-t border-white/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: `${colors.deepGold}80` }}>
                                © 2024 Aura Classical AI
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Support</a>
                            <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Privacy</a>
                            <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PaywallPage
