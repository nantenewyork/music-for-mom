import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogPosts } from './blogData'

const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

const BlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { i18n, t } = useTranslation()
    const post = blogPosts.find(p => p.id === id)
    const isEn = i18n.language === 'en'

    if (!post) {
        return (
            <div className="text-center py-20">
                <p>{t('common.error')}</p>
                <button onClick={() => navigate('/blog')} className="mt-4 text-blue-500 underline">{t('common.back')}</button>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
            {/* SEO/GEO JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": isEn ? post.titleEn : post.title,
                    "description": isEn ? post.excerptEn : post.excerpt,
                    "datePublished": post.date,
                    "author": {
                        "@type": "Organization",
                        "name": "Aura Classical"
                    },
                    "articleBody": (isEn ? post.contentEn : post.content).replace(/<[^>]*>?/gm, '')
                })}
            </script>

            <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
                style={{ color: colors.deepGold }}
            >
                <span className="material-symbols-outlined">arrow_back</span>
                {t('common.back')}
            </button>

            <article className="glass-panel-warm rounded-[2.5rem] p-8 md:p-16 shadow-2xl fade-in overflow-hidden relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full opacity-[0.05]" style={{ backgroundColor: colors.deepGold }}></div>

                <header className="mb-12 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/50" style={{ color: colors.deepGold }}>
                            {isEn ? post.categoryEn : post.category}
                        </span>
                        <span className="text-sm opacity-50">{post.date}</span>
                    </div>
                    <h1 className="premium-serif text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: colors.warmSlate }}>
                        {isEn ? post.titleEn : post.title}
                    </h1>
                </header>

                <div
                    className="blog-content prose prose-stone lg:prose-xl max-w-none relative z-10"
                    style={{ color: `${colors.warmSlate}e6` }}
                    dangerouslySetInnerHTML={{ __html: isEn ? post.contentEn : post.content }}
                />

                <footer className="mt-16 pt-8 border-t border-white/20 text-center relative z-10">
                    <p className="text-sm opacity-50 mb-6 font-medium">
                        {isEn ? "Did you find this helpful? Start prenatal care with music recommendations." : "본 정보가 도움이 되셨나요? 음악 추천 기능을 통해 태교를 시작해보세요."}
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="yt-button inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white shadow-xl"
                    >
                        {t('library.goGetRecommendation')}
                        <span className="material-symbols-outlined">auto_awesome</span>
                    </button>
                </footer>
            </article>
        </div>
    )
}

export default BlogPost
