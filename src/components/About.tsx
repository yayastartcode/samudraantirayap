import { motion } from 'motion/react'

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Label */}
                        <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase mb-2 block">
                            Tentang Kami
                        </span>

                        {/* Company Name */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a313e] mb-6">
                            Samudra Anti Rayap Indonesia
                        </h2>

                        {/* Description Paragraphs */}
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                <span className="font-semibold text-[#1a313e]">Samudra Anti Rayap Indonesia</span> dikenal bertahun tahun sebagai jasa Basmi Rayap Profesional. Kami memberikan layanan cepat, perawatan yang efektif dan menyeluruh, disesuaikan dengan kebutuhan Anda.
                            </p>
                            <p>
                                Kami mengambil tanggung jawab kami dengan serius, dan akan bekerja paling keras untuk menjaga rumah dan bisnis Anda bebas dari Rayap. <span className="font-semibold text-[#1a313e]">Tim kami memiliki lebih dari sepuluh tahun pengalaman dalam bisnis pengendalian Rayap dan siap melayani Anda 24 jam.</span>
                            </p>
                            <p>
                                Bertahun tahun, pengalaman panjang adalah lisensi khusus profesionalisme layanan kami. Hubungi kami dan dapatkan penawaran terbaik untuk kebutuhan penanggulangan Rayap di tempat Anda.
                            </p>
                        </div>


                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/image/termite.jpg"
                                alt="Tim Samudra Anti Rayap"
                                className="w-full h-[650px] object-cover"
                            />

                            {/* Experience Badge */}
                            <div className="absolute bottom-6 right-6 bg-[#1a313e] text-white px-6 py-4 rounded-lg shadow-lg">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl font-bold">10+</span>
                                    <div className="text-sm leading-tight">
                                        <p className="font-semibold">Pengalaman Lebih</p>
                                        <p>Dari 10 Tahun</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-200 rounded-full opacity-50 -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-100 rounded-full opacity-50 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
