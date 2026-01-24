import { useState } from 'react'
import MoodInput from './components/MoodInput'
import ResultPage from './components/ResultPage'

interface MusicRecommendation {
  composer: string
  title: string
  youtubeId: string
  description: string
}

const colors = {
  deepGold: '#b45309',
  primaryWarm: '#d97706',
  warmSlate: '#475569',
}

function App() {
  const [recommendation, setRecommendation] = useState<MusicRecommendation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentMood, setCurrentMood] = useState<string>('')

  // 기본 추천 음악 (API 실패 시 fallback)
  const fallbackRecommendations = [
    {
      composer: 'Claude Debussy',
      title: 'Clair de Lune',
      youtubeId: '',
      description: '이 인상주의 걸작은 잔잔한 호흡처럼 부드러운 리듬의 물결을 사용합니다. 드뷔시의 몽환적인 질감은 당신과 아기 모두에게 고요한 환경을 조성하는 완벽한 음향 동반자입니다.'
    },
    {
      composer: 'Johann Pachelbel',
      title: 'Canon in D Major',
      youtubeId: '',
      description: '이 곡은 부드럽고 평화로운 선율로 임산부에게 안정감과 행복감을 선사합니다. 반복되는 아름다운 화음은 마음을 편안하게 하고, 아기와 함께하는 순간의 기쁨을 더욱 깊게 느낄 수 있도록 도와줍니다.'
    },
    {
      composer: 'Ludwig van Beethoven',
      title: 'Moonlight Sonata',
      youtubeId: '',
      description: '달빛 소나타의 첫 악장은 깊은 평온함과 명상적인 분위기를 자아냅니다. 고요하고 서정적인 멜로디가 마음의 안정을 가져다주어 임산부의 휴식에 이상적입니다.'
    },
    {
      composer: 'Antonio Vivaldi',
      title: 'The Four Seasons - Spring',
      youtubeId: '',
      description: '봄의 생동감과 기쁨을 표현하며, 따뜻하고 활기찬 멜로디가 듣는 이에게 행복감을 선사합니다. 임산부가 느끼는 행복한 감정을 더욱 풍요롭게 해줍니다.'
    },
  ]

  const handleMoodSubmit = async (mood: string) => {
    setLoading(true)
    setError(null)
    setCurrentMood(mood)

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
      // API 실패 시 fallback 음악 사용
      const randomIndex = Math.floor(Math.random() * fallbackRecommendations.length)
      setRecommendation(fallbackRecommendations[randomIndex])
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setRecommendation(null)
    setCurrentMood('')
  }

  const handleGenerateAnother = () => {
    if (currentMood) {
      handleMoodSubmit(currentMood)
    }
  }

  // 결과 페이지 표시
  if (recommendation) {
    return (
      <ResultPage 
        recommendation={recommendation} 
        mood={currentMood}
        onReset={handleReset}
        onGenerateAnother={handleGenerateAnother}
      />
    )
  }

  // 초기 화면 (기분 입력)
  return (
    <div className="impressionist-bg body-sans min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-panel-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
                style={{ backgroundColor: colors.deepGold }}
              >
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <h2 className="premium-serif text-2xl font-semibold tracking-tight" style={{ color: colors.deepGold }}>
                Aura Classical
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a className="text-sm font-semibold transition-colors" style={{ color: `${colors.deepGold}cc` }} href="#">Library</a>
              <a className="text-sm font-semibold transition-colors" style={{ color: `${colors.deepGold}cc` }} href="#">Science</a>
              <a className="text-sm font-semibold transition-colors" style={{ color: `${colors.deepGold}cc` }} href="#">Profile</a>
            </nav>
            <div className="flex items-center gap-4">
              <button 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                style={{ border: `1px solid ${colors.deepGold}33` }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: colors.deepGold }}>settings</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="mb-12 text-center fade-in">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 shadow-sm"
            style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(217, 119, 6, 0.2)' }}
          >
            <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: colors.deepGold }}>Aura Insight</span>
          </div>
          <h1 className="premium-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: colors.warmSlate }}>
            당신의 기분을 <span className="italic" style={{ color: colors.deepGold }}>클래식 하모니</span>로
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: `${colors.warmSlate}b3` }}>
            AI가 맞춤 선별한 클래식 음악으로, 당신과 아이 사이의 빛나는 유대를 키워드립니다.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center fade-in py-20">
            <div className="spinner mx-auto mb-6"></div>
            <p className="premium-serif text-xl italic" style={{ color: `${colors.warmSlate}b3` }}>
              당신을 위한 완벽한 음악을 찾고 있어요...
            </p>
          </div>
        ) : (
          /* Mood Input */
          <div className="w-full max-w-2xl fade-in">
            <MoodInput onSubmit={handleMoodSubmit} loading={loading} />
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-8 p-6 rounded-[2rem] bg-red-50 border border-red-200 text-center fade-in max-w-md">
            <p className="text-red-600 font-medium">❌ {error}</p>
            <button 
              onClick={() => setError(null)}
              className="mt-4 text-sm font-bold"
              style={{ color: colors.deepGold }}
            >
              다시 시도
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-20 max-w-2xl text-center">
          <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.deepGold}b3` }}>
            임신 중 클래식 음악은 코르티솔을 낮추고 태아와의 유대감을 강화합니다.
            <br/>
            <a 
              className="font-bold transition-all"
              style={{ color: colors.deepGold, borderBottom: `1px solid ${colors.deepGold}4d` }}
              href="#"
            >
              과학적 접근 방식 알아보기
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-panel-warm py-10 mt-auto border-t border-white/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: `${colors.deepGold}80` }}>
                © 2024 Aura Classical AI
              </p>
            </div>
            <div className="flex gap-8">
              <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Support</a>
              <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Privacy</a>
              <a className="text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
