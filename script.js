/**
 * WhatsApp Order Functionality
 * Handles product ordering via WhatsApp with pre-filled messages
 */

// WhatsApp phone number - Ditesh Roy's WhatsApp number
// Format: country code + number (without + or spaces)
const WHATSAPP_NUMBER = "919303350491"; // +91 9303350491

/**
 * Opens WhatsApp with a pre-filled message for product ordering
 * @param {string} productName - Name of the product to order
 */
function orderProduct(productName) {
    // Validate product name
    if (!productName || productName.trim() === "") {
        productName = "plant";
    }

    // Create the order message template
    const message = `Namaste Ditesh Roy ji 🙏
Mujhe aapke nursery se *${productName}* order karna hai.

Quantity:
Delivery Pincode:
Payment Mode: UPI

Kripya availability confirm karein.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Track order attempt (optional - for analytics)
    console.log(`Order attempted for: ${productName}`);
}

/**
 * Opens WhatsApp with a general inquiry message
 * Used for hero section and contact section buttons
 */
function openWhatsApp() {
    // General inquiry message
    const message = `Namaste Ditesh Roy ji 🙏
Mujhe aapke nursery se plant/seed order karna hai.

Product Name:
Quantity:
Delivery Pincode:
Payment Mode: UPI

Kripya availability confirm karein.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Track general inquiry
    console.log('General WhatsApp inquiry opened');
}

/**
 * Validate WhatsApp number format
 * @param {string} number - WhatsApp number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateWhatsAppNumber(number) {
    // Remove any spaces, dashes, or plus signs
    const cleanedNumber = number.replace(/[\s\-\+]/g, '');
    
    // Check if it's numeric and has reasonable length (10-15 digits)
    return /^\d{10,15}$/.test(cleanedNumber);
}

/**
 * Initialize WhatsApp functionality
 * This function runs when the page loads
 */
function initWhatsApp() {
    // Check if WhatsApp number is configured
    if (!validateWhatsAppNumber(WHATSAPP_NUMBER)) {
        console.warn('Warning: Please verify WHATSAPP_NUMBER in script.js');
    }
    
    // Add click tracking for analytics (optional)
    const orderButtons = document.querySelectorAll('.btn-product, .btn-whatsapp-hero, .btn-contact');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Optional: Track button clicks for analytics
            // You can integrate with Google Analytics or other tracking services here
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initWhatsApp();
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation (optional enhancement)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
