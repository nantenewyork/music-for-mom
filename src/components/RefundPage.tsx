const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface RefundPageProps {
    onBack: () => void
}

function RefundPage({ onBack }: RefundPageProps) {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 lg:py-20" style={{ color: colors.warmSlate }}>
            <div className="glass-panel-warm rounded-3xl p-8 md:p-12">
                <h1 className="premium-serif text-3xl md:text-4xl font-semibold mb-2" style={{ color: colors.deepGold }}>
                    환불 규정
                </h1>
                <p className="text-sm mb-8" style={{ color: `${colors.warmSlate}99` }}>
                    Refund Policy | 최종 수정일: 2026년 1월 24일
                </p>

                <div className="space-y-8 text-base leading-relaxed" style={{ color: `${colors.warmSlate}e6` }}>
                    {/* 하이라이트 박스 */}
                    <div
                        className="p-6 rounded-2xl border-l-4"
                        style={{ backgroundColor: `${colors.deepGold}10`, borderColor: colors.deepGold }}
                    >
                        <h3 className="font-bold mb-2" style={{ color: colors.deepGold }}>💡 환불 요약</h3>
                        <ul className="space-y-1">
                            <li>✅ 구매 후 <strong>7일 이내</strong> 전액 환불 가능</li>
                            <li>✅ 서비스 장애 시 환불 가능</li>
                            <li>✅ Polar를 통한 안전한 환불 처리</li>
                        </ul>
                    </div>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>1. 환불 가능 기간</h2>
                        <p>
                            Aura Classical은 구매일로부터 <strong>7일 이내</strong>에 환불을 요청하실 수 있습니다.
                            7일이 경과한 후에는 원칙적으로 환불이 불가합니다.
                        </p>
                    </section>
                    {/* ... rest of content same ... */}
                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>2. 환불 가능한 경우</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>구매 후 7일 이내</strong>: 사유와 관계없이 전액 환불</li>
                            <li><strong>서비스 장애</strong>: 24시간 이상 서비스 이용이 불가능한 경우</li>
                            <li><strong>중복 결제</strong>: 동일 상품에 대해 중복 결제가 발생한 경우</li>
                            <li><strong>결제 오류</strong>: 시스템 오류로 인한 잘못된 결제</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>3. 환불 불가한 경우</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>구매 후 7일이 경과한 경우</li>
                            <li>서비스를 정상적으로 이용한 후 단순 변심</li>
                            <li>사용자의 기기 또는 인터넷 환경 문제로 인한 이용 불가</li>
                            <li>서비스 약관을 위반하여 이용이 제한된 경우</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>4. 환불 절차</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: colors.deepGold }}
                                >1</div>
                                <div>
                                    <h4 className="font-semibold">환불 요청</h4>
                                    <p className="text-sm" style={{ color: `${colors.warmSlate}99` }}>
                                        이메일(nantenewyork@gmail.com)로 환불 요청을 보내주세요.
                                        결제 시 사용한 이메일과 결제 ID를 함께 알려주세요.
                                    </p>
                                </div>
                            </div>
                            {/* ... more content ... */}
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: colors.deepGold }}
                                >2</div>
                                <div>
                                    <h4 className="font-semibold">검토 및 승인</h4>
                                    <p className="text-sm" style={{ color: `${colors.warmSlate}99` }}>
                                        영업일 기준 1~3일 내에 환불 요청을 검토하고 결과를 안내드립니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: colors.deepGold }}
                                >3</div>
                                <div>
                                    <h4 className="font-semibold">환불 처리</h4>
                                    <p className="text-sm" style={{ color: `${colors.warmSlate}99` }}>
                                        Polar를 통해 원래 결제 수단으로 환불됩니다.
                                        카드사에 따라 환불 반영까지 3~7 영업일이 소요될 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>5. 부분 환불</h2>
                        <p>
                            본 서비스는 일회성 구매(Lifetime Access) 상품으로, 부분 환불은 제공되지 않습니다.
                            환불 시 전액 환불 또는 환불 불가 중 하나로 처리됩니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>6. 결제 대행사 (Polar)</h2>
                        <p>
                            모든 결제 및 환불은 Polar를 통해 처리됩니다.
                            Polar의 결제 시스템과 관련된 문의는 Polar 고객센터를 통해서도 가능합니다.
                        </p>
                        <p className="mt-2">
                            <a
                                href="https://polar.sh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold underline"
                                style={{ color: colors.deepGold }}
                            >
                                Polar 웹사이트 방문 →
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>7. 문의</h2>
                        <p>
                            환불 관련 문의사항이 있으시면 아래로 연락해주세요.
                        </p>
                        <p className="mt-2 font-semibold" style={{ color: colors.deepGold }}>
                            📧 nantenewyork@gmail.com
                        </p>
                    </section>
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

export default RefundPage
