import { useState, type FormEvent } from 'react'

interface MoodInputProps {
    onSubmit: (mood: string) => void
    loading: boolean
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

const MOOD_SUGGESTIONS = [
    { icon: 'wb_sunny', label: '평온함 찾기', mood: '평화롭고 고요해요' },
    { icon: 'favorite', label: '기쁨 느끼기', mood: '행복하고 설레요' },
    { icon: 'spa', label: '휴식 취하기', mood: '피곤하고 쉬고 싶어요' },
    { icon: 'cloud', label: '위로 받기', mood: '불안하고 걱정돼요' },
]

function MoodInput({ onSubmit, loading }: MoodInputProps) {
    const [mood, setMood] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (mood.trim() && !loading) {
            onSubmit(mood.trim())
        }
    }

    const handleSuggestionClick = (suggestion: string) => {
        if (!loading) {
            setMood(suggestion)
            onSubmit(suggestion)
        }
    }

    return (
        <div className="flex flex-col gap-8">
            {/* Input Form */}
            <form onSubmit={handleSubmit}>
                <div 
                    className="input-glow group relative flex w-full items-center rounded-full bg-white/70 p-2 soft-shadow transition-all"
                    style={{ border: `1px solid ${colors.deepGold}20` }}
                >
                    <div className="flex flex-1 items-center px-4">
                        <span 
                            className="material-symbols-outlined mr-3"
                            style={{ color: `${colors.deepGold}99` }}
                        >
                            auto_fix_high
                        </span>
                        <input
                            className="w-full border-none bg-transparent p-0 focus:ring-0 focus:outline-none text-lg"
                            style={{ color: colors.warmSlate }}
                            placeholder="오늘의 기분을 자유롭게 표현해주세요..."
                            type="text"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!mood.trim() || loading}
                        className="yt-button flex h-14 items-center gap-2 rounded-full px-10 font-bold text-white disabled:opacity-50 disabled:hover:transform-none"
                    >
                        <span>{loading ? '찾는 중...' : '큐레이션'}</span>
                        <span className="material-symbols-outlined text-lg">music_note</span>
                    </button>
                </div>
            </form>

            {/* Mood Suggestions */}
            <div className="flex flex-col gap-4">
                <p 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 text-center"
                    style={{ color: `${colors.warmSlate}99` }}
                >
                    또는 분위기를 선택하세요
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                    {MOOD_SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion.label}
                            onClick={() => handleSuggestionClick(suggestion.mood)}
                            disabled={loading}
                            className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/60 px-6 text-sm font-semibold transition-all disabled:opacity-50 hover:bg-white/90 hover:shadow-md"
                            style={{ 
                                color: colors.deepGold,
                                border: `1px solid ${colors.deepGold}20`
                            }}
                        >
                            <span className="material-symbols-outlined text-base">{suggestion.icon}</span>
                            {suggestion.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoodInput
