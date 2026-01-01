import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { label: 'Beranda', href: '#' },
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Layanan', href: '#services' },
        { label: 'Reservasi', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
    ]

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 md:px-6 py-2 fixed top-0 left-0 right-0 z-50 shadow-lg"
            style={{ backgroundColor: '#1a313e' }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center"
                >
                    <img
                        src="/image/shrlgo.jpeg"
                        alt="Logo"
                        className="h-12 md:h-24 w-auto object-contain"
                    />
                </motion.a>

                {/* Desktop Navigation Links */}
                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="hidden md:flex items-center gap-8"
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="text-slate-300 hover:text-white font-medium transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </motion.nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white rounded-full transition-all"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-white rounded-full transition-all"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white rounded-full transition-all"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="py-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header
