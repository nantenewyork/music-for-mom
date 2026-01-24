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
    const searchQuery = `${recommendation.composer} ${recommendation.title}`
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

    return (
        <div className="relative w-full max-w-md fade-in">
            {/* Background Effects */}
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-impressionist-gold/20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-impressionist-green/15 blur-3xl"></div>
            
            {/* Card */}
            <div className="relative glass-warm rounded-[3rem] p-8 shadow-[0_30px_60px_-15px_rgba(231,111,81,0.2)] border border-white/60">
                {/* Music Icon */}
                <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-impressionist-orange/20 flex items-center justify-center text-impressionist-orange pulse-animation">
                        <span className="material-symbols-outlined text-5xl">music_note</span>
                    </div>
                </div>

                {/* Music Info */}
                <div className="text-center mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-2">추천 음악</p>
                    <h2 className="font-serif text-2xl font-semibold text-ink italic leading-tight mb-2">
                        {recommendation.title}
                    </h2>
                    <p className="text-impressionist-orange font-medium">
                        {recommendation.composer}
                    </p>
                </div>

                {/* Description */}
                <p className="text-ink/70 text-sm leading-relaxed text-center mb-8 font-serif italic">
                    {recommendation.description}
                </p>

                {/* YouTube Button */}
                <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-impressionist-orange text-white font-bold transition-all hover:brightness-105 hover:-translate-y-1 shadow-xl shadow-impressionist-orange/30"
                >
                    <span className="material-symbols-outlined">play_circle</span>
                    YouTube에서 듣기
                </a>

                {/* Footer Message */}
                <p className="text-center mt-6 text-xs text-ink/40 font-medium">
                    💝 이 음악이 당신과 아기에게 평온함을 선사하길 바랍니다
                </p>
            </div>
        </div>
    )
}

export default MusicPlayer
