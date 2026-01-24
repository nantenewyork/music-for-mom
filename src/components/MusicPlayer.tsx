interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
}

interface MusicPlayerProps {
    recommendation: MusicRecommendation
}

const colors = {
    orange: '#E76F51',
    gold: '#E9C46A',
    green: '#76937F',
    ink: '#264653',
}

function MusicPlayer({ recommendation }: MusicPlayerProps) {
    const searchQuery = `${recommendation.composer} ${recommendation.title}`
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

    return (
        <div className="relative w-full max-w-md fade-in">
            {/* Background Effects */}
            <div 
                className="absolute -top-8 -right-8 h-64 w-64 rounded-full blur-3xl"
                style={{ backgroundColor: `${colors.gold}33` }}
            ></div>
            <div 
                className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full blur-3xl"
                style={{ backgroundColor: `${colors.green}26` }}
            ></div>
            
            {/* Card */}
            <div 
                className="relative glass-warm rounded-[3rem] p-8 border border-white/60"
                style={{ boxShadow: `0 30px 60px -15px ${colors.orange}33` }}
            >
                {/* Music Icon */}
                <div className="flex justify-center mb-6">
                    <div 
                        className="h-20 w-20 rounded-full flex items-center justify-center pulse-animation"
                        style={{ backgroundColor: `${colors.orange}33`, color: colors.orange }}
                    >
                        <span className="material-symbols-outlined text-5xl">music_note</span>
                    </div>
                </div>

                {/* Music Info */}
                <div className="text-center mb-8">
                    <p 
                        className="text-[10px] font-bold uppercase tracking-widest mb-2"
                        style={{ color: `${colors.ink}80` }}
                    >
                        추천 음악
                    </p>
                    <h2 
                        className="font-serif text-2xl font-semibold italic leading-tight mb-2"
                        style={{ color: colors.ink }}
                    >
                        {recommendation.title}
                    </h2>
                    <p className="font-medium" style={{ color: colors.orange }}>
                        {recommendation.composer}
                    </p>
                </div>

                {/* Description */}
                <p 
                    className="text-sm leading-relaxed text-center mb-8 font-serif italic"
                    style={{ color: `${colors.ink}b3` }}
                >
                    {recommendation.description}
                </p>

                {/* YouTube Button */}
                <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-white font-bold transition-all hover:brightness-105 hover:-translate-y-1"
                    style={{ 
                        backgroundColor: colors.orange,
                        boxShadow: `0 10px 25px -5px ${colors.orange}4d`
                    }}
                >
                    <span className="material-symbols-outlined">play_circle</span>
                    YouTube에서 듣기
                </a>

                {/* Footer Message */}
                <p 
                    className="text-center mt-6 text-xs font-medium"
                    style={{ color: `${colors.ink}66` }}
                >
                    💝 이 음악이 당신과 아기에게 평온함을 선사하길 바랍니다
                </p>
            </div>
        </div>
    )
}

export default MusicPlayer
