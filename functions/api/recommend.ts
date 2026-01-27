interface Env {
    GEMINI_API_KEY: string
}

interface RequestBody {
    mood: string
}

interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
    composerInfo: string
    musicInfo: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { mood } = await context.request.json() as RequestBody

        if (!mood || typeof mood !== 'string') {
            return new Response(
                JSON.stringify({ error: 'Mood is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            )
        }

        const apiKey = context.env.GEMINI_API_KEY
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: 'Gemini API key not configured' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        const systemPrompt = `You are a classical music expert specializing in music therapy for pregnant women. 
When given a mood, recommend ONE classical music piece that would be beneficial for a pregnant woman feeling that way.

Respond ONLY with a valid JSON object in this exact format (no markdown, no code blocks):
{
  "composer": "Composer Name",
  "title": "Music Title",
  "youtubeId": "YouTube video ID (11 characters)",
  "description": "A brief Korean description (2-3 sentences) of why this music is good for this mood",
  "composerInfo": "A brief Korean description (2-3 sentences) about the composer's life or style",
  "musicInfo": "A brief Korean description (2-3 sentences) about this specific music piece, its history, or its characteristics"
}

Make sure the YouTube ID is valid and the video exists. Choose well-known, high-quality recordings.`

        const userPrompt = `임산부가 "${mood}" 기분을 느끼고 있습니다. 이 기분에 맞는 클래식 음악 한 곡을 추천해주세요.`

        // Call Gemini API
        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `${systemPrompt}\n\n${userPrompt}`
                                }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 2048,
                    }
                }),
            }
        )

        if (!geminiResponse.ok) {
            const errorText = await geminiResponse.text()
            console.error('Gemini API error:', errorText)
            return new Response(
                JSON.stringify({ error: 'Failed to get recommendation from Gemini' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        const geminiData = await geminiResponse.json() as any
        const content = geminiData.candidates?.[0]?.content?.parts?.[0]?.text

        if (!content) {
            return new Response(
                JSON.stringify({ error: 'No recommendation received' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Parse the JSON response from Gemini
        let recommendation: MusicRecommendation
        try {
            // Remove markdown code blocks if present
            const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim()
            recommendation = JSON.parse(cleanContent)
        } catch (parseError) {
            console.error('Failed to parse Gemini response:', content)
            return new Response(
                JSON.stringify({ error: 'Invalid response format from AI' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Validate the response
        if (!recommendation.composer || !recommendation.title || !recommendation.youtubeId || !recommendation.description || !recommendation.composerInfo || !recommendation.musicInfo) {
            return new Response(
                JSON.stringify({ error: 'Incomplete recommendation data' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        return new Response(
            JSON.stringify(recommendation),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        )
    } catch (error) {
        console.error('Error in recommend function:', error)
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
    }
}
