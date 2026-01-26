const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface TermsPageProps {
    onBack: () => void
}

function TermsPage({ onBack }: TermsPageProps) {
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
                    <h1 className="premium-serif text-3xl md:text-4xl font-semibold mb-2" style={{ color: colors.deepGold }}>
                        서비스 이용약관
                    </h1>
                    <p className="text-sm mb-8" style={{ color: `${colors.warmSlate}99` }}>
                        Terms of Service | 최종 수정일: 2026년 1월 24일
                    </p>

                    <div className="space-y-8 text-base leading-relaxed" style={{ color: `${colors.warmSlate}e6` }}>
                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>1. 서비스 개요</h2>
                            <p>
                                Aura Classical(이하 "서비스")은 임산부를 위한 AI 기반 클래식 음악 큐레이션 서비스입니다.
                                사용자의 기분에 맞는 클래식 음악을 AI가 추천해드립니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>2. 서비스 이용</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>본 서비스는 일회성 구매(Lifetime Access)로 제공됩니다.</li>
                                <li>구매 후 무제한으로 AI 음악 추천 기능을 이용할 수 있습니다.</li>
                                <li>서비스는 웹 브라우저를 통해 제공되며, 인터넷 연결이 필요합니다.</li>
                                <li>YouTube 연동 기능은 YouTube의 서비스 약관을 따릅니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>3. 결제 및 구매</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>결제는 Polar를 통해 안전하게 처리됩니다.</li>
                                <li>가격은 USD 기준이며, 환율에 따라 실제 청구 금액이 달라질 수 있습니다.</li>
                                <li>구매 완료 후 즉시 서비스 이용이 가능합니다.</li>
                                <li>환불 정책은 별도의 환불 규정을 참조해주세요.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>4. 사용자 의무</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>서비스를 불법적인 목적으로 사용할 수 없습니다.</li>
                                <li>타인의 계정을 무단으로 사용할 수 없습니다.</li>
                                <li>서비스의 정상적인 운영을 방해하는 행위를 금지합니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>5. 서비스 제한</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>본 서비스는 의료 서비스가 아니며, 전문적인 의료 조언을 대체하지 않습니다.</li>
                                <li>AI 추천은 참고용이며, 개인의 건강 상태에 따라 적합하지 않을 수 있습니다.</li>
                                <li>서비스 이용 중 불편함을 느끼시면 즉시 사용을 중단해주세요.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>6. 지적재산권</h2>
                            <p>
                                서비스의 디자인, 로고, 콘텐츠 등 모든 지적재산권은 Aura Classical에 귀속됩니다.
                                추천되는 음악의 저작권은 해당 권리자에게 있으며, YouTube를 통해 합법적으로 제공됩니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>7. 서비스 변경 및 중단</h2>
                            <p>
                                서비스 개선을 위해 사전 공지 후 서비스 내용을 변경할 수 있습니다.
                                불가피한 사유로 서비스가 중단될 경우, 사전에 공지하며 필요시 환불 조치를 취합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>8. 면책조항</h2>
                            <p>
                                서비스 이용으로 인한 직접적, 간접적 손해에 대해 법적 책임을 지지 않습니다.
                                다만, 회사의 고의 또는 중과실로 인한 손해는 예외로 합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>9. 문의</h2>
                            <p>
                                서비스 관련 문의사항이 있으시면 아래로 연락해주세요.
                            </p>
                            <p className="mt-2 font-semibold" style={{ color: colors.deepGold }}>
                                📧 nantenewyork@gmail.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TermsPage
