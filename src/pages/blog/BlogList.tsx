import { useNavigate } from 'react-router-dom'
import { blogPosts } from './blogData'

const colors = {
    deepGold: '#b45309',
    warmSlate: '#475569',
}

const BlogList = () => {
    const navigate = useNavigate()

    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="mb-12 text-center fade-in">
                <h1 className="premium-serif text-3xl md:text-5xl font-semibold mb-4" style={{ color: colors.deepGold }}>
                    Music for Mom Blog
                </h1>
                <p className="text-lg opacity-70" style={{ color: colors.warmSlate }}>
                    임산부를 위한 태교 음악과 클래식 이야기
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sortedPosts.map((post) => (
                    <article
                        key={post.id}
                        className="glass-panel-warm rounded-3xl overflow-hidden flex flex-col hover:translate-y-[-4px] transition-transform cursor-pointer shadow-lg"
                        onClick={() => navigate(`/blog/${post.id}`)}
                    >
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/50" style={{ color: colors.deepGold }}>
                                    {post.category}
                                </span>
                                <span className="text-[10px] opacity-50">{post.date}</span>
                            </div>
                            <h2 className="premium-serif text-xl font-bold mb-3 leading-tight" style={{ color: colors.warmSlate }}>
                                {post.title}
                            </h2>
                            <p className="text-sm opacity-70 mb-6 flex-1 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <button
                                className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 group"
                                style={{ color: colors.deepGold }}
                            >
                                더 읽어보기
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default BlogList
