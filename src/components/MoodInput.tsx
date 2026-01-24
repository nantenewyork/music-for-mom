import { useState, type FormEvent } from 'react'

interface MoodInputProps {
    onSubmit: (mood: string) => void
    loading: boolean
}

const MOOD_SUGGESTIONS = [
    { icon: 'wb_sunny', label: '햇살 가득', mood: '행복하고 따뜻해요' },
    { icon: 'filter_drama', label: '안개 낀 아침', mood: '몽환적이고 평온해요' },
    { icon: 'nature_people', label: '정원 산책', mood: '상쾌하고 활기차요' },
    { icon: 'water_drop', label: '잔잔한 물결', mood: '차분하고 고요해요' },
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
                <div className="input-glow group relative flex w-full max-w-xl items-center rounded-full bg-white/90 p-2 soft-shadow border border-impressionist-peach/20 transition-all">
                    <div className="flex flex-1 items-center px-4">
                        <span className="material-symbols-outlined text-impressionist-green/70 mr-3">auto_fix_high</span>
                        <input
                            className="w-full border-none bg-transparent p-0 text-ink placeholder:text-ink/30 focus:ring-0 focus:outline-none text-lg font-serif italic"
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
                        className="flex h-14 items-center gap-2 rounded-full bg-impressionist-orange px-10 font-bold text-white transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-impressionist-orange/30 disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <span>{loading ? '찾는 중...' : '큐레이션'}</span>
                        <span className="material-symbols-outlined text-lg">music_note</span>
                    </button>
                </div>
            </form>

            {/* Mood Suggestions */}
            <div className="flex flex-col gap-4">
                <p className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.2em] px-2">
                    현재 분위기를 선택하세요
                </p>
                <div className="flex flex-wrap gap-3">
                    {MOOD_SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion.label}
                            onClick={() => handleSuggestionClick(suggestion.mood)}
                            disabled={loading}
                            className="flex h-11 items-center justify-center gap-2 rounded-full border border-impressionist-peach/20 bg-white/60 px-6 text-sm font-bold text-ink hover:bg-impressionist-gold/20 hover:border-impressionist-gold/40 transition-all disabled:opacity-50"
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
