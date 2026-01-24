import { useState } from 'react'
import './App.css'
import MoodInput from './components/MoodInput'
import MusicPlayer from './components/MusicPlayer'

interface MusicRecommendation {
  composer: string
  title: string
  youtubeId: string
  description: string
}

function App() {
  const [recommendation, setRecommendation] = useState<MusicRecommendation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleMoodSubmit = async (mood: string) => {
    setLoading(true)
    setError(null)
    setRecommendation(null)

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood }),
      })

      if (!response.ok) {
        throw new Error('Failed to get recommendation')
      }

      const data = await response.json()
      setRecommendation(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title fade-in">🎵 Music for Mom</h1>
        <p className="app-subtitle fade-in">임산부를 위한 클래식 음악 추천</p>
      </header>

      <main className="app-main">
        <MoodInput onSubmit={handleMoodSubmit} loading={loading} />

        {loading && (
          <div className="loading-container fade-in">
            <div className="spinner"></div>
            <p className="loading-text">당신을 위한 완벽한 음악을 찾고 있어요...</p>
          </div>
        )}

        {error && (
          <div className="error-container fade-in glass-card">
            <p className="error-text">❌ {error}</p>
          </div>
        )}

        {recommendation && !loading && (
          <MusicPlayer recommendation={recommendation} />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for expecting mothers</p>
      </footer>
    </div>
  )
}

export default App
