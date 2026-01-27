const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

interface PrivacyPageProps {
    onBack: () => void
}

function PrivacyPage({ onBack }: PrivacyPageProps) {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 lg:py-20" style={{ color: colors.warmSlate }}>
            <div className="glass-panel-warm rounded-3xl p-8 md:p-12">
                <h1 className="premium-serif text-3xl md:text-4xl font-semibold mb-2" style={{ color: colors.deepGold }}>
                    개인정보 처리방침
                </h1>
                <p className="text-sm mb-8" style={{ color: `${colors.warmSlate}99` }}>
                    Privacy Policy | 최종 수정일: 2026년 1월 24일
                </p>

                <div className="space-y-8 text-base leading-relaxed" style={{ color: `${colors.warmSlate}e6` }}>
                    {/* 하이라이트 박스 */}
                    <div
                        className="p-6 rounded-2xl border-l-4"
                        style={{ backgroundColor: `${colors.deepGold}10`, borderColor: colors.deepGold }}
                    >
                        <h3 className="font-bold mb-2" style={{ color: colors.deepGold }}>🔒 개인정보 보호 요약</h3>
                        <ul className="space-y-1">
                            <li>✅ 최소한의 정보만 수집합니다</li>
                            <li>✅ 결제 정보는 Polar가 안전하게 처리합니다</li>
                            <li>✅ 제3자에게 정보를 판매하지 않습니다</li>
                            <li>✅ 언제든지 데이터 삭제를 요청할 수 있습니다</li>
                        </ul>
                    </div>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>1. 수집하는 개인정보</h2>
                        <p className="mb-4">Aura Classical은 서비스 제공을 위해 최소한의 정보만 수집합니다.</p>

                        <h4 className="font-semibold mt-4 mb-2">필수 정보</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>이메일 주소</strong>: 결제 확인 및 고객 지원용 (Polar를 통해 수집)</li>
                        </ul>

                        <h4 className="font-semibold mt-4 mb-2">자동 수집 정보</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>기분 입력 데이터</strong>: AI 음악 추천을 위해 임시 사용 (서버에 저장되지 않음)</li>
                            <li><strong>브라우저 로컬 스토리지</strong>: 구매 상태, 저장된 음악 라이브러리 (사용자 기기에만 저장)</li>
                        </ul>

                        <h4 className="font-semibold mt-4 mb-2">수집하지 않는 정보</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>실명, 주소, 전화번호</li>
                            <li>건강 정보, 의료 기록</li>
                            <li>신용카드 정보 (Polar가 직접 처리)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>2. 개인정보 이용 목적</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>서비스 제공</strong>: AI 기반 음악 추천 서비스 제공</li>
                            <li><strong>결제 처리</strong>: 구매 확인 및 영수증 발송</li>
                            <li><strong>고객 지원</strong>: 문의 응대 및 환불 처리</li>
                            <li><strong>서비스 개선</strong>: 익명화된 사용 통계 분석</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>3. 개인정보 보관 기간</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>결제 정보</strong>: 관련 법령에 따라 5년간 보관 (전자상거래법)</li>
                            <li><strong>고객 문의 기록</strong>: 문의 해결 후 1년간 보관</li>
                            <li><strong>로컬 스토리지 데이터</strong>: 사용자가 직접 삭제할 때까지</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>4. 제3자 서비스</h2>
                        <p className="mb-4">서비스 운영을 위해 다음의 제3자 서비스를 이용합니다.</p>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <h4 className="font-semibold" style={{ color: colors.deepGold }}>Polar (결제 처리)</h4>
                                <p className="text-sm mt-1">결제 및 환불 처리를 담당합니다. 결제 정보는 Polar의 보안 시스템에서 처리되며, 당사는 카드 정보에 접근하지 않습니다.</p>
                                <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-sm underline" style={{ color: colors.deepGold }}>Polar 개인정보처리방침 →</a>
                            </div>

                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <h4 className="font-semibold" style={{ color: colors.deepGold }}>Google Gemini AI (음악 추천)</h4>
                                <p className="text-sm mt-1">AI 음악 추천을 위해 사용됩니다. 기분 데이터는 추천 생성 후 즉시 삭제되며, 개인 식별 정보는 전송되지 않습니다.</p>
                            </div>

                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <h4 className="font-semibold" style={{ color: colors.deepGold }}>YouTube (음악 재생)</h4>
                                <p className="text-sm mt-1">추천된 음악을 YouTube에서 검색하고 재생할 수 있습니다. YouTube 이용 시 Google의 개인정보처리방침이 적용됩니다.</p>
                            </div>

                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <h4 className="font-semibold" style={{ color: colors.deepGold }}>Cloudflare (호스팅)</h4>
                                <p className="text-sm mt-1">웹사이트 호스팅 및 보안을 담당합니다. 기본적인 접속 로그가 수집될 수 있습니다.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>5. 쿠키 및 로컬 스토리지</h2>
                        <p>
                            본 서비스는 쿠키를 사용하지 않습니다. 대신 브라우저의 로컬 스토리지를 사용하여
                            구매 상태와 저장된 음악 라이브러리를 저장합니다. 이 데이터는 사용자의 기기에만 저장되며,
                            서버로 전송되지 않습니다.
                        </p>
                        <p className="mt-2">
                            브라우저 설정에서 로컬 스토리지를 삭제하면 이 데이터가 삭제됩니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>6. 사용자 권리</h2>
                        <p className="mb-4">사용자는 다음과 같은 권리를 가집니다.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>열람권</strong>: 수집된 개인정보의 열람을 요청할 수 있습니다.</li>
                            <li><strong>정정권</strong>: 부정확한 정보의 정정을 요청할 수 있습니다.</li>
                            <li><strong>삭제권</strong>: 개인정보의 삭제를 요청할 수 있습니다.</li>
                            <li><strong>이동권</strong>: 개인정보를 다른 서비스로 이전할 수 있습니다.</li>
                        </ul>
                        <p className="mt-4">
                            위 권리 행사를 원하시면 아래 연락처로 문의해주세요.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>7. 개인정보 보호</h2>
                        <p>
                            당사는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>HTTPS를 통한 암호화된 통신</li>
                            <li>결제 정보의 분리 처리 (Polar)</li>
                            <li>최소한의 정보만 수집</li>
                            <li>정기적인 보안 점검</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>8. 아동의 개인정보</h2>
                        <p>
                            본 서비스는 만 14세 미만의 아동을 대상으로 하지 않습니다.
                            만 14세 미만 아동의 개인정보가 수집된 사실을 알게 된 경우, 즉시 해당 정보를 삭제합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>9. 개인정보처리방침 변경</h2>
                        <p>
                            본 개인정보처리방침은 법령 및 서비스 변경에 따라 수정될 수 있습니다.
                            중요한 변경사항이 있을 경우, 서비스 내 공지를 통해 안내드립니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3" style={{ color: colors.warmSlate }}>10. 문의</h2>
                        <p>
                            개인정보 관련 문의사항이 있으시면 아래로 연락해주세요.
                        </p>
                        <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                            <p><strong>개인정보 보호책임자</strong></p>
                            <p className="mt-2 font-semibold" style={{ color: colors.deepGold }}>
                                📧 nantenewyork@gmail.com
                            </p>
                        </div>
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

export default PrivacyPage
