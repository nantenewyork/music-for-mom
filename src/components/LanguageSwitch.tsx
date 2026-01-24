import { useTranslation } from 'react-i18next'

const colors = {
    deepGold: '#b45309',
}

function LanguageSwitch() {
    const { i18n } = useTranslation()
    
    const currentLang = i18n.language?.startsWith('ko') ? 'ko' : 'en'
    
    const toggleLanguage = () => {
        const newLang = currentLang === 'ko' ? 'en' : 'ko'
        i18n.changeLanguage(newLang)
    }

    return (
        <button
            onClick={toggleLanguage}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors text-xs sm:text-sm font-bold"
            style={{ 
                border: `1px solid ${colors.deepGold}33`,
                color: colors.deepGold,
            }}
            title={currentLang === 'ko' ? 'Switch to English' : '한국어로 변경'}
        >
            {currentLang === 'ko' ? 'EN' : '한'}
        </button>
    )
}

export default LanguageSwitch
