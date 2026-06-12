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
const wifiModal = document.getElementById('wifiModal');
const linkButtons = document.querySelectorAll('.link-button');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const copyPixBtn = document.getElementById('copyPixBtn');
const downloadQRBtn = document.getElementById('downloadQRBtn');
const connectWiFiBtn = document.getElementById('connectWiFiBtn');
const successMessage = document.getElementById('successMessage');
const toast = document.getElementById('toast');
const bankModal = document.getElementById('bankModal');
const openBankBtn = document.getElementById('openBankBtn');
const bankLoading = document.getElementById('bankLoading');
const bankGrid = document.getElementById('bankGrid');
const bankGridList = document.getElementById('bankGridList');
const bankNotice = document.getElementById('bankNotice');

// =====================
// INITIALIZATION
// =====================

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
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

    // Connect WiFi button
    if (connectWiFiBtn) {
        connectWiFiBtn.addEventListener('click', connectToWiFi);
    }

    // Open Bank button
    if (openBankBtn) {
        openBankBtn.addEventListener('click', openBankModal);
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
        case 'wifi-modal':
            openWiFiModal();
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
// WiFi MODAL
// =====================

function openWiFiModal() {
    closeAllModals();
    wifiModal.classList.add('active');
    generateWiFiQRCode();
    
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function generateWiFiQRCode() {
    const container = document.getElementById('wifiQRCode');
    
    // Clear previous QR code
    container.innerHTML = '';
    
    // WiFi data in standard format
    // Format: WIFI:T:WPA;S:SSID;P:PASSWORD;;
    const wifiString = 'WIFI:T:WPA;S:TSDINFORMATICA;P:t04101986;;';
    
    try {
        new QRCode(container, {
            text: wifiString,
            width: 200,
            height: 200,
            colorDark: '#0a2463',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch(e) {
        console.error('Erro ao gerar QR Code WiFi:', e);
        container.innerHTML = '<p style="color: #d32f2f;">Erro ao gerar QR Code</p>';
    }
}

function connectToWiFi() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const wifiSSID = 'TSDINFORMATICA';
    const wifiPassword = 't04101986';
    
    trackEvent('wifi_connect_button_clicked', {});
    
    if (isAndroid) {
        connectAndroid();
    } else if (isIOS) {
        connectIOS();
    } else {
        showWiFiInstructions(wifiSSID, wifiPassword);
    }
}

function connectAndroid() {
    const wifiSSID = 'TSDINFORMATICA';
    const wifiPassword = 't04101986';
    
    // Método 1: Intent específico para Settings WiFi
    const intents = [
        'intent://net.settings.Wireless#Intent;action=android.intent.action.MAIN;end',
        'intent://net.settings.Settings#Intent;action=android.intent.action.MAIN;end',
        'android-app://com.android.settings/net/wifi',
        'android-app://com.android.settings/',
    ];
    
    let intentIndex = 0;
    
    function tryNextIntent() {
        if (intentIndex < intents.length) {
            try {
                window.location.href = intents[intentIndex];
                intentIndex++;
                setTimeout(tryNextIntent, 800);
            } catch (e) {
                intentIndex++;
                tryNextIntent();
            }
        } else {
            // Nenhum intent funcionou - mostrar instruções
            showWiFiInstructions(wifiSSID, wifiPassword);
        }
    }
    
    tryNextIntent();
}

function connectIOS() {
    const wifiSSID = 'TSDINFORMATICA';
    const wifiPassword = 't04101986';
    
    // Métodos em ordem de prioridade
    const methods = [
        'App-Prefs:root=WIFI',  // iOS 15.1+
        'prefs:root=WIFI',      // iOS antigo
    ];
    
    let methodIndex = 0;
    
    function tryNextMethod() {
        if (methodIndex < methods.length) {
            try {
                window.location.href = methods[methodIndex];
                methodIndex++;
                setTimeout(tryNextMethod, 800);
            } catch (e) {
                methodIndex++;
                tryNextMethod();
            }
        } else {
            // Nenhum método funcionou
            showWiFiInstructions(wifiSSID, wifiPassword);
        }
    }
    
    tryNextMethod();
}

function showWiFiInstructions(ssid, password) {
    let title = '📶 Conectar ao WiFi';
    let instructions = `\n\nRede: ${ssid}\n`;
    instructions += `Senha: ${password}\n\n`;
    instructions += `Passos:\n`;
    instructions += `1️⃣  Abra as Configurações\n`;
    instructions += `2️⃣  Selecione WiFi\n`;
    instructions += `3️⃣  Procure por: ${ssid}\n`;
    instructions += `4️⃣  Digite a senha\n\n`;
    instructions += `Deseja copiar a senha?`;
    
    if (confirm(title + instructions)) {
        navigator.clipboard.writeText(password)
            .then(() => {
                showSuccessMessage('✅ Senha copiada! Conecte às configurações WiFi.');
            })
            .catch(() => {
                showToast('Abra as configurações manualmente', 'info');
            });
    }
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
// BANK SELECTOR FUNCTIONALITY
// =====================

// Package names oficiais + lojas + web fallback para cada banco.
const BANKS = [
    {
        name: 'Nubank',
        scheme: 'nubank://',
        packageName: 'com.nu.production',
        color: 'linear-gradient(135deg, #820AD1, #530082)',
        initials: 'Nu',
        domain: 'nubank.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.nu.production',
        appStore: 'https://apps.apple.com/app/nubank/id814572894',
        webUrl: 'https://nubank.com.br'
    },
    {
        name: 'Itaú',
        scheme: 'itau://',
        packageName: 'com.itau',
        color: 'linear-gradient(135deg, #FF7A00, #EC5E00)',
        initials: 'Itaú',
        domain: 'itau.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.itau',
        appStore: 'https://apps.apple.com/app/itau/id503168593',
        webUrl: 'https://www.itau.com.br'
    },
    {
        name: 'Bradesco',
        scheme: 'bradescomobile://',
        packageName: 'com.bradesco',
        color: 'linear-gradient(135deg, #CC092F, #E60042)',
        initials: 'Brad',
        domain: 'bradesco.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.bradesco',
        appStore: 'https://apps.apple.com/app/bradesco/id495329932',
        webUrl: 'https://banco.bradesco'
    },
    {
        name: 'Banco do Brasil',
        scheme: 'bancodobrasil://',
        packageName: 'br.com.bb.android',
        color: 'linear-gradient(135deg, #F2E307, #003399)',
        initials: 'BB',
        domain: 'bb.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.bb.android',
        appStore: 'https://apps.apple.com/app/banco-do-brasil/id485729790',
        webUrl: 'https://www.bb.com.br'
    },
    {
        name: 'Caixa',
        scheme: 'caixadireto://',
        packageName: 'br.com.gabba.Caixa',
        color: 'linear-gradient(135deg, #005CA9, #F58220)',
        initials: 'X',
        domain: 'caixa.gov.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.gabba.Caixa',
        appStore: 'https://apps.apple.com/app/caixa/id494956025',
        webUrl: 'https://www.caixa.gov.br'
    },
    {
        name: 'Santander',
        scheme: 'santander://',
        packageName: 'com.santander.app',
        color: 'linear-gradient(135deg, #EC0000, #B30000)',
        initials: 'Sant',
        domain: 'santander.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.santander.app',
        appStore: 'https://apps.apple.com/app/santander/id544045818',
        webUrl: 'https://www.santander.com.br'
    },
    {
        name: 'Inter',
        scheme: 'bancointer://',
        packageName: 'br.com.intermedium',
        color: 'linear-gradient(135deg, #FF7A00, #FF5500)',
        initials: 'Inter',
        domain: 'bancointer.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.intermedium',
        appStore: 'https://apps.apple.com/app/inter&id894135880',
        webUrl: 'https://www.bancointer.com.br'
    },
    {
        name: 'PagBank',
        scheme: 'pagseguro://',
        packageName: 'br.com.pagseguro.app',
        color: 'linear-gradient(135deg, #00C69E, #BFE02C)',
        initials: 'Pag',
        domain: 'pagseguro.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.pagseguro.app',
        appStore: 'https://apps.apple.com/app/pagbank/id1014025623',
        webUrl: 'https://pagseguro.uol.com.br'
    },
    {
        name: 'Mercado Pago',
        scheme: 'mercadopago://',
        packageName: 'com.mercadopago.wallet',
        color: 'linear-gradient(135deg, #00B1EA, #00A650)',
        initials: 'MP',
        domain: 'mercadopago.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.mercadopago.wallet',
        appStore: 'https://apps.apple.com/app/mercado-pago/id921999318',
        webUrl: 'https://www.mercadopago.com.br'
    },
    {
        name: 'PicPay',
        scheme: 'picpay://',
        packageName: 'com.picpay',
        color: 'linear-gradient(135deg, #21C25E, #117F3D)',
        initials: 'Pic',
        domain: 'picpay.com',
        playStore: 'https://play.google.com/store/apps/details?id=com.picpay',
        appStore: 'https://apps.apple.com/app/picpay/id824695593',
        webUrl: 'https://picpay.com'
    },
    {
        name: 'Sicredi',
        scheme: 'sicredi://',
        packageName: 'br.com.sicredi.mobile.cooperado',
        color: 'linear-gradient(135deg, #3EA124, #66BB3F)',
        initials: 'Sic',
        domain: 'sicredi.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.sicredi.mobile.cooperado',
        appStore: 'https://apps.apple.com/app/sicredi/id1108959623',
        webUrl: 'https://www.sicredi.com.br'
    },
    {
        name: 'Sicoob',
        scheme: 'sicoob://',
        packageName: 'br.com.sicoob.coopmobile',
        color: 'linear-gradient(135deg, #00363A, #005F60)',
        initials: 'Sico',
        domain: 'sicoob.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.sicoob.coopmobile',
        appStore: 'https://apps.apple.com/app/sicoob/id1146028271',
        webUrl: 'https://www.sicoob.com.br'
    },
    {
        name: 'BTG Pactual',
        scheme: 'btg://',
        packageName: 'com.btg.pactual.banking',
        color: 'linear-gradient(135deg, #0B2343, #000B1A)',
        initials: 'BTG',
        domain: 'btgpactual.com',
        playStore: 'https://play.google.com/store/apps/details?id=com.btg.pactual.banking',
        appStore: 'https://apps.apple.com/app/btg-pactual/id1113426498',
        webUrl: 'https://www.btgpactual.com'
    },
    {
        name: 'C6 Bank',
        scheme: 'c6bank://',
        packageName: 'com.c6bank.app',
        color: 'linear-gradient(135deg, #1E1E1E, #000000)',
        initials: 'C6',
        domain: 'c6bank.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=com.c6bank.app',
        appStore: 'https://apps.apple.com/app/c6-bank/id1200405240',
        webUrl: 'https://www.c6bank.com.br'
    },
    {
        name: 'Neon',
        scheme: 'neon://',
        packageName: 'br.com.neon',
        color: 'linear-gradient(135deg, #00E5FF, #0055FF)',
        initials: 'Neon',
        domain: 'neon.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.neon',
        appStore: 'https://apps.apple.com/app/neon-conta-digital/id1071413408',
        webUrl: 'https://www.neon.com.br'
    },
    {
        name: 'Next',
        scheme: 'nextbank://',
        packageName: 'br.com.next.app',
        color: 'linear-gradient(135deg, #00FF5F, #000000)',
        initials: 'next',
        domain: 'next.me',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.next.app',
        appStore: 'https://apps.apple.com/app/next-banco-digital/id1254603911',
        webUrl: 'https://next.me'
    },
    {
        name: 'Original',
        scheme: 'bancooriginal://',
        packageName: 'br.com.original.bp',
        color: 'linear-gradient(135deg, #1E3C3E, #2ECC71)',
        initials: 'Orig',
        domain: 'bancooriginal.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.original.bp',
        appStore: 'https://apps.apple.com/app/banco-original/id1107051060',
        webUrl: 'https://www.bancooriginal.com.br'
    },
    {
        name: 'Banrisul',
        scheme: 'banrisul://',
        packageName: 'br.com.banrisul.celsul',
        color: 'linear-gradient(135deg, #00519E, #0076D6)',
        initials: 'Ban',
        domain: 'banrisul.com.br',
        playStore: 'https://play.google.com/store/apps/details?id=br.com.banrisul.celsul',
        appStore: 'https://apps.apple.com/app/banrisul/id1071972384',
        webUrl: 'https://www.banrisul.com.br'
    }
];

// Detecta se o dispositivo é Android, iOS ou desktop
function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(ua);
    const isIOS = /iphone|ipad|ipod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMobile = isAndroid || isIOS;
    return { isAndroid, isIOS, isMobile };
}

function openBankModal() {
    closeAllModals();
    bankModal.classList.add('active');

    // Reset views
    bankLoading.style.display = 'flex';
    bankGrid.style.display = 'none';

    // Simula tempo de detecção com animação
    setTimeout(() => {
        bankLoading.style.display = 'none';
        bankGrid.style.display = 'block';
        renderBankGrid();
    }, 1500);
}

function renderBankGrid() {
    bankGridList.innerHTML = '';
    const { isMobile, isAndroid } = detectPlatform();

    if (isMobile) {
        const platformLabel = isAndroid ? 'Android' : 'iOS';
        bankNotice.innerHTML = `<i class="fas fa-info-circle"></i> Toque no banco para abrir o aplicativo (${platformLabel})`;
        bankNotice.style.background = 'rgba(33, 194, 94, 0.15)';
        bankNotice.style.color = '#21c25e';
        bankNotice.style.borderColor = 'rgba(33, 194, 94, 0.3)';
    } else {
        bankNotice.innerHTML = '<i class="fas fa-info-circle"></i> No computador, você será redirecionado ao site do banco.';
        bankNotice.style.background = 'rgba(255, 193, 7, 0.15)';
        bankNotice.style.color = '#ffc107';
        bankNotice.style.borderColor = 'rgba(255, 193, 7, 0.3)';
    }

    BANKS.forEach(bank => {
        const item = document.createElement('div');
        item.className = 'bank-item';

        item.innerHTML = `
            <div class="bank-icon" style="background: ${bank.color}">
                <img src="https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128"
                     alt="${bank.name}" class="bank-logo-img"
                     onload="this.parentElement.style.background='transparent'; this.parentElement.style.boxShadow='none'; this.nextElementSibling.style.display='none';"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                <span class="bank-initials">${bank.initials}</span>
            </div>
            <div class="bank-name">${bank.name}</div>
        `;

        item.addEventListener('click', () => {
            handleBankRedirect(bank, item);
        });

        bankGridList.appendChild(item);
    });
}

// Copia a chave Pix silenciosamente (sem feedback visual)
function copyPixKeySilent() {
    const pixKey = CONFIG.pixKey;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixKey).catch(() => {});
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = pixKey;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch(e) {}
        document.body.removeChild(textarea);
    }
}

/**
 * Abre o aplicativo bancário ou redireciona para loja/site.
 *
 * Fluxo:
 * 1. Copia a chave Pix para a área de transferência.
 * 2. Android: usa intent:// URI → tenta abrir o app. Se falhar, abre Play Store.
 * 3. iOS: tenta abrir via custom scheme. Se falhar, abre App Store.
 * 4. Desktop: redireciona direto para o site do banco.
 *
 * A detecção de "falha" é feita observando se a janela perdeu foco
 * (indicando que um app externo foi aberto) ou se o timer expirou.
 */
function handleBankRedirect(bank, itemElement) {
    trackEvent('bank_redirect_attempt', { bankName: bank.name });

    // Copia a chave Pix para o clipboard antes de redirecionar
    copyPixKeySilent();

    const { isAndroid, isIOS } = detectPlatform();

    // Estado visual de carregamento no item clicado
    const originalContent = itemElement.innerHTML;
    itemElement.style.opacity = '0.6';
    itemElement.style.pointerEvents = 'none';
    itemElement.innerHTML += '<span class="bank-loading-indicator"><i class="fas fa-spinner fa-spin"></i></span>';

    showToast('Chave Pix copiada! Abrindo banco...', 'success');

    // Registra momento do clique para medir se o app abriu
    const clickTimestamp = Date.now();

    if (isAndroid) {
        openBankAndroid(bank, itemElement, originalContent, clickTimestamp);
    } else if (isIOS) {
        openBankIOS(bank, itemElement, originalContent, clickTimestamp);
    } else {
        openBankDesktop(bank, itemElement, originalContent);
    }
}

/**
 * Android: Utiliza Intent URI para abrir o app bancário.
 * Formato: intent://#Intent;package=<pkg>;scheme=<scheme>;end
 * Se o app não estiver instalado, o Android ignorará o intent silenciosamente.
 * Detectamos isso monitorando foco da janela e timer.
 */
function openBankAndroid(bank, itemElement, originalContent, clickTimestamp) {
    // Constrói a Intent URI corretamente
    const intentUri = `intent://#Intent;package=${bank.packageName};scheme=${bank.scheme.replace('://', '')};end`;

    // Cria iframe invisível para tentar o intent (não redireciona a página)
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    document.body.appendChild(iframe);

    try {
        iframe.src = intentUri;
    } catch(e) {}

    // Também tenta via window.location como alternativa
    setTimeout(() => {
        try {
            window.location.href = intentUri;
        } catch(e) {}
    }, 300);

    // Monitora se a janela perdeu foco (app abriu) ou se o timer expirou
    let appOpened = false;

    const onVisibilityChange = () => {
        if (document.hidden || document.webkitHidden) {
            appOpened = true;
            cleanup();
            restoreItem(itemElement, originalContent);
        }
    };

    const onFocusChange = () => {
        // Se a janela ganhou foco novamente após perder, pode ter voltado do app
        if (appOpened) {
            cleanup();
            restoreItem(itemElement, originalContent);
        }
    };

    const cleanup = () => {
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('blur', onFocusChange);
        clearTimeout(fallbackTimer);
        try { document.body.removeChild(iframe); } catch(e) {}
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onFocusChange);

    // Fallback: se após 2.5s a janela ainda estiver em foco, o app provavelmente não existe
    const fallbackTimer = setTimeout(() => {
        cleanup();

        if (!document.hidden && !document.webkitHidden) {
            // App não abriu — redireciona para a Play Store
            showToast(`${bank.name} não instalado. Abrindo Play Store...`, 'info');
            setTimeout(() => {
                window.open(bank.playStore, '_blank', 'noopener,noreferrer');
                restoreItem(itemElement, originalContent);
            }, 800);
        } else {
            restoreItem(itemElement, originalContent);
        }
    }, 2500);

    // Se em 800ms não perdeu foco, limpa visualmente (o intent pode estar processando)
    setTimeout(() => {
        if (!appOpened) {
            restoreItem(itemElement, originalContent);
        }
    }, 800);
}

/**
 * iOS: Tenta abrir via custom URL scheme (Safari suporta melhor que Chrome).
 * Se o app não estiver instalado, Safari mostrará um alert genérico.
 * Fallback: App Store.
 */
function openBankIOS(bank, itemElement, originalContent, clickTimestamp) {
    // No iOS, tentamos via window.location (Safari trata custom schemes)
    let appOpened = false;

    const onVisibilityChange = () => {
        if (document.hidden || document.webkitHidden) {
            appOpened = true;
            cleanup();
            restoreItem(itemElement, originalContent);
        }
    };

    const onFocusChange = () => {
        if (appOpened) {
            cleanup();
            restoreItem(itemElement, originalContent);
        }
    };

    const cleanup = () => {
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('blur', onFocusChange);
        clearTimeout(fallbackTimer);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onFocusChange);

    // Tenta abrir o app via custom scheme
    try {
        window.location.href = bank.scheme;
    } catch(e) {
        // Se lançar erro, vai direto para o fallback
    }

    // Fallback: se após 2.5s nada aconteceu, vai para a App Store
    const fallbackTimer = setTimeout(() => {
        cleanup();

        if (!document.hidden && !document.webkitHidden) {
            showToast(`${bank.name} não instalado. Abrindo App Store...`, 'info');
            setTimeout(() => {
                window.open(bank.appStore, '_blank', 'noopener,noreferrer');
                restoreItem(itemElement, originalContent);
            }, 800);
        } else {
            restoreItem(itemElement, originalContent);
        }
    }, 2500);

    setTimeout(() => {
        if (!appOpened) {
            restoreItem(itemElement, originalContent);
        }
    }, 800);
}

/**
 * Desktop: Redireciona para o site oficial do banco.
 */
function openBankDesktop(bank, itemElement, originalContent) {
    showToast('Redirecionando para o site do banco...', 'info');
    setTimeout(() => {
        window.open(bank.webUrl, '_blank', 'noopener,noreferrer');
        restoreItem(itemElement, originalContent);
    }, 500);
}

/** Restaura o visual do item bancário após tentativa de abertura */
function restoreItem(itemElement, originalContent) {
    itemElement.style.opacity = '1';
    itemElement.style.pointerEvents = 'auto';
    const indicator = itemElement.querySelector('.bank-loading-indicator');
    if (indicator) indicator.remove();
}

// =====================
// EXPORT FUNCTIONS
// =====================

// These can be used in console or called from HTML
window.copyPixKey = copyPixKey;
window.downloadQRCode = downloadQRCode;
window.shareViaWhatsApp = shareViaWhatsApp;
window.shareViaOther = shareViaOther;
window.trackEvent = trackEvent;
window.openBankModal = openBankModal;
window.getAnalytics = function() {
    return JSON.parse(localStorage.getItem('pageEvents') || '[]');
};

// =====================
// THEME TOGGLE FUNCTION
// =====================
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    const currentTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial state
    if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            trackEvent('theme_changed', { theme: 'light' });
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            trackEvent('theme_changed', { theme: 'dark' });
        }
    });
}

