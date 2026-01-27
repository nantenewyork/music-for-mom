const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface ContactPageProps {
    onBack?: () => void
}

function ContactPage({ onBack = () => window.history.back() }: ContactPageProps) {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 lg:py-20" style={{ color: colors.warmSlate }}>
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
                            nantenewyork@gmail.com
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
            {/* Back Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={onBack}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/40 px-6 py-3 text-sm font-bold hover:bg-white/60 transition-all shadow-sm"
                    style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    돌아가기
                </button>
            </div>
        </div>
    )
}

export default ContactPage
