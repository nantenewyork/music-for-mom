import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '../pages/blog/blogData'

const colors = {
    deepGold: '#b45309',
    primaryWarm: '#d97706',
    warmSlate: '#475569',
    ochreGlow: '#fef3c7',
}

const HomeSections = () => {
    const navigate = useNavigate()
    const latestPosts = blogPosts.slice(0, 3)

    return (
        <div className="w-full">
            {/* The Art of Maternal Wellbeing Section */}
            <section className="bg-gradient-to-b from-orange-100/20 to-transparent py-16 sm:py-24 border-t border-orange-200/20 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="mb-12 sm:mb-20 flex flex-col items-center text-center px-4">
                        <h2 className="premium-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.warmSlate }}>
                            The Art of Maternal Wellbeing
                        </h2>
                        <p className="max-w-2xl text-lg sm:text-xl italic font-serif" style={{ color: `${colors.warmSlate}99` }}>
                            Like a master's delicate brushstroke, specific sound frequencies create a living masterpiece of calm for both mother and child.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-3">
                        {/* Golden Serenity */}
                        <div className="group flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 bg-white/40 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl">
                            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.2rem] sm:rounded-[1.5rem] bg-orange-100 text-deep-gold" style={{ backgroundColor: `${colors.deepGold}15` }}>
                                <span className="material-symbols-outlined text-3xl sm:text-4xl">flare</span>
                            </div>
                            <div>
                                <h3 className="premium-serif text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.warmSlate }}>Golden Serenity</h3>
                                <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.warmSlate}b3` }}>
                                    Harmonic frequencies reduce maternal cortisol levels, inviting a state of pure, golden relaxation during pregnancy.
                                </p>
                            </div>
                        </div>

                        {/* Natural Growth */}
                        <div className="group flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 bg-white/40 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl">
                            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.2rem] sm:rounded-[1.5rem] bg-green-100 text-green-700" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                                <span className="material-symbols-outlined text-3xl sm:text-4xl">eco</span>
                            </div>
                            <div>
                                <h3 className="premium-serif text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.warmSlate }}>Natural Growth</h3>
                                <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.warmSlate}b3` }}>
                                    Complex melodic patterns act as organic stimuli for early neural pathways in your baby's delicate development.
                                </p>
                            </div>
                        </div>

                        {/* Soulful Connection */}
                        <div className="group flex flex-col gap-6 sm:gap-8 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 bg-white/40 border border-white/40 transition-all hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl">
                            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.2rem] sm:rounded-[1.5rem] bg-orange-100 text-deep-gold" style={{ backgroundColor: `${colors.primaryWarm}15` }}>
                                <span className="material-symbols-outlined text-3xl sm:text-4xl">brush</span>
                            </div>
                            <div>
                                <h3 className="premium-serif text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.warmSlate }}>Soulful Connection</h3>
                                <p className="text-sm font-medium leading-relaxed" style={{ color: `${colors.warmSlate}b3` }}>
                                    Shared auditory textures foster an emotional resonance that paints a unique, lifelong bond between you and your little one.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col sm:flex-row justify-between items-end mb-10 sm:mb-12 gap-4 px-2">
                        <div className="text-left">
                            <h2 className="premium-serif text-3xl sm:text-4xl font-bold mb-2" style={{ color: colors.warmSlate }}>
                                태교 이야기 & 가이드
                            </h2>
                            <p className="text-base sm:text-lg opacity-70" style={{ color: `${colors.warmSlate}` }}>
                                전문가가 들려주는 태교 음악의 과학과 팁
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/blog')}
                            className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group transition-all"
                            style={{ color: colors.deepGold }}
                        >
                            블로그 전체보기
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                        {latestPosts.map((post) => (
                            <article
                                key={post.id}
                                className="glass-panel-warm rounded-[2rem] overflow-hidden flex flex-col hover:translate-y-[-4px] transition-transform cursor-pointer shadow-lg"
                                style={{ background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.5)' }}
                                onClick={() => navigate(`/blog/${post.id}`)}
                            >
                                <div className="p-6 sm:p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/60" style={{ color: colors.deepGold }}>
                                            {post.category}
                                        </span>
                                        <span className="text-[10px] opacity-50">{post.date}</span>
                                    </div>
                                    <h3 className="premium-serif text-lg sm:text-xl font-bold mb-4 leading-tight" style={{ color: colors.warmSlate }}>
                                        {post.title}
                                    </h3>
                                    <p className="text-sm opacity-70 mb-6 flex-1 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div
                                        className="text-xs font-bold uppercase tracking-widest flex items-center gap-1"
                                        style={{ color: colors.deepGold }}
                                    >
                                        더 읽어보기
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSections
