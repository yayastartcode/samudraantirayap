import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
    {
        question: 'Apa itu SAMUDRA ANTI RAYAP?',
        answer: 'SAMUDRA ANTI RAYAP adalah jasa profesional pengendalian dan pembasmian rayap dengan metode yang disesuaikan kondisi bangunan.',
    },
    {
        question: 'Melayani wilayah mana saja?',
        answer: 'Kami melayani Bandung dan sekitarnya.',
    },
    {
        question: 'Metode apa yang digunakan?',
        answer: 'Kami menggunakan metode Injeksi, Spraying, Baiting System, dan System Pipa.',
    },
    {
        question: 'Apakah ada garansi layanan?',
        answer: 'Ya, tersedia garansi 3–5 tahun dan layanan tersertifikat.',
    },
    {
        question: 'Bagaimana dengan harga jasa?',
        answer: 'Harga kompetitif, disesuaikan dengan kondisi dan kebutuhan bangunan.',
    },
    {
        question: 'Bagaimana cara pesan di Samudra Anti Rayap?',
        answer: 'Silahkan pilih whatsapp atau telfon nomor kami yang ada di website.',
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase mb-2 block">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a313e] mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan umum tentang layanan kami
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors duration-200"
                            >
                                <span className="font-semibold text-[#1a313e] pr-4">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 text-sky-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
