const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface AboutPageProps {
    onBack?: () => void
}

function AboutPage({ onBack = () => window.history.back() }: AboutPageProps) {
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
                <div className="glass-panel-warm rounded-3xl p-8 md:p-12">
                    <h1 className="premium-serif text-3xl md:text-4xl font-semibold mb-6" style={{ color: colors.deepGold }}>
                        About Music for Mom
                    </h1>

                    <div className="space-y-8 text-base leading-relaxed" style={{ color: `${colors.warmSlate}e6` }}>
                        <section>
                            <p>
                                <strong>Music for Mom</strong>은 임산부와 태아를 위한 가장 특별하고 따뜻한 공간입니다.
                                임신 기간 동안 겪게 되는 다양한 감정의 변화—기쁨, 불안, 설렘, 그리고 피로함—를 클래식 음악의 선율로 어루만져 드립니다.
                            </p>
                        </section>

                        <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.5)' }}>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>우리의 미션</h2>
                            <p>
                                우리는 AI 기술을 통해 모든 임산부가 자신의 현재 기분에 몰입하고,
                                음악을 통해 심리적 안정을 찾을 수 있도록 돕습니다.
                                태교는 단순한 교육이 아니라, 엄마와 아기가 교감하는 가장 아름다운 소통의 시간입니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>왜 클래식 음악인가요?</h2>
                            <p>
                                클래식 음악의 규칙적인 리듬과 풍부한 화음은 뇌파를 안정시키고 스트레스 호르몬 수치를 낮추는 데 효과적이라는 연구 결과가 많습니다.
                                특히 임산부의 정서적 안정은 태아의 두뇌 발달과 정서 형성에도 긍정적인 영향을 미칩니다.
                            </p>
                        </section>

                        <section className="text-center pt-8">
                            <p className="italic" style={{ color: colors.deepGold }}>
                                "당신과 아기가 함께 듣는 모든 음표가 축복이 되기를 바랍니다."
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutPage
