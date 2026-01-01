import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { getWhatsAppUrl } from '@/config/contact'

export function Hero() {
    const handleSurveyClick = () => {
        const message = 'Halo, saya ingin request SURVEY GRATIS untuk layanan anti rayap.'
        window.open(getWhatsAppUrl(message), '_blank')
    }

    return (
        <section
            className="relative min-h-[600px] flex items-center pt-28"
            style={{ backgroundColor: '#1a313e' }}
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1612960891902-b525d250aa89?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a313e]/90 to-[#1a313e]/70" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                {/* Tagline with decorative lines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <span className="w-8 h-0.5 bg-amber-500" />
                    <span className="text-amber-500 font-semibold tracking-wide">
                        Garansi 3 Sampai 5 Tahun
                    </span>
                    <span className="w-8 h-0.5 bg-amber-500" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl"
                >
                    Jasa Anti Rayap<br />
                    Terbaik di Bandung
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-300 text-lg mb-8 max-w-xl"
                >
                    Samudra Anti Rayap adalah perusahaan suntik rayap bersertifikasi di Bandung.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        onClick={handleSurveyClick}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        SURVEY GRATIS
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
