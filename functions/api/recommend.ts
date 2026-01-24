interface Env {
    OPENAI_API_KEY: string
}

interface RequestBody {
    mood: string
}

interface MusicRecommendation {
    composer: string
    title: string
    youtubeId: string
    description: string
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

        const apiKey = context.env.OPENAI_API_KEY
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: 'OpenAI API key not configured' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Call OpenAI API
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: `You are a classical music expert specializing in music therapy for pregnant women. 
            When given a mood, recommend ONE classical music piece that would be beneficial for a pregnant woman feeling that way.
            
            Respond ONLY with a valid JSON object in this exact format (no markdown, no code blocks):
            {
              "composer": "Composer Name",
              "title": "Music Title",
              "youtubeId": "YouTube video ID (11 characters)",
              "description": "A brief Korean description (2-3 sentences) of why this music is good for this mood"
            }
            
            Make sure the YouTube ID is valid and the video exists. Choose well-known, high-quality recordings.`
                    },
                    {
                        role: 'user',
                        content: `임산부가 "${mood}" 기분을 느끼고 있습니다. 이 기분에 맞는 클래식 음악 한 곡을 추천해주세요.`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        })

        if (!openaiResponse.ok) {
            const errorText = await openaiResponse.text()
            console.error('OpenAI API error:', errorText)
            return new Response(
                JSON.stringify({ error: 'Failed to get recommendation from OpenAI' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        const openaiData = await openaiResponse.json() as any
        const content = openaiData.choices[0]?.message?.content

        if (!content) {
            return new Response(
                JSON.stringify({ error: 'No recommendation received' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Parse the JSON response from OpenAI
        let recommendation: MusicRecommendation
        try {
            // Remove markdown code blocks if present
            const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim()
            recommendation = JSON.parse(cleanContent)
        } catch (parseError) {
            console.error('Failed to parse OpenAI response:', content)
            return new Response(
                JSON.stringify({ error: 'Invalid response format from AI' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Validate the response
        if (!recommendation.composer || !recommendation.title || !recommendation.youtubeId || !recommendation.description) {
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
