import './MusicPlayer.css'

interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
}

interface MusicPlayerProps {
    recommendation: MusicRecommendation
}

function MusicPlayer({ recommendation }: MusicPlayerProps) {
    // YouTube 검색 쿼리 생성 (작곡가 + 곡명)
    const searchQuery = `${recommendation.composer} ${recommendation.title}`
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

    return (
        <div className="music-player-container glass-card fade-in">
            <div className="music-info">
                <h2 className="music-title">{recommendation.title}</h2>
                <p className="music-composer">작곡가: {recommendation.composer}</p>
                <p className="music-description">{recommendation.description}</p>
            </div>

            <div className="youtube-action">
                <div className="music-icon">🎵</div>
                <p className="youtube-instruction">YouTube에서 음악을 감상하세요</p>
                
                <a 
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary youtube-btn"
                >
                    ▶️ YouTube에서 듣기
                </a>
            </div>

            <div className="music-footer">
                <p className="music-footer-text">
                    💝 이 음악이 당신과 아기에게 평온함을 선사하길 바랍니다
                </p>
            </div>
        </div>
    )
}

export default MusicPlayer
