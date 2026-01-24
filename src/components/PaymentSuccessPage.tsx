import { useEffect, useState } from 'react'

interface PaymentSuccessPageProps {
    onContinue: () => void
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
}

function PaymentSuccessPage({ onContinue }: PaymentSuccessPageProps) {
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer)
                    onContinue()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [onContinue])

    return (
        <div 
            className="min-h-screen flex items-center justify-center px-4 sm:px-6"
            style={{ 
                ...styles.impressionistBg,
                color: colors.warmSlate,
                fontFamily: 'Manrope, sans-serif',
            }}
        >
            <div 
                className="w-full max-w-md rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 text-center"
                style={{
                    ...styles.glassPanelWarm,
                }}
            >
                {/* Success Icon */}
                <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    style={{
                        backgroundColor: '#10b981',
                        animation: 'pulse 2s ease-in-out infinite',
                    }}
                >
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-white">
                        check_circle
                    </span>
                </div>

                {/* Title */}
                <h1 
                    className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                    style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: colors.warmSlate,
                    }}
                >
                    결제 완료! 🎉
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-lg mb-4 sm:mb-6" style={{ color: `${colors.warmSlate}99` }}>
                    Aura Classical을 구매해주셔서 감사합니다
                </p>

                {/* Features unlocked */}
                <div 
                    className="rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8"
                    style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    }}
                >
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: '#059669' }}>
                        ✨ 모든 기능이 활성화되었습니다
                    </p>
                    <ul className="text-xs sm:text-sm mt-2 space-y-1" style={{ 
                        color: `${colors.warmSlate}99`, 
                        listStyle: 'none',
                        padding: 0,
                    }}>
                        <li>• AI 맞춤 클래식 음악 추천</li>
                        <li>• 개인 라이브러리 저장</li>
                        <li>• YouTube 연동</li>
                    </ul>
                </div>

                {/* Continue Button */}
                <button
                    onClick={onContinue}
                    className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold text-white"
                    style={{
                        background: `linear-gradient(135deg, ${colors.deepGold} 0%, ${colors.primaryWarm} 100%)`,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: `0 10px 25px -5px ${colors.deepGold}66`,
                    }}
                >
                    시작하기 ({countdown}초)
                </button>

                {/* Skip text */}
                <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs" style={{ color: `${colors.warmSlate}66` }}>
                    클릭하면 바로 시작할 수 있어요
                </p>
            </div>
        </div>
    )
}

export default PaymentSuccessPage
