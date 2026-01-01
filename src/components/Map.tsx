import { motion } from 'motion/react'

export function Map() {
    return (
        <section className="w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.177546175501!2d107.648942!3d-6.988356899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c1d84f622d%3A0xe6975e7a16859954!2sBumi%20Cikoneng%20Indah!5e0!3m2!1sen!2sid!4v1767228653662!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Samudra Anti Rayap"
                    className="w-full"
                />
            </motion.div>
        </section>
    )
}

export default Map
