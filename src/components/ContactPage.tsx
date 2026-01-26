const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface ContactPageProps {
    onBack?: () => void
}

function ContactPage({ onBack = () => window.history.back() }: ContactPageProps) {
    return (
        <div className="impressionist-bg body-sans min-h-screen overflow-x-hidden" style={{ color: colors.warmSlate }}>
            {/* Header */}
            <header className="sticky top-0 z-50 w-full glass-panel-warm border-b border-white/20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="flex h-16 items-center gap-4">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-sm font-semibold transition-colors"
                            style={{ color: colors.deepGold }}
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            돌아가기
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-12">
                <div className="glass-panel-warm rounded-3xl p-8 md:p-12 text-center">
                    <h1 className="premium-serif text-3xl md:text-4xl font-semibold mb-6" style={{ color: colors.deepGold }}>
                        Contact Us
                    </h1>

                    <div className="space-y-8 text-base leading-relaxed" style={{ color: `${colors.warmSlate}e6` }}>
                        <p>
                            Music for Mom 서비스에 대한 제안이나 불편 사항,
                            기타 문의사항이 있으시면 언제든지 연락해 주세요.
                        </p>

                        <div className="p-8 rounded-3xl border-2 border-dashed" style={{ borderColor: `${colors.deepGold}33`, backgroundColor: 'rgba(255,255,255,0.3)' }}>
                            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: colors.deepGold }}>이메일 문의</p>
                            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.warmSlate }}>
                                support@auraclassical.com
                            </p>
                        </div>

                        <div className="pt-8">
                            <p className="text-sm" style={{ color: `${colors.warmSlate}99` }}>
                                평일 기준 24시간 이내에 답변을 드릴 수 있도록 노력하겠습니다.
                                여러분의 소중한 의견은 더 나은 서비스를 만드는 데 큰 힘이 됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactPage
