import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { supabase } from './lib/supabaseClient'
import type { Session } from '@supabase/supabase-js'
import MoodInput from './components/MoodInput'
import ResultPage from './components/ResultPage'
import LibraryPage from './components/LibraryPage'
import PaywallPage from './components/PaywallPage'
import PaymentSuccessPage from './components/PaymentSuccessPage'
import TermsPage from './components/TermsPage'
import RefundPage from './components/RefundPage'
import PrivacyPage from './components/PrivacyPage'
import AboutPage from './components/AboutPage'
import GuidePage from './components/GuidePage'
import ContactPage from './components/ContactPage'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import MyPage from './pages/auth/MyPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
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
  composerInfo: string
  musicInfo: string
}

interface SavedMusic {
  id: string
  composer: string
  title: string
  description: string
  composerInfo: string
  musicInfo: string
  savedAt: string
  mood: string
}

type Page = 'home' | 'result' | 'library' | 'paywall' | 'terms' | 'refund' | 'privacy' | 'about' | 'contact' | 'blog' | 'guide'

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
  const [, setError] = useState<string | null>(null)
  const [currentMood, setCurrentMood] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [savedMusic, setSavedMusic] = useState<SavedMusic[]>([])
  const [isPurchased, setIsPurchased] = useState<boolean>(false)
  const [freeTrialUsed, setFreeTrialUsed] = useState<boolean>(false)
  const [showPaymentSuccess, setShowPaymentSuccess] = useState<boolean>(false)
  const [pendingMood, setPendingMood] = useState<string | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    // Supabase Auth Listener
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) {
        // Fetch saved music from DB
        fetchSavedMusic(session.user.id)
      } else {
        // Load from local storage for guest
        const saved = localStorage.getItem('aura-classical-library')
        if (saved) {
          setSavedMusic(JSON.parse(saved))
        }
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        fetchSavedMusic(session.user.id)
      } else {
        setSavedMusic([]) // Clear or load local? Let's clear for security/privacy when logging out
      }
    })

    const purchased = localStorage.getItem('aura-classical-purchased') === 'true'
    setIsPurchased(purchased)

    const trialUsed = localStorage.getItem('aura-classical-trial-used') === 'true'
    setFreeTrialUsed(trialUsed)

    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('checkout') === 'success') {
      localStorage.setItem('aura-classical-purchased', 'true')
      localStorage.setItem('aura-classical-purchase-date', new Date().toISOString())
      setIsPurchased(true)
      window.history.replaceState({}, '', window.location.pathname)
    }

    return () => subscription.unsubscribe()
  }, [])

  const fetchSavedMusic = async (userId: string) => {
    const { data, error } = await supabase
      .from('saved_music')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching saved music:', error)
    } else if (data) {
      const mappedMusic: SavedMusic[] = data.map((item: any) => ({
        id: item.id,
        composer: item.composer,
        title: item.title,
        description: item.description,
        composerInfo: item.composer_info,
        musicInfo: item.music_info,
        savedAt: item.created_at,
        mood: item.mood
      }))
      setSavedMusic(mappedMusic)
    }
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

  const handleSaveToLibrary = async (music: MusicRecommendation, mood: string) => {
    // Check for duplicates
    const isDuplicate = savedMusic.some(
      m => m.composer === music.composer && m.title === music.title
    )

    if (isDuplicate) {
      alert(t('share.alreadySaved'))
      return
    }

    if (session) {
      // Save to DB
      const { data, error } = await supabase.from('saved_music').insert({
        user_id: session.user.id,
        composer: music.composer,
        title: music.title,
        youtube_id: music.youtubeId,
        description: music.description,
        composer_info: music.composerInfo,
        music_info: music.musicInfo,
        mood: mood
      }).select()

      if (error) {
        console.error('Error saving to DB:', error)
        alert('저장에 실패했습니다.')
        return
      }

      if (data) {
        const newSavedMusic: SavedMusic = {
          id: data[0].id,
          composer: data[0].composer,
          title: data[0].title,
          description: data[0].description,
          composerInfo: data[0].composer_info,
          musicInfo: data[0].music_info,
          savedAt: data[0].created_at,
          mood: data[0].mood
        }
        setSavedMusic([newSavedMusic, ...savedMusic])
        alert(t('share.savedToLibrary'))
      }

    } else {
      // Guest: Save to LocalStorage
      const newSavedMusic: SavedMusic = {
        id: Date.now().toString(),
        composer: music.composer,
        title: music.title,
        description: music.description,
        composerInfo: music.composerInfo,
        musicInfo: music.musicInfo,
        savedAt: new Date().toISOString(),
        mood: mood
      }

      const updated = [...savedMusic, newSavedMusic]
      setSavedMusic(updated)
      localStorage.setItem('aura-classical-library', JSON.stringify(updated))
      alert(t('share.savedToLibrary'))
    }
  }

  const handleRemoveFromLibrary = async (id: string) => {
    if (session) {
      // Remove from DB
      const { error } = await supabase.from('saved_music').delete().eq('id', id)
      if (error) {
        console.error('Error removing from DB:', error)
        alert('삭제에 실패했습니다.')
        return
      }
    }

    // Update State (Optimistic update for DB, direct for Local)
    const updated = savedMusic.filter(m => m.id !== id)
    setSavedMusic(updated)

    if (!session) {
      localStorage.setItem('aura-classical-library', JSON.stringify(updated))
    }
  }

  const handleGoToLibrary = () => {
    navigate('/library')
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setSavedMusic([]) // Clear library on sign out
    navigate('/')
  }

  const fallbackRecommendations = [
    {
      composer: 'Claude Debussy',
      title: 'Clair de Lune',
      youtubeId: 'WNJSajXidS8',
      description: '이 인상주의 걸작은 잔잔한 호흡처럼 부드러운 리듬의 물결을 사용합니다. 드뷔시의 몽환적인 질감은 당신과 아기 모두에게 고요한 환경을 조성하는 완벽한 음항 동반자입니다.',
      composerInfo: '클로드 드뷔시는 19세기 말과 20세기 초 프랑스의 가장 영향력 있는 작곡가 중 한 명으로, 인상주의 음악의 선구자로 불립니다.',
      musicInfo: '베르가마스크 모음곡 중 세 번째 곡인 달빛은 Paul Verlaine의 시에서 영감을 얻어 작곡된 피아노 명곡입니다.'
    },
    {
      composer: 'Johann Pachelbel',
      title: 'Canon in D Major',
      youtubeId: 'Ptk_1Dc2iPY',
      description: '이 곡은 부드럽고 평화로운 선율로 임산부에게 안정감과 행복감을 선사합니다. 반복되는 아름다운 화음은 마음을 편안하게 하고, 아기와 함께하는 순간의 기쁨을 더욱 깊게 느낄 수 있도록 도와줍니다.',
      composerInfo: '요한 파헬벨은 독일 바로크 시대의 작곡가이자 오르간 연주자로, 대위법 발전에 기여한 중요한 인물입니다.',
      musicInfo: '카논과 지그 D장조는 파헬벨의 가장 유명한 작품으로, 오늘날 세 가닥의 바이올린과 저음 악기를 위해 편곡되어 즐겨 연주됩니다.'
    },
    {
      composer: 'Ludwig van Beethoven',
      title: 'Moonlight Sonata',
      youtubeId: '4Tr0otuiQuU',
      description: '달빛 소나타의 첫 악장은 깊은 평온함과 명상적인 분위기를 자아냅니다. 고요하고 서정적인 멜로디가 마음의 안정을 가져다주어 임산부의 휴식에 이상적입니다.',
      composerInfo: '루트비히 판 베토벤은 고전주의와 낭만주의 전환기에 활동한 독일의 위대한 작곡가이자 피아니스트입니다.',
      musicInfo: '피아노 소나타 14번 "월광"은 베토벤이 제자 줄리에타 귀차르디에게 헌정한 곡으로, 몽환적인 1악장이 특히 유명합니다.'
    },
    {
      composer: 'Antonio Vivaldi',
      title: 'The Four Seasons - Spring',
      youtubeId: 'mFWQgxTM_Ak',
      description: '봄의 생동감과 기쁨을 표현하며, 따뜻하고 활기찬 멜로디가 듣는 이에게 행복감을 선사합니다. 임산부가 느끼는 행복한 감정을 더욱 풍요롭게 해줍니다.',
      composerInfo: '안토니오 비발디는 이탈리아의 바로크 작곡가이자 바이올린 연주자로, "빨간 머리의 신부"라는 별명으로 잘 알려져 있습니다.',
      musicInfo: '바이올린 협주곡 "사계" 중 "봄"은 새들의 노래와 시냇물 소리 등을 음악으로 묘사한 표제 음악의 걸작입니다.'
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

      // Mark trial as used if it was a trial
      if (!isPurchased) {
        setFreeTrialUsed(true)
        localStorage.setItem('aura-classical-trial-used', 'true')
      }
    } catch (err) {
      console.error('Recommendation API Error:', err)
      if (err) setError(t('common.error'))
      const randomIndex = Math.floor(Math.random() * fallbackRecommendations.length)
      setRecommendation(fallbackRecommendations[randomIndex])
      setCurrentPage('result')

      if (!isPurchased) {
        setFreeTrialUsed(true)
        localStorage.setItem('aura-classical-trial-used', 'true')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleMoodSubmit = async (mood: string) => {
    if (!isPurchased && freeTrialUsed) {
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
    if (!isPurchased && freeTrialUsed) {
      setPendingMood(currentMood)
      navigate('/paywall')
      return
    }
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
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={handleReset}>
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
            <nav className="hidden md:flex items-center gap-4 sm:gap-6">
              <button onClick={() => navigate('/')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>Home</button>
              <button onClick={() => navigate('/guide')} className="text-xs sm:text-sm font-bold uppercase tracking-tight transition-colors hover:opacity-70" style={{ color: colors.deepGold }}>Guide</button>
              <button onClick={() => navigate('/blog')} className="text-xs sm:text-sm font-bold uppercase tracking-tight transition-colors hover:opacity-70" style={{ color: colors.deepGold }}>Blog</button>

              {/* Free Trial CTA */}
              <button
                onClick={() => navigate('/paywall')}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
                }}
              >
                <span className="material-symbols-outlined text-sm">star</span>
                <span>3일 무료 체험</span>
              </button>

              <button onClick={handleGoToLibrary} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>{t('header.library')}</button>
              <button onClick={() => navigate('/about')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>About</button>
              {session ? (
                <>
                  <button onClick={() => navigate('/mypage')} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}cc` }}>My Page</button>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-bold px-4 py-2 rounded-full border border-amber-600/30 text-amber-800 hover:bg-amber-600 hover:text-white transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="text-sm font-bold px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-md"
                >
                  Login
                </button>
              )}
            </nav>

            {/* Right Side Icons & Mobile Menu Items */}
            <div className="flex items-center gap-2 sm:gap-4">
              <nav className="flex md:hidden items-center gap-3 mr-2">
                <button onClick={() => navigate('/guide')} className="text-xs font-bold uppercase tracking-tight" style={{ color: colors.deepGold }}>Guide</button>
                <button onClick={() => navigate('/blog')} className="text-xs font-bold uppercase tracking-tight" style={{ color: colors.deepGold }}>Blog</button>
                <button
                  onClick={() => navigate('/paywall')}
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  }}
                >
                  <span className="material-symbols-outlined text-[12px]">star</span>
                  <span>3일 무료</span>
                </button>
              </nav>
              <LanguageSwitch />
              <button
                onClick={handleGoToLibrary}
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                style={{ border: `1px solid ${colors.deepGold}33` }}
              >
                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>library_music</span>
              </button>
              <div className="md:hidden">
                {session ? (
                  <button onClick={() => navigate('/mypage')} className="ml-2 text-xs font-bold text-amber-800">My Info</button>
                ) : (
                  <button onClick={() => navigate('/login')} className="ml-2 text-xs font-bold text-amber-800">Log In</button>
                )}
              </div>
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
                onGenerateAnother={handleGenerateAnother}
                onSaveToLibrary={() => handleSaveToLibrary(recommendation, currentMood)}
                loading={loading}
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
                      {t('home.title')} <br className="hidden sm:block" /><span className="italic" style={{ color: colors.deepGold }}>{t('home.titleHighlight')}</span> {t('home.titleEnd')}
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
                      <MoodInput onSubmit={handleMoodSubmit} loading={loading} freeTrialUsed={freeTrialUsed} isPurchased={isPurchased} />

                      {/* Hero CTA */}
                      <div className="mt-8 flex justify-center">
                        <button
                          onClick={() => navigate('/paywall')}
                          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/40 hover:bg-white/60 border border-white/60 transition-all hover:scale-105 shadow-sm backdrop-blur-sm"
                        >
                          <span className="material-symbols-outlined text-green-600 group-hover:animate-bounce">star</span>
                          <span className="text-sm font-bold text-slate-700">
                            <span className="text-green-700">3일 무료 체험</span>으로 제한 없이 듣기
                          </span>
                          <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rich Homepage Sections */}
                {!loading && currentPage !== 'result' && <HomeSections />}
              </div>
            )
          } />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/library" element={<LibraryPage savedMusic={savedMusic} onRemove={handleRemoveFromLibrary} onBack={() => navigate('/')} />} />
          <Route path="/paywall" element={<PaywallPage onNavigate={(p) => navigate(`/${p}`)} userId={session?.user.id} userEmail={session?.user.email} />} />
          <Route path="/terms" element={<TermsPage onBack={() => navigate('/')} />} />
          <Route path="/refund" element={<RefundPage onBack={() => navigate('/')} />} />
          <Route path="/privacy" element={<PrivacyPage onBack={() => navigate('/')} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage onBack={() => navigate('/')} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
