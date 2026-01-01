import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { CONTACT } from '@/config/contact'

export function Contact() {
    const [formData, setFormData] = useState({
        nama: '',
        whatsapp: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Format message for WhatsApp
        const message = `Halo, saya ingin reservasi layanan anti rayap.

*Nama:* ${formData.nama}
*No WhatsApp:* ${formData.whatsapp}

Mohon informasi lebih lanjut. Terima kasih.`

        // Create WhatsApp URL using master config
        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`

        // Open WhatsApp
        window.open(whatsappUrl, '_blank')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a313e] mb-4">
                        Reservasi Sekarang
                    </h2>
                    <p className="text-slate-600">
                        Isi form di bawah ini untuk melakukan reservasi layanan
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-xl mx-auto"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#1a313e]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nama Field */}
                            <div>
                                <label
                                    htmlFor="nama"
                                    className="block text-[#1a313e] font-semibold mb-2"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama Anda"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all duration-200 text-slate-700 placeholder:text-slate-400"
                                />
                            </div>

                            {/* WhatsApp Field */}
                            <div>
                                <label
                                    htmlFor="whatsapp"
                                    className="block text-[#1a313e] font-semibold mb-2"
                                >
                                    No WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="Contoh: 08123456789"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all duration-200 text-slate-700 placeholder:text-slate-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-6 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Kirim via WhatsApp
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
