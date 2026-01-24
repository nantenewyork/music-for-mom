import { useState } from 'react'
import MoodInput from './components/MoodInput'
import MusicPlayer from './components/MusicPlayer'

interface MusicRecommendation {
  composer: string
  title: string
  youtubeId: string
  description: string
}

// Color constants
const colors = {
  orange: '#E76F51',
  gold: '#E9C46A',
  green: '#76937F',
  teal: '#2A9D8F',
  peach: '#F4A261',
  ink: '#264653',
  cream: '#FFFBF2',
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
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
                style={{ backgroundColor: colors.orange, boxShadow: `0 10px 15px -3px ${colors.orange}33` }}
              >
                <span className="material-symbols-outlined text-2xl">palette</span>
              </div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight" style={{ color: colors.ink }}>
                Aura Classical
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a className="text-sm font-semibold transition-colors hover:opacity-100" style={{ color: `${colors.ink}cc` }} href="#">철학</a>
              <a className="text-sm font-semibold transition-colors hover:opacity-100" style={{ color: `${colors.ink}cc` }} href="#">과학</a>
              <a className="text-sm font-semibold transition-colors hover:opacity-100" style={{ color: `${colors.ink}cc` }} href="#">큐레이션</a>
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
                <span 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: colors.orange }}
                >
                  <span className="h-[2px] w-8" style={{ backgroundColor: `${colors.orange}66` }}></span> 
                  생명의 빛에서 영감을 받아
                </span>
                <h1 
                  className="font-serif text-5xl font-medium leading-[1.1] md:text-6xl lg:text-7xl"
                  style={{ color: colors.ink }}
                >
                  당신의 기분을 <br/>
                  <span className="italic font-normal" style={{ color: colors.orange }}>시대를 초월한 하모니</span>로
                </h1>
                <p 
                  className="max-w-lg text-xl font-serif italic leading-relaxed"
                  style={{ color: `${colors.ink}b3` }}
                >
                  AI가 맞춤 선별한 인상주의 클래식 음악으로, 당신과 아이 사이의 빛나는 유대를 키워드립니다.
                </p>
              </div>

              {/* Mood Input Component */}
              <MoodInput onSubmit={handleMoodSubmit} loading={loading} />
            </div>

            {/* Right Column - Image or Music Player */}
            <div className="relative order-1 lg:order-2 flex justify-center fade-in">
              <div 
                className="absolute -top-16 -right-16 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: `${colors.gold}26` }}
              ></div>
              <div 
                className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: `${colors.green}1a` }}
              ></div>
              
              {loading ? (
                <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
                  <div className="text-center">
                    <div className="spinner mx-auto mb-6"></div>
                    <p className="font-serif text-xl italic" style={{ color: `${colors.ink}b3` }}>
                      당신을 위한 완벽한 음악을 찾고 있어요...
                    </p>
                  </div>
                </div>
              ) : recommendation ? (
                <MusicPlayer recommendation={recommendation} />
              ) : (
                <div 
                  className="relative organic-frame overflow-hidden aspect-[4/5] w-full max-w-md border-[16px] border-white/80"
                  style={{ boxShadow: `0 30px 60px -15px ${colors.orange}33` }}
                >
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-1000 hover:scale-110" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx3KTb0WdXFsKKL4mNBiXTYlr9whWo-hdSc4WlXMfD2ljyzKHaVNULu4L_oRI2tlcFOK15YPuYyxH2XasnYq54lobFyDox6DlKAH3acNi-pbrOdasMhsDDxwk5Vi87fdnjtApcRHltSlmeFd2aajRxH82IuAyknWyqpu9sRYyrhPD_rvAG2v1_6rqtBru-WMgI_2eakavyVO8babfyqu45XnLSSFD2f7-wL9RpkL9YFXp54yITBvl12edYf9Jqebm6QyU_VXPSdwM')"}}
                  >
                    <div className="absolute inset-0 photo-overlay"></div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 glass-warm p-6 rounded-[2rem] border border-white/60 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div 
                        className="h-12 w-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${colors.orange}33`, color: colors.orange }}
                      >
                        <span className="material-symbols-outlined">play_arrow</span>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: `${colors.ink}80` }}>
                          지금 울려퍼지는
                        </p>
                        <p className="font-serif text-lg font-semibold italic leading-tight" style={{ color: colors.ink }}>
                          Debussy: Clair de Lune
                        </p>
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
        <section 
          className="py-24 border-t relative overflow-hidden"
          style={{ 
            background: `linear-gradient(to bottom, ${colors.peach}1a, transparent)`,
            borderColor: `${colors.orange}0d`
          }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-20 flex flex-col items-center text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.ink }}>
                모성 웰빙의 예술
              </h2>
              <p className="max-w-2xl text-xl font-serif italic" style={{ color: `${colors.ink}99` }}>
                마치 대가의 섬세한 붓터치처럼, 특정 음향 주파수는 엄마와 아이 모두에게 평온함의 살아있는 걸작을 만들어냅니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-[1.5rem]"
                  style={{ backgroundColor: `${colors.gold}26`, color: colors.gold }}
                >
                  <span className="material-symbols-outlined text-4xl">flare</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: colors.ink }}>황금빛 평온</h3>
                  <p className="leading-relaxed font-display text-sm font-medium" style={{ color: `${colors.ink}b3` }}>
                    조화로운 주파수가 임산부의 코르티솔 수치를 낮춰, 임신 중 순수하고 황금빛 이완 상태로 초대합니다.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-[1.5rem]"
                  style={{ backgroundColor: `${colors.green}26`, color: colors.green }}
                >
                  <span className="material-symbols-outlined text-4xl">eco</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: colors.ink }}>자연스러운 성장</h3>
                  <p className="leading-relaxed font-display text-sm font-medium" style={{ color: `${colors.ink}b3` }}>
                    복잡한 멜로디 패턴이 아기의 섬세한 발달 과정에서 초기 신경 경로에 유기적 자극으로 작용합니다.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group flex flex-col gap-8 rounded-[3rem] p-10 bg-white/50 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/80 hover:shadow-2xl">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-[1.5rem]"
                  style={{ backgroundColor: `${colors.orange}26`, color: colors.orange }}
                >
                  <span className="material-symbols-outlined text-4xl">brush</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: colors.ink }}>영혼의 교감</h3>
                  <p className="leading-relaxed font-display text-sm font-medium" style={{ color: `${colors.ink}b3` }}>
                    공유된 청각적 질감이 당신과 아이 사이에 독특하고 평생 지속되는 유대를 그려내는 감정적 공명을 키워줍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className="py-16 bg-white/40 backdrop-blur-md border-t"
        style={{ borderColor: `${colors.orange}1a` }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div 
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: colors.orange }}
              >
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <h2 className="font-heading text-xl font-semibold" style={{ color: colors.ink }}>Aura Classical</h2>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: `${colors.ink}66` }}>
              © 2024 Aura Classical. 사랑과 빛의 교향곡.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
