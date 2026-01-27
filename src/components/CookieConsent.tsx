import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CookieConsent = () => {
    const { } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)
    const colors = {
        deepGold: '#b45309',
        warmSlate: '#475569',
    }

    useEffect(() => {
        const consent = localStorage.getItem('aura-classical-cookie-consent')
        if (!consent) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('aura-classical-cookie-consent', 'true')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div
            className="fixed bottom-4 left-4 right-4 z-[100] p-6 lg:left-auto lg:right-6 lg:max-w-md glass-panel-warm rounded-3xl border border-white/40 shadow-2xl fade-in"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-500">cookie</span>
                    <div>
                        <h4 className="font-bold text-sm sm:text-base" style={{ color: colors.warmSlate }}>쿠키 사용 안내</h4>
                        <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: `${colors.warmSlate}b3` }}>
                            사용자 경험 개선 및 맞춤형 광고 게재를 위해 쿠키를 사용합니다.
                            본 사이트를 계속 이용하면 쿠키 사용에 동의하는 것으로 간주됩니다.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleAccept}
                        className="yt-button px-6 py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg"
                    >
                        동의하고 계속하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieConsent
