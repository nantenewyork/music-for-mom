interface YouTubeModalProps {
    isOpen: boolean
    onClose: () => void
    composer: string
    title: string
}

const colors = {
    primary: '#d41132',
    text: '#1b0d10',
}

// 썸네일 이미지들
const thumbnails = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAzLlNIgcb9yZU9z-aIke6CIcakiPq91XM69pIfrCRqnRP1CNSxFVi5uKmBlRIRsX1I_vHvUaVJBbOTqvfMvo1sIn8CwnbcPN0TBnbysc-quhLB5taKwEG1UiuIoOm-8F1rbTVVeL3WCTfM7Sv2VUP1snSZf3bZIEB4PUCCjWyvRiK4ytUmjCB4Xp5b5lJqei4g0sHlQwYbzBM6XNEp29zDneai-3v8_gyOz6F61UnIN2dCXE5j6c_7nwDbwhazhqiIs8Ig7Mi_iHA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvYPIFQzdo7gyYT6u9IuhagAsfCHCaUbeF5nuJUxNRTcqBzx_XrHfYMWg8jbicSsLC-qskOd5XPOr_4r4HZAc_pHb7PTkeQioxUNN5oGuaAWpSCtfA9vxSgNk7hNZqyVZKKHdPFZvokW0vMRMvjjmteYMv0JKTXTzEjUZoUlyprNWpZBsGpx3cBH_xsuYx3gVArgwbcVjYbdON10ZSsku5T1L5WPAhu37cOYeHG7ssMjtijaf3mqCiySsUEXAvuu6knpaTgERMHIU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDfFSBBYyYFLMDacHQWwRmDwGU9rHYCfc69rnCub2s6zo759H96KnFu-QpeUAiCjpKkgzKjGR3z1cdOzVic4NvvMtUxSwbID-SIlPH-6GasUwYytDvUHrheUAEWSI3RwRmDE77DVXY5nR_rQ_pVNv2pI0s4EflwEyLWw0voyIOJT_-qsejo9q83gT7_7Ia_wIegYgmPesDJXYAh42GviPFEgWqYJmblvHocaZUws25ON4An-Qf4rGxGdnmIpP72u6e-qWCdSVHCKpU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpNeU5mmoAdxZU9oI2h1wsFJ_rQiLatMC3N4SK-kzIpWPUmHUnKMTgy2tzDmJTD3UA1KazA3mum8u_GIaHmkgZQx1yLcetmTroQvbyVMEE3YUPJ9Yp1ylG0bGy5hEB47ZUpX6EFqxHmIT8joWVJMNJpVejEnPxbANKlQBnKN1fRYEWOcbXIKXKv60Fj9jdqYFf5eqRIXpABffiN86JP_0nbOq0ZqFc9UJaG4nQwvY2DbWr6EsFRriL34phDBH-XQM28vGaXEAZqjk',
]

// 작곡가별 관련 곡 목록
const composerRelatedTracks: Record<string, { title: string, duration: string }[]> = {
    'Claude Debussy': [
        { title: 'Arabesque No. 1', duration: '4:15' },
        { title: 'Rêverie', duration: '4:30' },
        { title: 'Prélude à l\'après-midi d\'un faune', duration: '10:45' },
    ],
    'Johann Pachelbel': [
        { title: 'Chaconne in F minor', duration: '6:20' },
        { title: 'Magnificat Fugue', duration: '3:45' },
        { title: 'Toccata in E minor', duration: '5:10' },
    ],
    'Ludwig van Beethoven': [
        { title: 'Für Elise', duration: '3:00' },
        { title: 'Symphony No. 9 - Ode to Joy', duration: '24:30' },
        { title: 'Piano Sonata No. 8 (Pathétique)', duration: '18:45' },
    ],
    'Antonio Vivaldi': [
        { title: 'The Four Seasons - Summer', duration: '11:00' },
        { title: 'The Four Seasons - Autumn', duration: '10:30' },
        { title: 'The Four Seasons - Winter', duration: '9:15' },
    ],
    'Wolfgang Amadeus Mozart': [
        { title: 'Piano Sonata No. 11 (Alla Turca)', duration: '20:00' },
        { title: 'Eine kleine Nachtmusik', duration: '17:30' },
        { title: 'Symphony No. 40', duration: '28:00' },
    ],
    'Frédéric Chopin': [
        { title: 'Nocturne Op. 9 No. 2', duration: '4:30' },
        { title: 'Waltz in C# minor', duration: '3:45' },
        { title: 'Ballade No. 1', duration: '9:30' },
    ],
}

// 기본 관련 곡 (작곡가를 못 찾을 경우)
const defaultRelatedTracks = [
    { title: 'Mozart - Piano Concerto No. 21', duration: '28:15' },
    { title: 'Bach - Air on the G String', duration: '5:30' },
    { title: 'Chopin - Nocturne Op. 9 No. 2', duration: '4:30' },
]

function YouTubeModal({ isOpen, onClose, composer, title }: YouTubeModalProps) {
    if (!isOpen) return null

    const searchQuery = `${composer} - ${title}`
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

    // 추천받은 음악을 첫 번째로, 관련 곡들을 그 다음에 표시
    const getRelatedTracks = () => {
        const tracks = composerRelatedTracks[composer] || defaultRelatedTracks
        return tracks.map((track, index) => ({
            title: tracks === defaultRelatedTracks ? track.title : `${composer} - ${track.title}`,
            channel: 'Classical Music',
            duration: track.duration,
            views: `${Math.floor(Math.random() * 50 + 5)}M views`,
            thumbnail: thumbnails[(index + 1) % thumbnails.length],
        }))
    }

    const videos = [
        {
            title: `${composer} - ${title}`,
            channel: 'Recommended for You',
            duration: '~5:00',
            views: 'Best Match',
            thumbnail: thumbnails[0],
            isMain: true,
        },
        ...getRelatedTracks().map(track => ({ ...track, isMain: false }))
    ]

    const handleOpenYouTube = () => {
        window.open(youtubeUrl, '_blank')
    }

    const handleVideoClick = (videoTitle: string) => {
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(videoTitle)}`
        window.open(url, '_blank')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div 
                className="relative z-10 w-full max-w-[700px] rounded-xl shadow-2xl overflow-hidden flex flex-col fade-in"
                style={{ 
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
            >
                {/* Header */}
                <header 
                    className="flex items-center justify-between px-8 py-6"
                    style={{ borderBottom: `1px solid ${colors.primary}1a` }}
                >
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3" style={{ color: colors.primary }}>
                            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                            <h1 
                                className="text-2xl font-bold leading-tight tracking-tight"
                                style={{ color: colors.text }}
                            >
                                YouTube Search Results
                            </h1>
                        </div>
                        <p 
                            className="text-sm"
                            style={{ color: `${colors.primary}b3` }}
                        >
                            Curated classical pieces for your peace of mind
                        </p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="flex items-center justify-center rounded-full p-2 transition-colors duration-300"
                        style={{ 
                            backgroundColor: `${colors.primary}1a`,
                            color: colors.primary
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.primary
                            e.currentTarget.style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${colors.primary}1a`
                            e.currentTarget.style.color = colors.primary
                        }}
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </header>

                {/* Search Bar */}
                <div className="px-8 py-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                    <div 
                        className="flex w-full items-stretch rounded-lg h-11 bg-white"
                        style={{ border: `1px solid ${colors.primary}1a` }}
                    >
                        <div className="flex items-center justify-center pl-4" style={{ color: colors.primary }}>
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input 
                            className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 focus:outline-none px-4 text-base"
                            style={{ color: colors.text }}
                            value={searchQuery}
                            readOnly
                        />
                    </div>
                </div>

                {/* Video Results List */}
                <div className="flex flex-col p-4 gap-2 max-h-[400px] overflow-y-auto">
                    {videos.map((video, index) => (
                        <div 
                            key={index}
                            onClick={() => handleVideoClick(video.title)}
                            className="flex gap-5 p-4 rounded-lg transition-all cursor-pointer group"
                            style={{ 
                                backgroundColor: video.isMain ? `${colors.primary}0a` : 'transparent',
                                border: video.isMain ? `2px solid ${colors.primary}40` : '2px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${colors.primary}15`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = video.isMain ? `${colors.primary}0a` : 'transparent'
                            }}
                        >
                            {/* Thumbnail */}
                            <div className="relative flex-shrink-0">
                                <div 
                                    className="bg-center bg-no-repeat bg-cover rounded-lg shadow-sm"
                                    style={{ 
                                        backgroundImage: `url("${video.thumbnail}")`,
                                        height: '90px',
                                        width: '160px',
                                        aspectRatio: '16/9'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-lg">
                                        <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                                            play_circle
                                        </span>
                                    </div>
                                </div>
                                {/* Best Match Badge */}
                                {video.isMain && (
                                    <div 
                                        className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white"
                                        style={{ backgroundColor: colors.primary }}
                                    >
                                        ✨ 추천
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex flex-1 flex-col justify-center">
                                <p 
                                    className="text-lg font-bold leading-tight transition-colors"
                                    style={{ color: video.isMain ? colors.primary : colors.text }}
                                >
                                    {video.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ color: video.isMain ? colors.primary : `${colors.primary}cc` }}
                                    >
                                        {video.channel}
                                    </span>
                                    <span className="text-gray-400 text-xs">•</span>
                                    <span className="text-gray-500 text-xs">
                                        {video.duration} • {video.views}
                                    </span>
                                </div>
                            </div>

                            {/* Play Button */}
                            <button 
                                className="self-center transition-colors"
                                style={{ color: video.isMain ? colors.primary : `${colors.primary}66` }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleVideoClick(video.title)
                                }}
                            >
                                <span className="material-symbols-outlined text-2xl">play_circle</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <footer 
                    className="flex items-center justify-between px-8 py-5"
                    style={{ borderTop: `1px solid ${colors.primary}1a` }}
                >
                    <button 
                        className="text-sm font-medium flex items-center gap-2 transition-all"
                        style={{ color: colors.primary }}
                    >
                        <span className="material-symbols-outlined text-xl">favorite</span>
                        Add all to playlist
                    </button>
                    <div className="flex gap-3">
                        <button 
                            onClick={onClose}
                            className="px-6 py-2 rounded-lg text-sm font-medium transition-all"
                            style={{ 
                                backgroundColor: `${colors.primary}1a`,
                                color: colors.primary
                            }}
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleOpenYouTube}
                            className="px-6 py-2 rounded-lg text-white text-sm font-medium transition-all"
                            style={{ 
                                backgroundColor: colors.primary,
                                boxShadow: `0 10px 15px -3px ${colors.primary}33`
                            }}
                        >
                            Open in YouTube
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default YouTubeModal
