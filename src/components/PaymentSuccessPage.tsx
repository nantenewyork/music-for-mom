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
            style={{ 
                ...styles.impressionistBg,
                color: colors.warmSlate,
                fontFamily: 'Manrope, sans-serif',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
            }}
        >
            <div 
                style={{
                    ...styles.glassPanelWarm,
                    borderRadius: '2.5rem',
                    padding: '3rem',
                    maxWidth: '28rem',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                {/* Success Icon */}
                <div 
                    style={{
                        width: '5rem',
                        height: '5rem',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        animation: 'pulse 2s ease-in-out infinite',
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'white' }}>
                        check_circle
                    </span>
                </div>

                {/* Title */}
                <h1 
                    style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: colors.warmSlate,
                        marginBottom: '0.75rem',
                    }}
                >
                    결제 완료! 🎉
                </h1>

                {/* Subtitle */}
                <p style={{ fontSize: '1.125rem', color: `${colors.warmSlate}99`, marginBottom: '1.5rem' }}>
                    Aura Classical을 구매해주셔서 감사합니다
                </p>

                {/* Features unlocked */}
                <div 
                    style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '1rem',
                        padding: '1rem',
                        marginBottom: '2rem',
                    }}
                >
                    <p style={{ fontSize: '0.875rem', color: '#059669', fontWeight: 600 }}>
                        ✨ 모든 기능이 활성화되었습니다
                    </p>
                    <ul style={{ 
                        fontSize: '0.875rem', 
                        color: `${colors.warmSlate}99`, 
                        marginTop: '0.5rem',
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
                    style={{
                        width: '100%',
                        padding: '1rem 2rem',
                        borderRadius: '9999px',
                        background: `linear-gradient(135deg, ${colors.deepGold} 0%, ${colors.primaryWarm} 100%)`,
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: `0 10px 25px -5px ${colors.deepGold}66`,
                    }}
                >
                    시작하기 ({countdown}초)
                </button>

                {/* Skip text */}
                <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: `${colors.warmSlate}66` }}>
                    클릭하면 바로 시작할 수 있어요
                </p>
            </div>
        </div>
    )
}

export default PaymentSuccessPage
