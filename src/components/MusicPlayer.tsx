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
    return (
        <div className="music-player-container glass-card fade-in">
            <div className="music-info">
                <h2 className="music-title">{recommendation.title}</h2>
                <p className="music-composer">작곡가: {recommendation.composer}</p>
                <p className="music-description">{recommendation.description}</p>
            </div>

            <div className="video-container">
                <iframe
                    className="youtube-iframe"
                    src={`https://www.youtube.com/embed/${recommendation.youtubeId}?autoplay=1`}
                    title={`${recommendation.composer} - ${recommendation.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
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
