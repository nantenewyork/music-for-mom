const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

function GuidePage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 lg:py-20" style={{ color: colors.warmSlate }}>
            <div className="mb-12 text-center">
                <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 shadow-sm"
                    style={{ backgroundColor: 'rgba(254, 243, 199, 0.6)', border: '1px solid rgba(217, 119, 6, 0.3)' }}
                >
                    <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>menu_book</span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>Music Therapy Guide</span>
                </div>
                <h1 className="premium-serif text-3xl sm:text-5xl font-light leading-tight mb-4" style={{ color: colors.warmSlate }}>
                    태교 음악 <span className="italic" style={{ color: colors.deepGold }}>가이드</span>
                </h1>
                <p className="text-sm sm:text-lg opacity-70 max-w-2xl mx-auto">
                    엄마와 아기가 음악으로 교감하며 정서적 안정을 찾는 가장 아름다운 방법을 안내해 드립니다.
                </p>
            </div>

            <div className="space-y-12">
                {/* Article 1 */}
                <article className="glass-panel-warm rounded-3xl p-8 md:p-12 fade-in">
                    <h2 className="premium-serif text-2xl md:text-3xl font-semibold mb-6" style={{ color: colors.deepGold }}>
                        1. 왜 클래식 태교 음악이 중요한가요?
                    </h2>
                    <div className="space-y-4 leading-relaxed text-base opacity-90">
                        <p>
                            임신 중기 이후 아기의 청각 기관은 발달을 마치고 외부 소리에 반응하기 시작합니다. 이때 들려주는 음악은 단순한 소리가 아니라 아기에게 전달되는 첫 번째 '자극'이자 '선물'입니다.
                        </p>
                        <p>
                            연구에 따르면, 규칙적인 리듬과 풍부한 화음을 가진 클래식 음악은 산모의 뇌파를 안정시키고 스트레스 호르몬 수치를 낮추는 데 효과적입니다. 엄마의 안정이 곧 아기의 안정이 되는 것입니다.
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>정서적 교감</strong>: 음악을 들으며 느끼는 행복감이 태아에게 고스란히 전달됩니다.</li>
                            <li><strong>두뇌 발달 도움</strong>: 다양한 음의 변화가 아기의 뇌 신경계 발달을 자극합니다.</li>
                            <li><strong>안정적인 심박수</strong>: 평온한 선율은 태아의 심박수를 규칙적으로 유지해 줍니다.</li>
                        </ul>
                    </div>
                </article>

                {/* Article 2 */}
                <article className="glass-panel-warm rounded-3xl p-8 md:p-12 fade-in">
                    <h2 className="premium-serif text-2xl md:text-3xl font-semibold mb-6" style={{ color: colors.deepGold }}>
                        2. 태교에 좋은 작곡가 TOP 3
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-white/30 border border-white/20">
                            <h3 className="font-bold text-lg mb-2">모차르트 (Mozart)</h3>
                            <p className="text-sm opacity-80">학습 효율과 창의력을 높여준다는 '모차르트 효과'로 유명합니다. 명랑하고 규칙적인 선율이 특징입니다.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/30 border border-white/20">
                            <h3 className="font-bold text-lg mb-2">바흐 (Bach)</h3>
                            <p className="text-sm opacity-80">질서 정연한 구조의 음악으로 마음의 평온을 되찾아 줍니다. 명상이나 휴식 시간에 듣기 가장 좋습니다.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/30 border border-white/20">
                            <h3 className="font-bold text-lg mb-2">드뷔시 (Debussy)</h3>
                            <p className="text-sm opacity-80">부드러운 음색과 서정적인 멜로디가 상상력을 자극합니다. 태담을 나눌 때 배경 음악으로 추천합니다.</p>
                        </div>
                    </div>
                </article>

                {/* Article 3 */}
                <article className="glass-panel-warm rounded-3xl p-8 md:p-12 fade-in">
                    <h2 className="premium-serif text-2xl md:text-3xl font-semibold mb-6" style={{ color: colors.deepGold }}>
                        3. 아기에게 음악을 들려주는 올바른 방법
                    </h2>
                    <div className="space-y-4 leading-relaxed text-base opacity-90">
                        <p>
                            가장 중요한 원칙은 <strong>'엄마가 즐거워야 한다'</strong>는 것입니다. 아무리 좋은 음악이라도 엄마가 지루하거나 불편하다면 태아에게 긍정적인 영향을 주기 어렵습니다.
                        </p>
                        <div className="bg-white/40 p-6 rounded-2xl border-l-4" style={{ borderColor: colors.deepGold }}>
                            <p className="mb-2"><strong>💡 이런 점에 유의해 보세요:</strong></p>
                            <ul className="space-y-2 text-sm">
                                <li>✔️ 볼륨은 조용한 실내 대화 수준 정도로 유지하세요.</li>
                                <li>✔️ 하루 중 가장 여유롭고 편안한 시간(식후나 잠들기 전)을 활용하세요.</li>
                                <li>✔️ 단순히 듣는 것에 그치지 말고 음악의 느낌을 아기에게 말해주듯 태담을 나누어 보세요.</li>
                            </ul>
                        </div>
                    </div>
                </article>

                {/* CTA */}
                <div className="text-center pt-8">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="yt-button inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-bold text-white shadow-xl"
                    >
                        <span className="material-symbols-outlined">music_note</span>
                        나의 기분에 맞는 음악 추천받기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GuidePage
