import { useState, useEffect } from 'react'

interface YouTubeModalProps {
    isOpen: boolean
    onClose: () => void
    composer: string
    title: string
}

interface YouTubeVideo {
    id: string
    title: string
    channel: string
    thumbnail: string
    duration: string
    views: string
}

const colors = {
    primary: '#d41132',
    text: '#1b0d10',
}

function YouTubeModal({ isOpen, onClose, composer, title }: YouTubeModalProps) {
    const [videos, setVideos] = useState<YouTubeVideo[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const searchQuery = `${composer} ${title}`
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

    // 모달이 열릴 때 YouTube 검색 실행
    useEffect(() => {
        if (isOpen) {
            fetchYouTubeResults()
        }
    }, [isOpen, composer, title])

    const fetchYouTubeResults = async () => {
        setLoading(true)
        setError(null)
        
        try {
            const response = await fetch('/api/youtube-search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: searchQuery })
            })
            
            const data = await response.json()
            
            if (data.results && data.results.length > 0) {
                setVideos(data.results)
            } else {
                setError('검색 결과가 없습니다')
            }
        } catch (err) {
            setError('YouTube 검색에 실패했습니다')
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    const handleOpenYouTube = () => {
        window.open(youtubeUrl, '_blank')
    }

    const handleVideoClick = (videoId: string) => {
        const url = `https://www.youtube.com/watch?v=${videoId}`
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
                    {loading && (
                        <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center gap-3">
                                <div 
                                    className="w-8 h-8 border-3 border-t-transparent rounded-full animate-spin"
                                    style={{ borderColor: `${colors.primary}40`, borderTopColor: 'transparent' }}
                                />
                                <p className="text-sm" style={{ color: colors.primary }}>YouTube 검색 중...</p>
                            </div>
                        </div>
                    )}

                    {error && !loading && (
                        <div className="flex flex-col items-center justify-center py-12 gap-4">
                            <span className="material-symbols-outlined text-4xl" style={{ color: `${colors.primary}66` }}>
                                search_off
                            </span>
                            <p className="text-sm" style={{ color: `${colors.text}99` }}>{error}</p>
                            <button
                                onClick={handleOpenYouTube}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                                style={{ backgroundColor: colors.primary }}
                            >
                                YouTube에서 직접 검색
                            </button>
                        </div>
                    )}

                    {!loading && !error && videos.map((video, index) => (
                        <div 
                            key={video.id || index}
                            onClick={() => handleVideoClick(video.id)}
                            className="flex gap-5 p-4 rounded-lg transition-all cursor-pointer group"
                            style={{ 
                                backgroundColor: index === 0 ? `${colors.primary}0a` : 'transparent',
                                border: index === 0 ? `2px solid ${colors.primary}40` : '2px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${colors.primary}15`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = index === 0 ? `${colors.primary}0a` : 'transparent'
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
                                {/* Top Result Badge */}
                                {index === 0 && (
                                    <div 
                                        className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white"
                                        style={{ backgroundColor: colors.primary }}
                                    >
                                        #1
                                    </div>
                                )}
                                {/* Duration Badge */}
                                {video.duration && (
                                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-xs font-medium text-white bg-black/80">
                                        {video.duration}
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex flex-1 flex-col justify-center">
                                <p 
                                    className="text-base font-bold leading-tight transition-colors line-clamp-2"
                                    style={{ color: index === 0 ? colors.primary : colors.text }}
                                >
                                    {video.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ color: `${colors.primary}cc` }}
                                    >
                                        {video.channel}
                                    </span>
                                    {video.views && (
                                        <>
                                            <span className="text-gray-400 text-xs">•</span>
                                            <span className="text-gray-500 text-xs">{video.views}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Play Button */}
                            <button 
                                className="self-center transition-colors"
                                style={{ color: index === 0 ? colors.primary : `${colors.primary}66` }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleVideoClick(video.id)
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
