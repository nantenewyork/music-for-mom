interface SavedMusic {
    id: string
    composer: string
    title: string
    description: string
    savedAt: string
    mood: string
}

interface LibraryPageProps {
    savedMusic: SavedMusic[]
    onRemove: (id: string) => void
    onBack: () => void
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

// 샘플 썸네일 이미지들
const thumbnails = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAzLlNIgcb9yZU9z-aIke6CIcakiPq91XM69pIfrCRqnRP1CNSxFVi5uKmBlRIRsX1I_vHvUaVJBbOTqvfMvo1sIn8CwnbcPN0TBnbysc-quhLB5taKwEG1UiuIoOm-8F1rbTVVeL3WCTfM7Sv2VUP1snSZf3bZIEB4PUCCjWyvRiK4ytUmjCB4Xp5b5lJqei4g0sHlQwYbzBM6XNEp29zDneai-3v8_gyOz6F61UnIN2dCXE5j6c_7nwDbwhazhqiIs8Ig7Mi_iHA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvYPIFQzdo7gyYT6u9IuhagAsfCHCaUbeF5nuJUxNRTcqBzx_XrHfYMWg8jbicSsLC-qskOd5XPOr_4r4HZAc_pHb7PTkeQioxUNN5oGuaAWpSCtfA9vxSgNk7hNZqyVZKKHdPFZvokW0vMRMvjjmteYMv0JKTXTzEjUZoUlyprNWpZBsGpx3cBH_xsuYx3gVArgwbcVjYbdON10ZSsku5T1L5WPAhu37cOYeHG7ssMjtijaf3mqCiySsUEXAvuu6knpaTgERMHIU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDfFSBBYyYFLMDacHQWwRmDwGU9rHYCfc69rnCub2s6zo759H96KnFu-QpeUAiCjpKkgzKjGR3z1cdOzVic4NvvMtUxSwbID-SIlPH-6GasUwYytDvUHrheUAEWSI3RwRmDE77DVXY5nR_rQ_pVNv2pI0s4EflwEyLWw0voyIOJT_-qsejo9q83gT7_7Ia_wIegYgmPesDJXYAh42GviPFEgWqYJmblvHocaZUws25ON4An-Qf4rGxGdnmIpP72u6e-qWCdSVHCKpU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpNeU5mmoAdxZU9oI2h1wsFJ_rQiLatMC3N4SK-kzIpWPUmHUnKMTgy2tzDmJTD3UA1KazA3mum8u_GIaHmkgZQx1yLcetmTroQvbyVMEE3YUPJ9Yp1ylG0bGy5hEB47ZUpX6EFqxHmIT8joWVJMNJpVejEnPxbANKlQBnKN1fRYEWOcbXIKXKv60Fj9jdqYFf5eqRIXpABffiN86JP_0nbOq0ZqFc9UJaG4nQwvY2DbWr6EsFRriL34phDBH-XQM28vGaXEAZqjk',
]

function LibraryPage({ savedMusic, onRemove, onBack }: LibraryPageProps) {
    const handlePlayOnYouTube = (composer: string, title: string) => {
        const searchQuery = `${composer} ${title}`
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
        window.open(url, '_blank')
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const getThumbnail = (index: number) => {
        return thumbnails[index % thumbnails.length]
    }

    return (
        <div className="impressionist-bg body-sans min-h-screen overflow-x-hidden" style={{ color: colors.warmSlate }}>
            {/* Header */}
            <header className="sticky top-0 z-50 w-full glass-panel-warm border-b border-white/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        <button onClick={onBack} className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                            <div 
                                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white shadow-lg"
                                style={{ backgroundColor: colors.deepGold }}
                            >
                                <span className="material-symbols-outlined text-lg sm:text-2xl">auto_awesome</span>
                            </div>
                            <h2 className="premium-serif text-lg sm:text-2xl font-semibold tracking-tight" style={{ color: colors.deepGold }}>
                                Aura Classical
                            </h2>
                        </button>
                        <nav className="hidden md:flex items-center gap-10">
                            <a className="text-sm font-semibold transition-colors" style={{ color: colors.deepGold }} href="#">Library</a>
                            <a className="text-sm font-semibold transition-colors" style={{ color: `${colors.deepGold}cc` }} href="#">Science</a>
                            <a className="text-sm font-semibold transition-colors" style={{ color: `${colors.deepGold}cc` }} href="#">Profile</a>
                        </nav>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button 
                                onClick={onBack}
                                className="md:hidden flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                                style={{ border: `1px solid ${colors.deepGold}33` }}
                            >
                                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>arrow_back</span>
                            </button>
                            <button 
                                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                                style={{ border: `1px solid ${colors.deepGold}33` }}
                            >
                                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>settings</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
                {/* Title Section */}
                <div className="mb-8 sm:mb-12 text-center fade-in">
                    <div 
                        className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 shadow-sm"
                        style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(217, 119, 6, 0.2)' }}
                    >
                        <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>favorite</span>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>My Collection</span>
                    </div>
                    <h1 className="premium-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight" style={{ color: colors.warmSlate }}>
                        Your <span className="italic" style={{ color: colors.deepGold }}>Music Library</span>
                    </h1>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-lg" style={{ color: `${colors.warmSlate}99` }}>
                        {savedMusic.length > 0 
                            ? `${savedMusic.length}곡의 클래식 음악이 저장되어 있어요`
                            : '아직 저장된 음악이 없어요'}
                    </p>
                </div>

                {/* Empty State */}
                {savedMusic.length === 0 && (
                    <div className="w-full max-w-2xl fade-in px-2">
                        <div 
                            className="glass-panel-warm painterly-shadow rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 text-center"
                        >
                            <div 
                                className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${colors.deepGold}1a` }}
                            >
                                <span className="material-symbols-outlined text-3xl sm:text-5xl" style={{ color: colors.deepGold }}>library_music</span>
                            </div>
                            <h3 className="premium-serif text-xl sm:text-2xl font-medium mb-2 sm:mb-3" style={{ color: colors.warmSlate }}>
                                라이브러리가 비어있어요
                            </h3>
                            <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: `${colors.warmSlate}99` }}>
                                음악 추천을 받고 마음에 드는 곡을 저장해보세요.<br />
                                당신만의 클래식 컬렉션을 만들 수 있어요.
                            </p>
                            <button
                                onClick={onBack}
                                className="yt-button inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl"
                            >
                                <span className="material-symbols-outlined text-lg sm:text-xl">auto_awesome</span>
                                음악 추천받으러 가기
                            </button>
                        </div>
                    </div>
                )}

                {/* Music Grid */}
                {savedMusic.length > 0 && (
                    <div className="w-full max-w-6xl fade-in px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {savedMusic.map((music, index) => (
                                <div 
                                    key={music.id}
                                    className="glass-panel-warm painterly-shadow rounded-2xl sm:rounded-[1.5rem] overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                                >
                                    {/* Thumbnail */}
                                    <div 
                                        className="relative h-36 sm:h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${getThumbnail(index)}')` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <button
                                                onClick={() => handlePlayOnYouTube(music.composer, music.title)}
                                                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center border border-white/40 hover:scale-110 transition-transform"
                                            >
                                                <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ color: colors.deepGold }}>play_arrow</span>
                                            </button>
                                        </div>
                                        {/* Mood Badge */}
                                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                            <span 
                                                className="inline-flex items-center gap-1 rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold backdrop-blur-md"
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: colors.deepGold }}
                                            >
                                                <span className="material-symbols-outlined text-xs sm:text-sm">mood</span>
                                                {music.mood || '평온'}
                                            </span>
                                        </div>
                                        {/* Delete Button - Always visible on mobile */}
                                        <button
                                            onClick={() => onRemove(music.id)}
                                            className="absolute top-3 sm:top-4 right-3 sm:right-4 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-red-100"
                                        >
                                            <span className="material-symbols-outlined text-base sm:text-lg text-red-500">delete</span>
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-6">
                                        <h3 
                                            className="premium-serif text-base sm:text-xl font-medium leading-tight mb-1 line-clamp-2"
                                            style={{ color: colors.warmSlate }}
                                        >
                                            {music.title}
                                        </h3>
                                        <p 
                                            className="text-sm sm:text-base italic premium-serif mb-2 sm:mb-3"
                                            style={{ color: `${colors.deepGold}cc` }}
                                        >
                                            {music.composer}
                                        </p>
                                        <p 
                                            className="text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4"
                                            style={{ color: `${colors.warmSlate}99` }}
                                        >
                                            {music.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span 
                                                className="text-[10px] sm:text-xs"
                                                style={{ color: `${colors.warmSlate}66` }}
                                            >
                                                {formatDate(music.savedAt)}
                                            </span>
                                            <button
                                                onClick={() => handlePlayOnYouTube(music.composer, music.title)}
                                                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold transition-colors"
                                                style={{ color: colors.deepGold }}
                                            >
                                                <span className="material-symbols-outlined text-base sm:text-lg">play_circle</span>
                                                재생
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Back Button */}
                        <div className="mt-8 sm:mt-12 text-center">
                            <button
                                onClick={onBack}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/40 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white/60 transition-all shadow-sm"
                                style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                            >
                                <span className="material-symbols-outlined text-lg sm:text-xl">arrow_back</span>
                                새로운 추천 받기
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="glass-panel-warm py-6 sm:py-10 mt-auto border-t border-white/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: `${colors.deepGold}80` }}>
                                © 2024 Aura Classical AI
                            </p>
                        </div>
                        <div className="flex gap-4 sm:gap-8">
                            <a className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Support</a>
                            <a className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Privacy</a>
                            <a className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors" style={{ color: `${colors.deepGold}80` }} href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LibraryPage
