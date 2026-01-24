import { useState, FormEvent } from 'react'
import './MoodInput.css'

interface MoodInputProps {
    onSubmit: (mood: string) => void
    loading: boolean
}

const MOOD_SUGGESTIONS = [
    '😊 행복해요',
    '😌 평온해요',
    '😰 불안해요',
    '😔 우울해요',
    '😴 피곤해요',
    '😤 스트레스 받아요',
    '🥰 설레요',
    '😢 슬퍼요',
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
        <div className="mood-input-container glass-card fade-in">
            <h2 className="mood-input-title">지금 기분이 어떠세요?</h2>
            <p className="mood-input-description">
                당신의 기분에 맞는 클래식 음악을 추천해드릴게요
            </p>

            <form onSubmit={handleSubmit} className="mood-form">
                <input
                    type="text"
                    className="input mood-input"
                    placeholder="예: 행복해요, 불안해요, 평온해요..."
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!mood.trim() || loading}
                >
                    {loading ? '찾는 중...' : '음악 추천받기'}
                </button>
            </form>

            <div className="mood-suggestions">
                <p className="suggestions-label">또는 아래에서 선택하세요:</p>
                <div className="suggestions-grid">
                    {MOOD_SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion}
                            className="suggestion-btn glass-card"
                            onClick={() => handleSuggestionClick(suggestion)}
                            disabled={loading}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoodInput
