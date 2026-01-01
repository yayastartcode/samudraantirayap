// Master Contact Configuration
// Update this file to change contact info across the entire website

export const CONTACT = {
    whatsapp: '6282312548142',
    phone: '+62 823 1254 8142',
    email: 'samudraantirayap@gmail.com',
    address: 'Komplek Bumi Cikoneng Indah Blok B 12 Bandung',
    companyName: 'Samudra Anti Rayap Indonesia',
}

// Helper function to generate WhatsApp URL
export const getWhatsAppUrl = (message?: string) => {
    const baseUrl = `https://wa.me/${CONTACT.whatsapp}`
    return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}
