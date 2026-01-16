// ### 📄 js/config.js
// Global Site Configuration
const siteConfig = {
    siteName: 'Crack-CU',
    siteTitle: 'CU C-Unit Admission Preparation',
    logo: 'assets/images/logo.png',
    favicon: 'assets/images/logo.png',
    
    // Hero Banner Configuration
    heroBanner: {
        title: 'Crack CU C-Unit Admission',
        subtitle: "Don't just study, Crack it.",
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    
    // Contact Links - UPDATE THESE WITH YOUR ACTUAL LINKS
    contact: {
        whatsapp: 'https://wa.me/8801522132809', // Replace with your WhatsApp number
        facebook: 'https://facebook.com/crackcu', // Replace with your Facebook page
        youtube: 'https://youtube.com/@crackcu', // Replace with your YouTube channel
        telegram: 'https://t.me/crackcu', // Replace with your Telegram group
        facebookGroup: 'https://facebook.com/groups/crackcu' // Replace with your Facebook group
    },
    
    // Mentors
    mentors: 'Guided by Motiur Rahman Ahad & Team'
};

// Set favicon on page load
document.addEventListener('DOMContentLoaded', () => {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = siteConfig.favicon;
    document.head.appendChild(favicon);
    
    // Set contact links in footer
    const footerLinks = document.querySelectorAll('.social-link');
    if (footerLinks.length >= 4) {
        footerLinks[0].href = siteConfig.contact.whatsapp;
        footerLinks[1].href = siteConfig.contact.facebook;
        footerLinks[2].href = siteConfig.contact.youtube;
        footerLinks[3].href = siteConfig.contact.telegram;
    }
});

