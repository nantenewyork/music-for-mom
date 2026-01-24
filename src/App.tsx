import { useState } from 'react'
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
    <div className="painterly-bg min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-impressionist-orange text-white shadow-lg shadow-impressionist-orange/20">
                <span className="material-symbols-outlined text-2xl">palette</span>
              </div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink">Aura Classical</h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a className="text-sm font-semibold text-ink/80 hover:text-impressionist-orange transition-colors" href="#">철학</a>
              <a className="text-sm font-semibold text-ink/80 hover:text-impressionist-orange transition-colors" href="#">과학</a>
              <a className="text-sm font-semibold text-ink/80 hover:text-impressionist-orange transition-colors" href="#">큐레이션</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-10 order-2 lg:order-1">
              <div className="flex flex-col gap-5 fade-in">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-impressionist-orange">
                  <span className="h-[2px] w-8 bg-impressionist-orange/40"></span> 생명의 빛에서 영감을 받아
                </span>
                <h1 className="font-serif text-5xl font-medium leading-[1.1] text-ink md:text-6xl lg:text-7xl">
                  당신의 기분을 <br/>
                  <span className="italic text-impressionist-orange font-normal">시대를 초월한 하모니</span>로
                </h1>
                <p className="max-w-lg text-xl text-ink/70 font-serif italic leading-relaxed">
                  AI가 맞춤 선별한 인상주의 클래식 음악으로, 당신과 아이 사이의 빛나는 유대를 키워드립니다.
                </p>
              </div>

              {/* Mood Input Component */}
              <MoodInput onSubmit={handleMoodSubmit} loading={loading} />
            </div>

            {/* Right Column - Image or Music Player */}
            <div className="relative order-1 lg:order-2 flex justify-center fade-in">
              <div className="absolute -top-16 -right-16 h-80 w-80 rounded-full bg-impressionist-gold/15 blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-impressionist-green/10 blur-3xl"></div>
              
              {loading ? (
                <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
                  <div className="text-center">
                    <div className="spinner mx-auto mb-6"></div>
                    <p className="font-serif text-xl italic text-ink/70">당신을 위한 완벽한 음악을 찾고 있어요...</p>
                  </div>
                </div>
              ) : recommendation ? (
                <MusicPlayer recommendation={recommendation} />
              ) : (
                <div className="relative organic-frame overflow-hidden aspect-[4/5] w-full max-w-md shadow-[0_30px_60px_-15px_rgba(231,111,81,0.2)] border-[16px] border-white/80">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-1000 hover:scale-110" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx3KTb0WdXFsKKL4mNBiXTYlr9whWo-hdSc4WlXMfD2ljyzKHaVNULu4L_oRI2tlcFOK15YPuYyxH2XasnYq54lobFyDox6DlKAH3acNi-pbrOdasMhsDDxwk5Vi87fdnjtApcRHltSlmeFd2aajRxH82IuAyknWyqpu9sRYyrhPD_rvAG2v1_6rqtBru-WMgI_2eakavyVO8babfyqu45XnLSSFD2f7-wL9RpkL9YFXp54yITBvl12edYf9Jqebm6QyU_VXPSdwM')"}}
                  >
                    <div className="absolute inset-0 photo-overlay"></div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 glass-warm p-6 rounded-[2rem] border border-white/60 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-impressionist-orange/20 flex items-center justify-center text-impressionist-orange">
                        <span className="material-symbols-outlined">play_arrow</span>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-ink/50">지금 울려퍼지는</p>
                        <p className="font-serif text-lg font-semibold text-ink italic leading-tight">Debussy: Clair de Lune</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-8 p-6 rounded-[2rem] bg-red-50 border border-red-200 text-center fade-in">
              <p className="text-red-600 font-medium">❌ {error}</p>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-b from-impressionist-peach/10 to-transparent py-24 border-t border-impressionist-orange/5 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-20 flex flex-col items-center text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-ink">모성 웰빙의 예술</h2>
              <p className="max-w-2xl text-xl text-ink/60 font-serif italic">
                마치 대가의 섬세한 붓터치처럼, 특정 음향 주파수는 엄마와 아이 모두에게 평온함의 살아있는 걸작을 만들어냅니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl hover:shadow-impressionist-orange/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-impressionist-gold/15 text-impressionist-gold">
                  <span className="material-symbols-outlined text-4xl">flare</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-ink">황금빛 평온</h3>
                  <p className="text-ink/70 leading-relaxed font-display text-sm font-medium">
                    조화로운 주파수가 임산부의 코르티솔 수치를 낮춰, 임신 중 순수하고 황금빛 이완 상태로 초대합니다.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl hover:shadow-impressionist-orange/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-impressionist-green/15 text-impressionist-green">
                  <span className="material-symbols-outlined text-4xl">eco</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-ink">자연스러운 성장</h3>
                  <p className="text-ink/70 leading-relaxed font-display text-sm font-medium">
                    복잡한 멜로디 패턴이 아기의 섬세한 발달 과정에서 초기 신경 경로에 유기적 자극으로 작용합니다.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl hover:shadow-impressionist-orange/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-impressionist-orange/15 text-impressionist-orange">
                  <span className="material-symbols-outlined text-4xl">brush</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-ink">영혼의 교감</h3>
                  <p className="text-ink/70 leading-relaxed font-display text-sm font-medium">
                    공유된 청각적 질감이 당신과 아이 사이에 독특하고 평생 지속되는 유대를 그려내는 감정적 공명을 키워줍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-impressionist-orange/10 py-16 bg-white/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-impressionist-orange text-white">
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <h2 className="font-heading text-xl font-semibold text-ink">Aura Classical</h2>
            </div>
            <p className="text-xs font-bold text-ink/40 uppercase tracking-[0.2em]">© 2024 Aura Classical. 사랑과 빛의 교향곡.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
