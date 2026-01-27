import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route, useNavigate } from 'react-router-dom'
import MoodInput from './components/MoodInput'
import ResultPage from './components/ResultPage'
import LibraryPage from './components/LibraryPage'
import PaywallPage from './components/PaywallPage'
import PaymentSuccessPage from './components/PaymentSuccessPage'
import TermsPage from './components/TermsPage'
import RefundPage from './components/RefundPage'
import PrivacyPage from './components/PrivacyPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import LanguageSwitch from './components/LanguageSwitch'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import BlogList from './pages/blog/BlogList'
import BlogPost from './pages/blog/BlogPost'
import HomeSections from './components/HomeSections'

interface MusicRecommendation {
  composer: string
  title: string
  youtubeId: string
  description: string
}

interface SavedMusic {
  id: string
  composer: string
  title: string
  description: string
  savedAt: string
  mood: string
}

type Page = 'home' | 'result' | 'library' | 'paywall' | 'terms' | 'refund' | 'privacy' | 'about' | 'contact' | 'blog'

const colors = {
  deepGold: '#b45309',
  primaryWarm: '#d97706',
  warmSlate: '#475569',
}

function App() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [recommendation, setRecommendation] = useState<MusicRecommendation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentMood, setCurrentMood] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [savedMusic, setSavedMusic] = useState<SavedMusic[]>([])
  const [isPurchased, setIsPurchased] = useState<boolean>(false)
  const [showPaymentSuccess, setShowPaymentSuccess] = useState<boolean>(false)
  const [pendingMood, setPendingMood] = useState<string | null>(null)

  useEffect(() => {
    const purchased = localStorage.getItem('aura-classical-purchased') === 'true'
    setIsPurchased(purchased)

    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('checkout') === 'success') {
      localStorage.setItem('aura-classical-purchased', 'true')
      localStorage.setItem('aura-classical-purchase-date', new Date().toISOString())
      setIsPurchased(true)
      window.history.replaceState({}, '', window.location.pathname)
    }

    const saved = localStorage.getItem('aura-classical-library')
    if (saved) {
      setSavedMusic(JSON.parse(saved))
    }
  }, [])

  const handlePurchaseSuccess = () => {
    localStorage.setItem('aura-classical-purchased', 'true')
    localStorage.setItem('aura-classical-purchase-date', new Date().toISOString())
    setShowPaymentSuccess(true)
  }

  const handleContinueAfterPurchase = () => {
    setShowPaymentSuccess(false)
    setIsPurchased(true)
    navigate('/')

    if (pendingMood) {
      fetchRecommendation(pendingMood)
      setPendingMood(null)
    }
  }

  const handleSaveToLibrary = (music: MusicRecommendation, mood: string) => {
    const newSavedMusic: SavedMusic = {
      id: Date.now().toString(),
      composer: music.composer,
      title: music.title,
      description: music.description,
      savedAt: new Date().toISOString(),
      mood: mood
    }

    const isDuplicate = savedMusic.some(
      m => m.composer === music.composer && m.title === music.title
    )

    if (isDuplicate) {
      alert(t('share.alreadySaved'))
      return
    }

    const updated = [...savedMusic, newSavedMusic]
    setSavedMusic(updated)
    localStorage.setItem('aura-classical-library', JSON.stringify(updated))
    alert(t('share.savedToLibrary'))
  }

  const handleRemoveFromLibrary = (id: string) => {
    const updated = savedMusic.filter(m => m.id !== id)
    setSavedMusic(updated)
    localStorage.setItem('aura-classical-library', JSON.stringify(updated))
  }

  const handleGoToLibrary = () => {
    navigate('/library')
  }

  const fallbackRecommendations = [
    {
      composer: 'Claude Debussy',
      title: 'Clair de Lune',
      youtubeId: 'WNJSajXidS8',
      description: '이 인상주의 걸작은 잔잔한 호흡처럼 부드러운 리듬의 물결을 사용합니다. 드뷔시의 몽환적인 질감은 당신과 아기 모두에게 고요한 환경을 조성하는 완벽한 음향 동반자입니다.'
    },
    {
      composer: 'Johann Pachelbel',
      title: 'Canon in D Major',
      youtubeId: 'Ptk_1Dc2iPY',
      description: '이 곡은 부드럽고 평화로운 선율로 임산부에게 안정감과 행복감을 선사합니다. 반복되는 아름다운 화음은 마음을 편안하게 하고, 아기와 함께하는 순간의 기쁨을 더욱 깊게 느낄 수 있도록 도와줍니다.'
    },
    {
      composer: 'Ludwig van Beethoven',
      title: 'Moonlight Sonata',
      youtubeId: '4Tr0otuiQuU',
      description: '달빛 소나타의 첫 악장은 깊은 평온함과 명상적인 분위기를 자아냅니다. 고요하고 서정적인 멜로디가 마음의 안정을 가져다주어 임산부의 휴식에 이상적입니다.'
    },
    {
      composer: 'Antonio Vivaldi',
      title: 'The Four Seasons - Spring',
      youtubeId: 'mFWQgxTM_Ak',
      description: '봄의 생동감과 기쁨을 표현하며, 따뜻하고 활기찬 멜로디가 듣는 이에게 행복감을 선사합니다. 임산부가 느끼는 행복한 감정을 더욱 풍요롭게 해줍니다.'
    },
  ]

  const fetchRecommendation = async (mood: string) => {
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
      setCurrentPage('result')
    } catch (err) {
      if (err) setError(t('common.error'))
      const randomIndex = Math.floor(Math.random() * fallbackRecommendations.length)
      setRecommendation(fallbackRecommendations[randomIndex])
      setCurrentPage('result')
    } finally {
      setLoading(false)
    }
  }

  const handleMoodSubmit = async (mood: string) => {
    if (!isPurchased) {
      setPendingMood(mood)
      navigate('/paywall')
      return
    }
    await fetchRecommendation(mood)
  }

  const handleReset = () => {
    setRecommendation(null)
    setCurrentMood('')
    setCurrentPage('home')
    navigate('/')
  }

  const handleGenerateAnother = () => {
    if (currentMood) {
      fetchRecommendation(currentMood)
    }
  }

  if (showPaymentSuccess) {
    return <PaymentSuccessPage onContinue={handleContinueAfterPurchase} />
  }

  return (
    <div className="impressionist-bg body-sans min-h-screen flex flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full glass-panel-warm border-b border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white shadow-lg"
                style={{ backgroundColor: colors.deepGold }}
              >
                <span className="material-symbols-outlined text-lg sm:text-2xl">auto_awesome</span>
              </div>
              <h2 className="premium-serif text-lg sm:text-2xl font-semibold tracking-tight" style={{ color: colors.deepGold }}>
                {t('common.appName')}
              </h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10">
              <button onClick={() => navigate('/')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>Home</button>
              <button onClick={() => navigate('/blog')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>Blog</button>
              <button onClick={handleGoToLibrary} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>{t('header.library')}</button>
              <button onClick={() => navigate('/about')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>About</button>
            </nav>

            {/* Right Side Icons & Mobile Menu Items */}
            <div className="flex items-center gap-2 sm:gap-4">
              <nav className="flex md:hidden items-center gap-3 mr-2">
                <button onClick={() => navigate('/blog')} className="text-xs font-bold uppercase tracking-tight" style={{ color: colors.deepGold }}>Blog</button>
                <button onClick={() => navigate('/about')} className="text-xs font-bold uppercase tracking-tight" style={{ color: colors.deepGold }}>About</button>
              </nav>
              <LanguageSwitch />
              <button
                onClick={handleGoToLibrary}
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                style={{ border: `1px solid ${colors.deepGold}33` }}
              >
                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>library_music</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Routes>
          <Route path="/" element={
            currentPage === 'result' && recommendation ? (
              <ResultPage
                recommendation={recommendation}
                mood={currentMood}
                onReset={handleReset}
                onGenerateAnother={handleGenerateAnother}
                onSaveToLibrary={() => handleSaveToLibrary(recommendation, currentMood)}
                onGoToLibrary={handleGoToLibrary}
              />
            ) : (
              <div className="w-full">
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
                  <div className="mb-8 sm:mb-12 text-center fade-in max-w-4xl mx-auto">
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-sm"
                      style={{ backgroundColor: 'rgba(254, 243, 199, 0.6)', border: '1px solid rgba(217, 119, 6, 0.3)' }}
                    >
                      <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>{t('home.badge')}</span>
                    </div>
                    <h1 className="premium-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8" style={{ color: colors.warmSlate }}>
                      {t('home.title')} <br className="hidden sm:block" /><span className="italic" style={{ color: colors.deepGold }}>{t('home.titleHighlight')}</span>{t('home.titleEnd')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl italic font-serif opacity-70 mb-12" style={{ color: colors.warmSlate }}>
                      태아와 산모의 정서를 이어주는 클래식 음악, AI가 당신의 기분에 맞춰 큐레이션해드립니다.
                    </p>
                  </div>

                  {loading ? (
                    <div className="text-center fade-in py-12 sm:py-20">
                      <div className="spinner mx-auto mb-4 sm:mb-6"></div>
                      <p className="premium-serif text-base sm:text-xl italic px-4" style={{ color: `${colors.warmSlate}b3` }}>
                        {t('home.findingMusic')}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full max-w-2xl fade-in px-4">
                      <MoodInput onSubmit={handleMoodSubmit} loading={loading} />
                    </div>
                  )}
                </div>

                {/* Rich Homepage Sections */}
                {!loading && currentPage !== 'result' && <HomeSections />}
              </div>
            )
          } />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/library" element={<LibraryPage savedMusic={savedMusic} onRemove={handleRemoveFromLibrary} onBack={() => navigate('/')} />} />
          <Route path="/paywall" element={<PaywallPage onPurchaseSuccess={handlePurchaseSuccess} onNavigate={(p) => navigate(`/${p}`)} />} />
          <Route path="/terms" element={<TermsPage onBack={() => navigate('/')} />} />
          <Route path="/refund" element={<RefundPage onBack={() => navigate('/')} />} />
          <Route path="/privacy" element={<PrivacyPage onBack={() => navigate('/')} />} />
          <Route path="/about" element={<AboutPage onBack={() => navigate('/')} />} />
          <Route path="/contact" element={<ContactPage onBack={() => navigate('/')} />} />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
