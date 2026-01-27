import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    const colors = {
        deepGold: '#b45309',
    }

    return (
        <footer className="glass-panel-warm py-6 sm:py-10 mt-auto border-t border-white/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs sm:text-sm" style={{ color: colors.deepGold }}>auto_awesome</span>
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: `${colors.deepGold}80` }}>
                            {t('footer.copyright')}
                        </p>
                    </div>
                    <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
                        <Link to="/" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>Home</Link>
                        <Link to="/guide" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>Guide</Link>
                        <Link to="/blog" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>Blog</Link>
                        <Link to="/about" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>About Us</Link>
                        <Link to="/contact" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>Contact Us</Link>
                        <Link to="/terms" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>{t('footer.terms')}</Link>
                        <Link to="/refund" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>{t('footer.refund')}</Link>
                        <Link to="/privacy" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: `${colors.deepGold}80` }}>{t('footer.privacy')}</Link>
                    </div>
                </div>
                <p className="text-[9px] sm:text-[10px] text-center mt-6 opacity-40" style={{ color: colors.deepGold }}>
                    &copy; 2026 Music for Mom. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
