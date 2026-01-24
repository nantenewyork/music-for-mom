interface Env {
    YOUTUBE_API_KEY: string;
}

interface RequestBody {
    query: string;
}

interface YouTubeSearchResult {
    id: string;
    title: string;
    channel: string;
    thumbnail: string;
    duration?: string;
    views?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { query } = await context.request.json() as RequestBody;

        if (!query || typeof query !== 'string') {
            return new Response(
                JSON.stringify({ error: 'Query is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const apiKey = context.env.YOUTUBE_API_KEY;
        if (!apiKey) {
            // API 키가 없으면 빈 배열 반환 (프론트에서 fallback 처리)
            return new Response(
                JSON.stringify({ results: [], error: 'YouTube API key not configured' }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // YouTube Data API v3 검색
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=4&key=${apiKey}`;
        
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json() as any;

        if (!searchData.items || searchData.items.length === 0) {
            return new Response(
                JSON.stringify({ results: [] }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // 비디오 ID 목록 추출
        const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

        // 비디오 상세 정보 가져오기 (조회수, 재생시간)
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json() as any;

        // 결과 조합
        const results: YouTubeSearchResult[] = searchData.items.map((item: any, index: number) => {
            const details = detailsData.items?.[index];
            const duration = details?.contentDetails?.duration || '';
            const viewCount = details?.statistics?.viewCount || '0';

            return {
                id: item.id.videoId,
                title: item.snippet.title,
                channel: item.snippet.channelTitle,
                thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                duration: formatDuration(duration),
                views: formatViews(viewCount),
            };
        });

        return new Response(
            JSON.stringify({ results }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    } catch (error) {
        console.error('Error in youtube-search function:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to search YouTube', results: [] }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// ISO 8601 duration을 읽기 쉬운 형식으로 변환
function formatDuration(isoDuration: string): string {
    if (!isoDuration) return '';
    
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// 조회수를 읽기 쉬운 형식으로 변환
function formatViews(viewCount: string): string {
    const views = parseInt(viewCount);
    if (views >= 1000000000) {
        return `${(views / 1000000000).toFixed(1)}B views`;
    }
    if (views >= 1000000) {
        return `${(views / 1000000).toFixed(1)}M views`;
    }
    if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
}

// CORS preflight 처리
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};
