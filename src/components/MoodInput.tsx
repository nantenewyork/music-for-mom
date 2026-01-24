import { useState, type FormEvent } from 'react'

interface MoodInputProps {
    onSubmit: (mood: string) => void
    loading: boolean
}

const colors = {
    orange: '#E76F51',
    gold: '#E9C46A',
    green: '#76937F',
    teal: '#2A9D8F',
    peach: '#F4A261',
    ink: '#264653',
}

const MOOD_SUGGESTIONS = [
    { icon: 'wb_sunny', label: '햇살 가득', mood: '행복하고 따뜻해요', hoverColor: colors.gold },
    { icon: 'filter_drama', label: '안개 낀 아침', mood: '몽환적이고 평온해요', hoverColor: colors.orange },
    { icon: 'nature_people', label: '정원 산책', mood: '상쾌하고 활기차요', hoverColor: colors.green },
    { icon: 'water_drop', label: '잔잔한 물결', mood: '차분하고 고요해요', hoverColor: colors.teal },
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
        <div className="flex flex-col gap-8 fade-in">
            {/* Input Form */}
            <form onSubmit={handleSubmit}>
                <div 
                    className="input-glow group relative flex w-full max-w-xl items-center rounded-full bg-white/90 p-2 soft-shadow transition-all"
                    style={{ border: `1px solid ${colors.peach}33` }}
                >
                    <div className="flex flex-1 items-center px-4">
                        <span 
                            className="material-symbols-outlined mr-3"
                            style={{ color: `${colors.green}b3` }}
                        >
                            auto_fix_high
                        </span>
                        <input
                            className="w-full border-none bg-transparent p-0 focus:ring-0 focus:outline-none text-lg font-serif italic"
                            style={{ color: colors.ink }}
                            placeholder="오늘 아침의 기분을 표현해주세요..."
                            type="text"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!mood.trim() || loading}
                        className="flex h-14 items-center gap-2 rounded-full px-10 font-bold text-white transition-all hover:scale-[1.03] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                        style={{ 
                            backgroundColor: colors.orange,
                            boxShadow: `0 10px 25px -5px ${colors.orange}4d`
                        }}
                    >
                        <span>{loading ? '찾는 중...' : '큐레이션'}</span>
                        <span className="material-symbols-outlined text-lg">music_note</span>
                    </button>
                </div>
            </form>

            {/* Mood Suggestions */}
            <div className="flex flex-col gap-4">
                <p 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2"
                    style={{ color: `${colors.ink}66` }}
                >
                    현재 분위기를 선택하세요
                </p>
                <div className="flex flex-wrap gap-3">
                    {MOOD_SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion.label}
                            onClick={() => handleSuggestionClick(suggestion.mood)}
                            disabled={loading}
                            className="flex h-11 items-center justify-center gap-2 rounded-full bg-white/60 px-6 text-sm font-bold transition-all disabled:opacity-50 hover:scale-[1.02]"
                            style={{ 
                                color: colors.ink,
                                border: `1px solid ${colors.peach}33`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${suggestion.hoverColor}33`
                                e.currentTarget.style.borderColor = `${suggestion.hoverColor}66`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)'
                                e.currentTarget.style.borderColor = `${colors.peach}33`
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
