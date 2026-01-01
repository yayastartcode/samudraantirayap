import { motion } from 'motion/react'

const techniques = [
    {
        number: '01',
        title: 'Injeksi',
        description: 'Metode suntik cairan anti rayap langsung ke dalam tanah atau struktur bangunan. Teknik ini efektif untuk menciptakan penghalang kimia yang melindungi fondasi rumah dari serangan rayap tanah.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Spraying',
        description: 'Penyemprotan cairan termitisida pada permukaan kayu dan area yang terinfestasi rayap. Metode ini cocok untuk penanganan cepat pada serangan rayap yang sudah terlihat di permukaan.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Baiting System',
        description: 'Sistem umpan yang dipasang di sekitar bangunan untuk menarik dan mengeliminasi koloni rayap secara menyeluruh. Rayap membawa umpan beracun ke sarang sehingga seluruh koloni dapat dibasmi.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'System Pipa',
        description: 'Instalasi pipa permanen di dalam struktur bangunan untuk memudahkan aplikasi ulang cairan anti rayap. Sistem ini ideal untuk perlindungan jangka panjang dan perawatan berkala yang efisien.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
]

export function Techniques() {
    return (
        <section id="services" className="py-20 bg-[#1a313e]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="text-sky-400 font-semibold text-sm tracking-wide uppercase mb-2 block">
                        Metode Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Teknik Pembasmian Rayap
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Kami menggunakan berbagai metode profesional untuk membasmi rayap sesuai dengan kondisi dan kebutuhan properti Anda.
                    </p>
                </motion.div>

                {/* Technique Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techniques.map((technique, index) => (
                        <motion.div
                            key={technique.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300"
                        >
                            {/* Number Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sky-400 text-4xl font-bold opacity-50">
                                    {technique.number}
                                </span>
                                <div className="text-sky-400 group-hover:scale-110 transition-transform duration-300">
                                    {technique.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {technique.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {technique.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Techniques
