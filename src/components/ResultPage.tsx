import { useState } from 'react'
import html2canvas from 'html2canvas'

interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
    composerInfo: string
    musicInfo: string
}

interface ResultPageProps {
    recommendation: MusicRecommendation
    mood: string
    onGenerateAnother: () => void
    onSaveToLibrary: () => void
    loading: boolean
}

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
}

function ResultPage({ recommendation, mood, onGenerateAnother, onSaveToLibrary, loading }: ResultPageProps) {
    const [isCapturing, setIsCapturing] = useState(false)

    // YouTube 검색 URL 생성 및 열기
    const handleWatchOnYouTube = () => {
        const searchQuery = `${recommendation.composer} ${recommendation.title}`
        const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
        window.open(youtubeUrl, '_blank')
    }

    // 기분에서 키워드 추출 (간단한 버전)
    const getMoodKeyword = (mood: string) => {
        if (mood.includes('평화') || mood.includes('고요') || mood.includes('평온')) return 'Finding Peace'
        if (mood.includes('행복') || mood.includes('기쁨') || mood.includes('설레')) return 'Feeling Joy'
        if (mood.includes('피곤') || mood.includes('쉬고')) return 'Seeking Rest'
        if (mood.includes('불안') || mood.includes('걱정')) return 'Finding Comfort'
        return 'Your Harmony'
    }

    // 날짜 포맷 함수
    const formatDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const day = now.getDate()
        const weekdays = ['일', '월', '화', '수', '목', '금', '토']
        const weekday = weekdays[now.getDay()]
        return `${year}년 ${month}월 ${day}일 (${weekday})`
    }

    // 이미지로 저장
    const handleSaveAsImage = async () => {
        const today = formatDate()

        // 공유용 카드 동적 생성
        const shareCard = document.createElement('div')
        shareCard.style.cssText = `
            width: 600px;
            padding: 48px;
            background: linear-gradient(135deg, #FFFBF2 0%, #FEF3C7 50%, #FDF2F8 100%);
            font-family: 'Manrope', sans-serif;
            position: fixed;
            left: -9999px;
            top: 0;
        `
        shareCard.innerHTML = `
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(180,83,9,0.1); padding: 8px 16px; border-radius: 9999px; margin-bottom: 12px;">
                    <span style="color: #b45309; font-size: 14px;">✨</span>
                    <span style="color: #b45309; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Aura Classical</span>
                </div>
                <p style="color: #475569; font-size: 13px; opacity: 0.6; margin-bottom: 4px;">📅 ${today}</p>
                <p style="color: #475569; font-size: 14px; opacity: 0.7;">AI가 추천한 클래식 음악</p>
            </div>
            <div style="background: rgba(255,255,255,0.6); border-radius: 24px; padding: 40px; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 20px 60px rgba(180,83,9,0.1);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                    <span style="font-size: 16px;">💭</span>
                    <p style="color: #b45309; font-size: 14px; font-weight: 600;">오늘의 기분: "${mood}"</p>
                </div>
                <p style="color: #b45309; font-size: 12px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px; opacity: 0.7;">Now Curated for You</p>
                <h2 style="color: #475569; font-size: 32px; font-weight: 500; margin-bottom: 8px; font-family: 'Playfair Display', serif; line-height: 1.2;">${recommendation.title}</h2>
                <p style="color: #b45309; font-size: 20px; font-style: italic; margin-bottom: 24px; font-family: 'Playfair Display', serif;">${recommendation.composer}</p>
                <div style="background: rgba(180,83,9,0.05); border-radius: 16px; padding: 20px; border-left: 4px solid #b45309; margin-bottom: 20px;">
                    <p style="color: #475569; font-size: 14px; line-height: 1.7; font-style: italic; opacity: 0.9;">"${recommendation.description}"</p>
                </div>
                <div style="display: grid; grid-template-cols: 1fr; gap: 16px;">
                    <div>
                        <p style="color: #b45309; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; opacity: 0.7;">About Composer</p>
                        <p style="color: #475569; font-size: 12px; line-height: 1.5; opacity: 0.8;">${recommendation.composerInfo}</p>
                    </div>
                    <div>
                        <p style="color: #b45309; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; opacity: 0.7;">About Music</p>
                        <p style="color: #475569; font-size: 12px; line-height: 1.5; opacity: 0.8;">${recommendation.musicInfo}</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <p style="color: #b45309; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; opacity: 0.6;">🎵 music-for-mom.pages.dev</p>
            </div>
        `
        document.body.appendChild(shareCard)

        setIsCapturing(true)
        try {
            const canvas = await html2canvas(shareCard, {
                scale: 2,
                backgroundColor: '#FFFBF2',
            })

            const link = document.createElement('a')
            link.download = `aura-classical-${recommendation.title.replace(/\s+/g, '-')}.png`
            link.href = canvas.toDataURL('image/png')
            link.click()
        } catch (error) {
            console.error('Failed to save image:', error)
            alert('이미지 저장에 실패했습니다. 다시 시도해주세요.')
        } finally {
            document.body.removeChild(shareCard)
            setIsCapturing(false)
        }
    }

    // 공유용 카드 생성 함수
    const createShareCard = (): HTMLDivElement => {
        const today = formatDate()
        const shareCard = document.createElement('div')
        shareCard.style.cssText = `
            width: 600px;
            padding: 48px;
            background: linear-gradient(135deg, #FFFBF2 0%, #FEF3C7 50%, #FDF2F8 100%);
            font-family: 'Manrope', sans-serif;
            position: fixed;
            left: -9999px;
            top: 0;
        `
        shareCard.innerHTML = `
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(180,83,9,0.1); padding: 8px 16px; border-radius: 9999px; margin-bottom: 12px;">
                    <span style="color: #b45309; font-size: 14px;">✨</span>
                    <span style="color: #b45309; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Aura Classical</span>
                </div>
                <p style="color: #475569; font-size: 13px; opacity: 0.6; margin-bottom: 4px;">📅 ${today}</p>
                <p style="color: #475569; font-size: 14px; opacity: 0.7;">AI가 추천한 클래식 음악</p>
            </div>
            <div style="background: rgba(255,255,255,0.6); border-radius: 24px; padding: 40px; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 20px 60px rgba(180,83,9,0.1);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                    <span style="font-size: 16px;">💭</span>
                    <p style="color: #b45309; font-size: 14px; font-weight: 600;">오늘의 기분: "${mood}"</p>
                </div>
                <p style="color: #b45309; font-size: 12px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px; opacity: 0.7;">Now Curated for You</p>
                <h2 style="color: #475569; font-size: 32px; font-weight: 500; margin-bottom: 8px; font-family: 'Playfair Display', serif; line-height: 1.2;">${recommendation.title}</h2>
                <p style="color: #b45309; font-size: 20px; font-style: italic; margin-bottom: 24px; font-family: 'Playfair Display', serif;">${recommendation.composer}</p>
                <div style="background: rgba(180,83,9,0.05); border-radius: 16px; padding: 20px; border-left: 4px solid #b45309; margin-bottom: 20px;">
                    <p style="color: #475569; font-size: 14px; line-height: 1.7; font-style: italic; opacity: 0.9;">"${recommendation.description}"</p>
                </div>
                <div style="display: grid; grid-template-cols: 1fr; gap: 16px;">
                    <div>
                        <p style="color: #b45309; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; opacity: 0.7;">About Composer</p>
                        <p style="color: #475569; font-size: 12px; line-height: 1.5; opacity: 0.8;">${recommendation.composerInfo}</p>
                    </div>
                    <div>
                        <p style="color: #b45309; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; opacity: 0.7;">About Music</p>
                        <p style="color: #475569; font-size: 12px; line-height: 1.5; opacity: 0.8;">${recommendation.musicInfo}</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <p style="color: #b45309; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; opacity: 0.6;">🎵 music-for-mom.pages.dev</p>
            </div>
        `
        return shareCard
    }

    // 공유하기
    const handleShare = async () => {
        const shareText = `🎵 Aura Classical 추천 음악\n\n🎼 ${recommendation.title}\n🎹 ${recommendation.composer}\n\n"${recommendation.description}"\n\n✨ 나도 추천받기: ${window.location.origin}`

        // Web Share API 지원 확인
        if (navigator.share) {
            try {
                setIsCapturing(true)

                // 공유 카드 생성 및 캡처
                const shareCard = createShareCard()
                document.body.appendChild(shareCard)

                const canvas = await html2canvas(shareCard, {
                    scale: 2,
                    backgroundColor: '#FFFBF2',
                })

                document.body.removeChild(shareCard)

                canvas.toBlob(async (blob) => {
                    if (blob) {
                        const file = new File([blob], 'aura-classical.png', { type: 'image/png' })
                        try {
                            await navigator.share({
                                title: `${recommendation.title} - ${recommendation.composer}`,
                                text: shareText,
                                files: [file],
                            })
                        } catch {
                            // 파일 공유 실패 시 텍스트만 공유
                            try {
                                await navigator.share({
                                    title: `${recommendation.title} - ${recommendation.composer}`,
                                    text: shareText,
                                })
                            } catch {
                                // 사용자가 취소한 경우
                            }
                        }
                    }
                    setIsCapturing(false)
                }, 'image/png')
            } catch (error) {
                setIsCapturing(false)
                if ((error as Error).name !== 'AbortError') {
                    console.error('Share failed:', error)
                }
            }
        } else {
            // Web Share API 미지원 시 클립보드에 복사
            try {
                await navigator.clipboard.writeText(shareText)
                alert('클립보드에 복사되었습니다! 📋')
            } catch (error) {
                console.error('Clipboard copy failed:', error)
                alert('공유 기능을 사용할 수 없습니다.')
            }
        }
    }

    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-20" style={{ color: colors.warmSlate }}>
            {/* Title Section */}
            <div className="mb-8 sm:mb-12 text-center fade-in">
                <div
                    className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 shadow-sm"
                    style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(217, 119, 6, 0.2)' }}
                >
                    <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>Aura Insight</span>
                </div>
                <h1 className="premium-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight px-2" style={{ color: colors.warmSlate }}>
                    Based on your mood: <br className="sm:hidden" /><span className="italic" style={{ color: colors.deepGold }}>{getMoodKeyword(mood)}</span>
                </h1>
            </div>

            {/* Main Card */}
            <div
                className="w-full max-w-5xl fade-in px-2"
            >
                <div
                    className="glass-panel-warm painterly-shadow rounded-3xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-16 items-center"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(254,243,199,0.3) 100%)',
                        border: '1px solid rgba(255,255,255,0.5)',
                    }}
                >
                    {/* Image */}
                    <div className="relative w-full lg:w-1/2 flex justify-center items-center">
                        <div className="organic-frame w-full max-w-xs sm:max-w-md aspect-square relative group">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 impressionist-image-filter rounded-xl sm:rounded-2xl"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx3KTb0WdXFsKKL4mNBiXTYlr9whWo-hdSc4WlXMfD2ljyzKHaVNULu4L_oRI2tlcFOK15YPuYyxH2XasnYq54lobFyDox6DlKAH3acNi-pbrOdasMhsDDxwk5Vi87fdnjtApcRHltSlmeFd2aajRxH82IuAyknWyqpu9sRYyrhPD_rvAG2v1_6rqtBru-WMgI_2eakavyVO8babfyqu45XnLSSFD2f7-wL9RpkL9YFXp54yITBvl12edYf9Jqebm6QyU_VXPSdwM')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 to-transparent mix-blend-overlay rounded-xl sm:rounded-2xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <button
                                    onClick={handleWatchOnYouTube}
                                    className="h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/40 hover:scale-110 transition-transform"
                                >
                                    <span className="material-symbols-outlined text-2xl sm:text-4xl" style={{ color: colors.deepGold }}>play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 sm:gap-8">
                        <div className="flex flex-col gap-1 sm:gap-2 text-center lg:text-left">
                            <p
                                className="text-[10px] sm:text-xs font-bold tracking-widest uppercase"
                                style={{ color: `${colors.deepGold}99` }}
                            >
                                Now Curated for You
                            </p>
                            <h2
                                className="premium-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
                                style={{ color: colors.warmSlate }}
                            >
                                {recommendation.title}
                            </h2>
                            <p
                                className="text-base sm:text-xl md:text-2xl italic premium-serif"
                                style={{ color: `${colors.deepGold}cc` }}
                            >
                                {recommendation.composer}
                            </p>
                        </div>

                        {/* Why this harmony */}
                        <div
                            className="space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border shadow-sm"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: colors.deepGold }}>flare</span>
                                <p
                                    className="text-xs sm:text-sm font-bold uppercase tracking-widest"
                                    style={{ color: `${colors.deepGold}b3` }}
                                >
                                    Why this harmony?
                                </p>
                            </div>
                            <p
                                className="text-sm sm:text-base md:text-lg leading-relaxed italic font-light"
                                style={{ color: `${colors.warmSlate}e6` }}
                            >
                                "{recommendation.description}"
                            </p>

                            <div className="mt-6 space-y-4 border-t border-white/20 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <p
                                            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                                            style={{ color: `${colors.deepGold}b3` }}
                                        >
                                            작곡가 이야기
                                        </p>
                                        <p
                                            className="text-xs sm:text-sm leading-relaxed font-light opacity-80"
                                            style={{ color: colors.warmSlate }}
                                        >
                                            {recommendation.composerInfo}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p
                                            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                                            style={{ color: `${colors.deepGold}b3` }}
                                        >
                                            곡의 배경
                                        </p>
                                        <p
                                            className="text-xs sm:text-sm leading-relaxed font-light opacity-80"
                                            style={{ color: colors.warmSlate }}
                                        >
                                            {recommendation.musicInfo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branding for share card */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 opacity-60">
                            <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: colors.deepGold }}>
                                Aura Classical AI
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons (outside the capture area) */}
            <div className="w-full max-w-5xl mt-6 sm:mt-8 fade-in px-2">
                <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Primary Button */}
                    <button
                        onClick={handleWatchOnYouTube}
                        className="yt-button flex w-full items-center justify-center gap-2 sm:gap-3 rounded-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl"
                    >
                        <span className="material-symbols-outlined text-xl sm:text-2xl">play_circle</span>
                        Watch on YouTube
                    </button>

                    {/* Secondary Buttons */}
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                        <button
                            onClick={onGenerateAnother}
                            disabled={loading}
                            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full bg-white/40 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-white/60 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                        >
                            <span className={`material-symbols-outlined text-lg sm:text-xl ${loading ? 'animate-spin' : ''}`}>
                                {loading ? 'progress_activity' : 'refresh'}
                            </span>
                            <span className="text-[10px] sm:text-sm">{loading ? '생성중...' : '다시 추천'}</span>
                        </button>
                        <button
                            onClick={onSaveToLibrary}
                            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full bg-white/40 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-white/60 transition-all shadow-sm"
                            style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                        >
                            <span className="material-symbols-outlined text-lg sm:text-xl">favorite</span>
                            <span className="text-[10px] sm:text-sm">저장</span>
                        </button>
                        <button
                            onClick={handleSaveAsImage}
                            disabled={isCapturing}
                            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full bg-white/40 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-white/60 transition-all shadow-sm disabled:opacity-50"
                            style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                        >
                            <span className="material-symbols-outlined text-lg sm:text-xl">
                                {isCapturing ? 'hourglass_empty' : 'download'}
                            </span>
                            <span className="text-[10px] sm:text-sm">{isCapturing ? '저장중' : '이미지'}</span>
                        </button>
                        <button
                            onClick={handleShare}
                            disabled={isCapturing}
                            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full bg-white/40 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold hover:bg-white/60 transition-all shadow-sm disabled:opacity-50"
                            style={{ color: colors.deepGold, border: `1px solid ${colors.deepGold}33` }}
                        >
                            <span className="material-symbols-outlined text-lg sm:text-xl">share</span>
                            <span className="text-[10px] sm:text-sm">공유</span>
                        </button>

                        {/* Free Trial Button for Result Page */}
                        <button
                            onClick={() => window.location.href = '/paywall'}
                            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl sm:rounded-full px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all shadow-sm"
                            style={{
                                background: `linear-gradient(135deg, ${colors.deepGold} 0%, ${colors.primaryWarm} 100%)`,
                                gridColumn: 'span 1' // Make sure it fits
                            }}
                        >
                            <span className="material-symbols-outlined text-lg sm:text-xl">star</span>
                            <span className="text-[10px] sm:text-sm">무료체험</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="mt-10 sm:mt-16 max-w-2xl text-center px-4">
                <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: `${colors.deepGold}b3` }}>
                    Classical music during pregnancy can reduce cortisol and enhance prenatal bonding.
                    <br />
                    <a
                        className="font-bold transition-all"
                        style={{ color: colors.deepGold, borderBottom: `1px solid ${colors.deepGold}4d` }}
                        href="#"
                    >
                        Explore our scientific approach
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ResultPage
