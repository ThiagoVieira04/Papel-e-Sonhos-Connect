// =====================
// CONFIGURATION
// =====================

const CONFIG = {
    pixKey: '+5521987172463', // Chave Pix (celular)
    whatsappPhone: '5521987172463',
    googleReviewUrl: 'https://www.google.com/search?q=Papel+e+Sonhos+Informática',
    instagramUrl: 'https://www.instagram.com',
    facebookUrl: 'https://www.facebook.com',
    pageUrl: 'https://papel-e-sonhos-connect.vercel.app/',
};

// =====================
// DOM ELEMENTS
// =====================

const pixModal = document.getElementById('pixModal');
const qrcodeModal = document.getElementById('qrcodeModal');
const linkButtons = document.querySelectorAll('.link-button');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const copyPixBtn = document.getElementById('copyPixBtn');
const downloadQRBtn = document.getElementById('downloadQRBtn');
const successMessage = document.getElementById('successMessage');
const toast = document.getElementById('toast');

// =====================
// INITIALIZATION
// =====================

document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
    optimizeForMobile();
    detectAccessMethod();
});

// =====================
// EVENT LISTENERS
// =====================

function initEventListeners() {
    // Link buttons
    linkButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });

    // Modal close buttons
    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Close modal on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAllModals();
            }
        });
    });

    // Copy Pix button
    if (copyPixBtn) {
        copyPixBtn.addEventListener('click', copyPixKey);
    }

    // Download QR Code button
    if (downloadQRBtn) {
        downloadQRBtn.addEventListener('click', downloadQRCode);
    }

    // Close modals on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// =====================
// BUTTON HANDLERS
// =====================

function handleButtonClick(e) {
    const button = e.currentTarget;
    const action = button.getAttribute('data-action');

    switch(action) {
        case 'open-link':
            openLink(button.getAttribute('data-link'));
            break;
        case 'pix-modal':
            openPixModal();
            break;
        case 'qrcode-modal':
            openQRCodeModal();
            break;
        default:
            break;
    }
}

// =====================
// LINK HANDLING
// =====================

function openLink(url) {
    if (!url) {
        showToast('Link não configurado', 'error');
        return;
    }

    // Track the click (analytics)
    trackEvent('link_click', { url: url });

    // Open link
    window.open(url, '_blank', 'noopener,noreferrer');
}

// =====================
// PIX MODAL
// =====================

function openPixModal() {
    closeAllModals();
    pixModal.classList.add('active');
    
    // Scroll to ensure modal is visible
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function copyPixKey() {
    const pixKey = CONFIG.pixKey;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixKey)
            .then(() => {
                showSuccessMessage('Chave Pix copiada!');
                copyPixBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                setTimeout(() => {
                    copyPixBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                }, 2000);
                trackEvent('pix_key_copied', {});
            })
            .catch(() => {
                fallbackCopyToClipboard(pixKey);
            });
    } else {
        fallbackCopyToClipboard(pixKey);
    }
}

function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showSuccessMessage('Chave Pix copiada!');
        trackEvent('pix_key_copied_fallback', {});
    } catch(e) {
        console.error('Erro ao copiar:', e);
        showToast('Erro ao copiar a chave', 'error');
    }
    
    document.body.removeChild(textarea);
}

// =====================
// QR CODE MODAL
// =====================

function openQRCodeModal() {
    closeAllModals();
    qrcodeModal.classList.add('active');
    generatePageQRCode();
    
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function generatePageQRCode() {
    const container = document.getElementById('pageQRCode');
    
    // Clear previous QR code
    container.innerHTML = '';
    
    // Use the Vercel page URL if provided, otherwise use current location
    const pageUrl = CONFIG.pageUrl || window.location.href;
    
    try {
        new QRCode(container, {
            text: pageUrl,
            width: 200,
            height: 200,
            colorDark: '#0a2463',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch(e) {
        console.error('Erro ao gerar QR Code:', e);
        container.innerHTML = '<p style="color: #d32f2f;">Erro ao gerar QR Code</p>';
    }
}

function downloadQRCode() {
    const canvas = document.querySelector('#pageQRCode canvas');
    
    if (!canvas) {
        showToast('QR Code não gerado', 'error');
        return;
    }
    
    // Convert canvas to image
    const image = canvas.toDataURL('image/png');
    
    // Create download link
    const link = document.createElement('a');
    link.href = image;
    link.download = 'papel-e-sonhos-qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showSuccessMessage('QR Code baixado!');
    trackEvent('qrcode_downloaded', {});
}

// =====================
// MODAL MANAGEMENT
// =====================

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// =====================
// NOTIFICATIONS
// =====================

function showSuccessMessage(text) {
    const messageElement = document.getElementById('successText');
    messageElement.textContent = text;
    
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// =====================
// MOBILE OPTIMIZATION
// =====================

function optimizeForMobile() {
    // Add iOS web app meta tags
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isIOS || isAndroid) {
        // Mobile device detected
        document.documentElement.classList.add('is-mobile');
        
        // Disable zoom on input focus
        document.addEventListener('touchstart', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                // Trigger ripple effect
                const button = e.target.closest('button');
                if (button) {
                    button.classList.add('active');
                }
            }
        }, { passive: true });
    }
    
    // Detect if accessed via QR Code or NFC
    detectAccessMethod();
}

// =====================
// ACCESS METHOD DETECTION
// =====================

function detectAccessMethod() {
    // Check if accessed via NFC or QR Code
    const params = new URLSearchParams(window.location.search);
    const accessMethod = params.get('utm_source');
    
    if (accessMethod === 'nfc' || accessMethod === 'qrcode') {
        // Log analytics
        trackEvent('page_access', { method: accessMethod });
    }
    
    // Check referer for QR Code readers
    const referer = document.referrer;
    if (referer && (referer.includes('zxing') || referer.includes('qrcode'))) {
        trackEvent('qrcode_scan', {});
    }
}

// =====================
// SHARE FUNCTIONALITY
// =====================

function shareViaWhatsApp() {
    const text = encodeURIComponent('Conheça a Papel e Sonhos Informática! Serviços digitais, impressão e documentos. ' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareViaOther() {
    if (navigator.share) {
        navigator.share({
            title: 'Papel e Sonhos Informática',
            text: 'Conheça nossos serviços!',
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        showToast('Compartilhamento não suportado', 'error');
    }
}

// =====================
// ANALYTICS & TRACKING
// =====================

function trackEvent(eventName, eventData = {}) {
    // Send to analytics service (Google Analytics, Mixpanel, etc.)
    // For now, just log to console
    console.log('Event tracked:', eventName, eventData);
    
    // If Google Analytics is available
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Store in localStorage for later analysis
    const events = JSON.parse(localStorage.getItem('pageEvents') || '[]');
    events.push({
        name: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 50 events
    if (events.length > 50) {
        events.shift();
    }
    
    localStorage.setItem('pageEvents', JSON.stringify(events));
}

// =====================
// PERFORMANCE OPTIMIZATION
// =====================

// Lazy load images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    lazyImages.forEach(img => {
        img.loading = 'lazy';
    });
}

// Preload resources
function preloadResources() {
    // Preload font awesome
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
}

// Service Worker registration (for PWA)
if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.register('sw.js').catch(err => {
    //     console.log('Service Worker registration failed:', err);
    // });
}

// =====================
// KEYBOARD NAVIGATION
// =====================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('using-keyboard');
});

// =====================
// PWA & MANIFEST
// =====================

// Add manifest link dynamically
function addManifest() {
    const manifest = {
        name: 'Papel e Sonhos Informática',
        short_name: 'P&S Informática',
        description: 'Serviços digitais, impressão, documentos e atendimento rápido pelo WhatsApp.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0a2463',
        orientation: 'portrait-primary',
        icons: [
            {
                src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%230a2463" width="192" height="192"/><text x="96" y="130" font-size="120" fill="%23FFD700" text-anchor="middle" font-weight="bold">P</text></svg>',
                sizes: '192x192',
                type: 'image/svg+xml',
                purpose: 'any'
            },
            {
                src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect fill="%230a2463" width="512" height="512"/><text x="256" y="350" font-size="320" fill="%23FFD700" text-anchor="middle" font-weight="bold">P</text></svg>',
                sizes: '512x512',
                type: 'image/svg+xml',
                purpose: 'maskable'
            }
        ],
        screenshots: [
            {
                src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 720"><rect fill="%230a2463" width="540" height="720"/></svg>',
                sizes: '540x720',
                type: 'image/svg+xml',
                form_factor: 'narrow'
            }
        ],
        categories: ['business', 'shopping'],
        shortcuts: [
            {
                name: 'WhatsApp',
                short_name: 'Chat',
                description: 'Abrir WhatsApp',
                url: '/?utm_source=shortcut&utm_medium=app_shortcut&utm_campaign=whatsapp',
                icons: [{ src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%2325d366" width="96" height="96"/></svg>', sizes: '96x96' }]
            },
            {
                name: 'Pix',
                short_name: 'Pagar',
                description: 'Ver QR Code Pix',
                url: '/?utm_source=shortcut&utm_medium=app_shortcut&utm_campaign=pix',
                icons: [{ src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%23FFD700" width="96" height="96"/></svg>', sizes: '96x96' }]
            }
        ]
    };
    
    const manifestString = JSON.stringify(manifest);
    const blob = new Blob([manifestString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = url;
    document.head.appendChild(link);
}

// Initialize manifest when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addManifest);
} else {
    addManifest();
}

// =====================
// UTILITY FUNCTIONS
// =====================

function formatPhoneNumber(phone) {
    // Format: (21) 98717-2463
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/(\d{2})(\d{5})(\d{4})/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        online: navigator.onLine,
        language: navigator.language
    };
}

// =====================
// ERROR HANDLING
// =====================

window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    trackEvent('javascript_error', {
        message: e.error.message,
        stack: e.error.stack
    });
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise rejection:', event.reason);
    trackEvent('unhandled_rejection', {
        reason: event.reason
    });
});

// =====================
// PAGE VISIBILITY
// =====================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        trackEvent('page_hidden', {});
    } else {
        trackEvent('page_visible', {});
    }
});

// =====================
// EXPORT FUNCTIONS
// =====================

// These can be used in console or called from HTML
window.copyPixKey = copyPixKey;
window.downloadQRCode = downloadQRCode;
window.shareViaWhatsApp = shareViaWhatsApp;
window.shareViaOther = shareViaOther;
window.trackEvent = trackEvent;
window.getAnalytics = function() {
    return JSON.parse(localStorage.getItem('pageEvents') || '[]');
};
