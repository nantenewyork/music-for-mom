import { useState } from 'react'
import YouTubeModal from './YouTubeModal'

interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
}

interface ResultPageProps {
    recommendation: MusicRecommendation
    mood: string
    onReset: () => void
    onGenerateAnother: () => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

function ResultPage({ recommendation, mood, onReset, onGenerateAnother }: ResultPageProps) {
    const [showYouTubeModal, setShowYouTubeModal] = useState(false)

    // 기분에서 키워드 추출 (간단한 버전)
    const getMoodKeyword = (mood: string) => {
        if (mood.includes('평화') || mood.includes('고요') || mood.includes('평온')) return 'Finding Peace'
        if (mood.includes('행복') || mood.includes('기쁨') || mood.includes('설레')) return 'Feeling Joy'
        if (mood.includes('피곤') || mood.includes('쉬고')) return 'Seeking Rest'
        if (mood.includes('불안') || mood.includes('걱정')) return 'Finding Comfort'
        return 'Your Harmony'
    }

    return (
        <div className="impressionist-bg body-sans min-h-screen overflow-x-hidden" style={{ color: colors.warmSlate }}>
            {/* Header */}
            <header className="sticky top-0 z-50 w-full glass-panel-warm border-b border-white/20">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex h-20 items-center justify-between">
                        <button onClick={onReset} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div 
                                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
                                style={{ backgroundColor: colors.deepGold }}
                            >
                                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                            </div>
                            <h2 className="premium-serif text-2xl font-semibold tracking-tight" style={{ color: colors.deepGold }}>
                                Aura Classical
                            </h2>
                        </button>
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
                {/* Title Section */}
                <div className="mb-12 text-center fade-in">
                    <div 
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 shadow-sm"
                        style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(217, 119, 6, 0.2)' }}
                    >
                        <span className="material-symbols-outlined text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: colors.deepGold }}>Aura Insight</span>
                    </div>
                    <h1 className="premium-serif text-4xl md:text-5xl font-light leading-tight" style={{ color: colors.warmSlate }}>
                        Based on your mood: <span className="italic" style={{ color: colors.deepGold }}>{getMoodKeyword(mood)}</span>
                    </h1>
                </div>

                {/* Result Card */}
                <div className="w-full max-w-5xl fade-in">
                    <div className="glass-panel-warm painterly-shadow rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
                            <div className="organic-frame w-full max-w-md aspect-square relative group">
                                <div 
                                    className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 impressionist-image-filter"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx3KTb0WdXFsKKL4mNBiXTYlr9whWo-hdSc4WlXMfD2ljyzKHaVNULu4L_oRI2tlcFOK15YPuYyxH2XasnYq54lobFyDox6DlKAH3acNi-pbrOdasMhsDDxwk5Vi87fdnjtApcRHltSlmeFd2aajRxH82IuAyknWyqpu9sRYyrhPD_rvAG2v1_6rqtBru-WMgI_2eakavyVO8babfyqu45XnLSSFD2f7-wL9RpkL9YFXp54yITBvl12edYf9Jqebm6QyU_VXPSdwM')" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 to-transparent mix-blend-overlay"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button
                                        onClick={() => setShowYouTubeModal(true)}
                                        className="h-20 w-20 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/40 hover:scale-110 transition-transform"
                                    >
                                        <span className="material-symbols-outlined text-4xl" style={{ color: colors.deepGold }}>play_arrow</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
                            <div className="flex flex-col gap-2">
                                <p 
                                    className="text-xs font-bold tracking-[0.3em] uppercase"
                                    style={{ color: `${colors.deepGold}99` }}
                                >
                                    Now Curated for You
                                </p>
                                <h2 
                                    className="premium-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
                                    style={{ color: colors.warmSlate }}
                                >
                                    {recommendation.title}
                                </h2>
                                <p 
                                    className="text-xl md:text-2xl italic premium-serif"
                                    style={{ color: `${colors.deepGold}cc` }}
                                >
                                    {recommendation.composer}
                                </p>
                            </div>

                            {/* Why this harmony */}
                            <div 
                                className="space-y-4 p-6 md:p-8 rounded-3xl border shadow-sm"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined" style={{ color: colors.deepGold }}>flare</span>
                                    <p 
                                        className="text-sm font-bold uppercase tracking-widest"
                                        style={{ color: `${colors.deepGold}b3` }}
                                    >
                                        Why this harmony?
                                    </p>
                                </div>
                                <p 
                                    className="text-base md:text-lg leading-relaxed italic font-light"
                                    style={{ color: `${colors.warmSlate}e6` }}
                                >
                                    "{recommendation.description}"
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-4 pt-2">
                                <button
                                    onClick={() => setShowYouTubeModal(true)}
                                    className="yt-button flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-lg font-bold text-white shadow-xl"
                                >
                                    <span className="material-symbols-outlined">play_circle</span>
                                    Watch on YouTube
                                </button>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button 
                                        onClick={onGenerateAnother}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/40 px-6 py-4 text-sm font-bold hover:bg-white/60 transition-all shadow-sm"
                                        style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                                    >
                                        <span className="material-symbols-outlined text-xl">refresh</span>
                                        Generate Another
                                    </button>
                                    <button 
                                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/40 px-6 py-4 text-sm font-bold hover:bg-white/60 transition-all shadow-sm"
                                        style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                                    >
                                        <span className="material-symbols-outlined text-xl">favorite</span>
                                        Save to Library
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-16 max-w-2xl text-center">
                    <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.deepGold}b3` }}>
                        Classical music during pregnancy can reduce cortisol and enhance prenatal bonding.
                        <br/>
                        <a 
                            className="font-bold transition-all"
                            style={{ color: colors.deepGold, borderBottom: `1px solid ${colors.deepGold}4d` }}
                            href="#"
                        >
                            Explore our scientific approach
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

            {/* YouTube Modal */}
            <YouTubeModal
                isOpen={showYouTubeModal}
                onClose={() => setShowYouTubeModal(false)}
                composer={recommendation.composer}
                title={recommendation.title}
            />
        </div>
    )
}

export default ResultPage
