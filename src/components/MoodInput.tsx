import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

interface MoodInputProps {
    onSubmit: (mood: string) => void
    loading: boolean
    freeTrialUsed: boolean
    isPurchased: boolean
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

function MoodInput({ onSubmit, loading, freeTrialUsed, isPurchased }: MoodInputProps) {
    const { t } = useTranslation()
    const [mood, setMood] = useState('')

    const MOOD_SUGGESTIONS = [
        { icon: 'wb_sunny', labelKey: 'moods.peace', moodKey: 'moods.peaceMood' },
        { icon: 'favorite', labelKey: 'moods.joy', moodKey: 'moods.joyMood' },
        { icon: 'spa', labelKey: 'moods.rest', moodKey: 'moods.restMood' },
        { icon: 'cloud', labelKey: 'moods.comfort', moodKey: 'moods.comfortMood' },
    ]

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (mood.trim() && !loading) {
            onSubmit(mood.trim())
        }
    }

    const handleSuggestionClick = (moodKey: string) => {
        if (!loading) {
            const moodText = t(moodKey)
            setMood(moodText)
            onSubmit(moodText)
        }
    }

    return (
        <div className="flex flex-col gap-6 sm:gap-8">
            {/* Free Trial Badge */}
            {!isPurchased && !freeTrialUsed && (
                <div className="flex justify-center -mb-2 scale-in">
                    <div
                        className="px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm border"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderColor: `${colors.deepGold}66`,
                            color: colors.deepGold
                        }}
                    >
                        ✨ 1회 무료 체험 가능
                    </div>
                </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit}>
                {/* Desktop: 가로 배치, Mobile: 세로 배치 */}
                <div
                    className="input-glow group relative flex w-full flex-col sm:flex-row items-stretch sm:items-center rounded-3xl sm:rounded-full bg-white/70 p-3 sm:p-2 soft-shadow transition-all gap-3 sm:gap-0"
                    style={{ border: `1px solid ${colors.deepGold}20` }}
                >
                    <div className="flex flex-1 items-center px-3 sm:px-4">
                        <span
                            className="material-symbols-outlined mr-2 sm:mr-3 text-xl sm:text-2xl"
                            style={{ color: `${colors.deepGold}99` }}
                        >
                            auto_fix_high
                        </span>
                        <input
                            className="w-full border-none bg-transparent p-0 focus:ring-0 focus:outline-none text-base sm:text-lg"
                            style={{ color: colors.warmSlate }}
                            placeholder={t('home.inputPlaceholder')}
                            type="text"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!mood.trim() || loading}
                        className="yt-button flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full px-6 sm:px-10 font-bold text-white disabled:opacity-50 disabled:hover:transform-none text-sm sm:text-base"
                    >
                        <span>{loading ? t('home.searching') : t('home.curate')}</span>
                        <span className="material-symbols-outlined text-base sm:text-lg">music_note</span>
                    </button>
                </div>
            </form>

            {/* Mood Suggestions */}
            <div className="flex flex-col gap-3 sm:gap-4">
                <p
                    className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2 text-center"
                    style={{ color: `${colors.warmSlate}99` }}
                >
                    {t('home.orSelectMood')}
                </p>
                {/* Mobile: 2x2 그리드, Desktop: 가로 나열 */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 justify-center">
                    {MOOD_SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion.labelKey}
                            onClick={() => handleSuggestionClick(suggestion.moodKey)}
                            disabled={loading}
                            className="flex h-11 sm:h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-white/60 px-3 sm:px-6 text-xs sm:text-sm font-semibold transition-all disabled:opacity-50 hover:bg-white/90 hover:shadow-md"
                            style={{
                                color: colors.deepGold,
                                border: `1px solid ${colors.deepGold}20`
                            }}
                        >
                            <span className="material-symbols-outlined text-sm sm:text-base">{suggestion.icon}</span>
                            <span className="whitespace-nowrap">{t(suggestion.labelKey)}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoodInput
