/* ==========================================================================
   PAPEL E SONHOS INFORMÁTICA - JavaScript
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURATION
   -------------------------------------------------------------------------- */

const CONFIG = {
    pixKey: '+5521987172463',
    whatsappPhone: '5521987172463',
    googleReviewUrl: 'https://g.page/r/CXUQrjKh4lJtEAE/review',
    instagramUrl: 'https://www.instagram.com/papel_e_sonhos0504/',
    facebookUrl: 'https://www.facebook.com/biancathiago0504',
    pageUrl: 'https://papel-e-sonhos-connect.vercel.app/',
    wifiPassword: 't04101986',
    wifiSSID: 'TSDINFORMATICA',
};

/* --------------------------------------------------------------------------
   1b. MEDIA GALLERY CONFIGURATION
   -------------------------------------------------------------------------- */

const MEDIA_GALLERY = {
    imageDuration: 5000,
    videoMaxDuration: 15000,
    transitionDuration: 1500,
    media: [
        { type: 'image', src: 'assets/media/imagens/img01.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img02.jpeg' },
        { type: 'video', src: 'assets/media/videos/video01.mp4' },
        { type: 'image', src: 'assets/media/imagens/img03.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img04.jpeg' },
        { type: 'video', src: 'assets/media/videos/video02.mp4' },
        { type: 'image', src: 'assets/media/imagens/img05.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img06.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img07.jpeg' },
        { type: 'video', src: 'assets/media/videos/video03.mp4' },
        { type: 'image', src: 'assets/media/imagens/img08.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img09.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img10.jpeg' },
        { type: 'video', src: 'assets/media/videos/video04.mp4' },
        { type: 'image', src: 'assets/media/imagens/img11.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img12.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img13.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img14.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img15.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img16.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img17.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img18.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img19.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img20.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img21.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img22.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img23.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img24.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img25.jpeg' },
        { type: 'image', src: 'assets/media/imagens/img26.jpeg' },
    ],
};

const BANKS = [
    { name: 'Nubank', scheme: 'nubank://', intent: 'intent://open#Intent;scheme=nubank;package=com.nu.production;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nu.production;end', playStore: 'https://play.google.com/store/apps/details?id=com.nu.production', appStore: 'https://apps.apple.com/app/nubank/id1093127969', color: 'linear-gradient(135deg, #820AD1, #530082)', initials: 'Nu', domain: 'nubank.com.br' },
    { name: 'Itaú', scheme: 'itau://', intent: 'intent://open#Intent;scheme=itau;package=com.itau;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.itau;end', playStore: 'https://play.google.com/store/apps/details?id=com.itau', appStore: 'https://apps.apple.com/app/itau-personal/id577039602', color: 'linear-gradient(135deg, #FF7A00, #EC5E00)', initials: 'Itaú', domain: 'itau.com.br' },
    { name: 'Bradesco', scheme: 'bradesco://', intent: 'intent://open#Intent;scheme=bradesco;package=com.bradesco;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.bradesco;end', playStore: 'https://play.google.com/store/apps/details?id=com.bradesco', appStore: 'https://apps.apple.com/app/bradesco/id491002437', color: 'linear-gradient(135deg, #CC092F, #E60042)', initials: 'Brad', domain: 'bradesco.com.br' },
    { name: 'Banco do Brasil', scheme: 'bb://', intent: 'intent://open#Intent;scheme=bb;package=br.com.bb.android;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.bb.android;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.bb.android', appStore: 'https://apps.apple.com/app/banco-do-brasil/id495409822', color: 'linear-gradient(135deg, #F2E307, #003399)', initials: 'BB', domain: 'bb.com.br' },
    { name: 'Caixa', scheme: 'caixa://', intent: 'intent://open#Intent;scheme=caixa;package=br.com.gabba.Caixa;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.gabba.Caixa;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.gabba.Caixa', appStore: 'https://apps.apple.com/app/caixa/id481950320', color: 'linear-gradient(135deg, #005CA9, #F58220)', initials: 'CX', domain: 'caixa.gov.br' },
    { name: 'Santander', scheme: 'santander://', intent: 'intent://open#Intent;scheme=santander;package=com.santander.app;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.santander.app;end', playStore: 'https://play.google.com/store/apps/details?id=com.santander.app', appStore: 'https://apps.apple.com/app/santander/id462668768', color: 'linear-gradient(135deg, #EC0000, #B30000)', initials: 'San', domain: 'santander.com.br' },
    { name: 'Inter', scheme: 'bancointer://', intent: 'intent://open#Intent;scheme=bancointer;package=br.com.intermedium;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.intermedium;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.intermedium', appStore: 'https://apps.apple.com/app/inter/id894478706', color: 'linear-gradient(135deg, #FF7A00, #FF5500)', initials: 'Inter', domain: 'bancointer.com.br' },
    { name: 'PagBank', scheme: 'pagseguro://', intent: 'intent://open#Intent;scheme=pagseguro;package=br.com.pagseguro.app;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.pagseguro.app;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.pagseguro.app', appStore: 'https://apps.apple.com/app/pagbank/id850697945', color: 'linear-gradient(135deg, #00C69E, #BFE02C)', initials: 'Pag', domain: 'pagseguro.com.br' },
    { name: 'Mercado Pago', scheme: 'mercadopago://', intent: 'intent://open#Intent;scheme=mercadopago;package=com.mercadopago.wallet;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.mercadopago.wallet;end', playStore: 'https://play.google.com/store/apps/details?id=com.mercadopago.wallet', appStore: 'https://apps.apple.com/app/mercado-pago/id931241885', color: 'linear-gradient(135deg, #00B1EA, #00A650)', initials: 'MP', domain: 'mercadopago.com.br' },
    { name: 'PicPay', scheme: 'picpay://', intent: 'intent://open#Intent;scheme=picpay;package=com.picpay;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.picpay;end', playStore: 'https://play.google.com/store/apps/details?id=com.picpay', appStore: 'https://apps.apple.com/app/picpay/id822207724', color: 'linear-gradient(135deg, #21C25E, #117F3D)', initials: 'Pic', domain: 'picpay.com' },
    { name: 'Sicredi', scheme: 'sicredi://', intent: 'intent://open#Intent;scheme=sicredi;package=br.com.sicredi.mobile.cooperado;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.sicredi.mobile.cooperado;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.sicredi.mobile.cooperado', appStore: 'https://apps.apple.com/app/sicredi/id493129390', color: 'linear-gradient(135deg, #3EA124, #66BB3F)', initials: 'Sic', domain: 'sicredi.com.br' },
    { name: 'Sicoob', scheme: 'sicoob://', intent: 'intent://open#Intent;scheme=sicoob;package=br.com.sicoob.coopmobile;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.sicoob.coopmobile;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.sicoob.coopmobile', appStore: 'https://apps.apple.com/app/sicoob/id1102344425', color: 'linear-gradient(135deg, #00363A, #005F60)', initials: 'Sic', domain: 'sicoob.com.br' },
    { name: 'BTG Pactual', scheme: 'btg://', intent: 'intent://open#Intent;scheme=btg;package=com.btg.pactual.banking;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.btg.pactual.banking;end', playStore: 'https://play.google.com/store/apps/details?id=com.btg.pactual.banking', appStore: 'https://apps.apple.com/app/btg-pactual/id999475586', color: 'linear-gradient(135deg, #0B2343, #000B1A)', initials: 'BTG', domain: 'btgpactual.com' },
    { name: 'C6 Bank', scheme: 'c6bank://', intent: 'intent://open#Intent;scheme=c6bank;package=com.c6bank.app;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.c6bank.app;end', playStore: 'https://play.google.com/store/apps/details?id=com.c6bank.app', appStore: 'https://apps.apple.com/app/c6-bank/id1448835276', color: 'linear-gradient(135deg, #1E1E1E, #000)', initials: 'C6', domain: 'c6bank.com.br' },
    { name: 'Neon', scheme: 'neon://', intent: 'intent://open#Intent;scheme=neon;package=br.com.neon;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.neon;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.neon', appStore: 'https://apps.apple.com/app/neon-cart%C3%A3o/id1163016100', color: 'linear-gradient(135deg, #00E5FF, #0055FF)', initials: 'Neon', domain: 'neon.com.br' },
    { name: 'Original', scheme: 'bancooriginal://', intent: 'intent://open#Intent;scheme=bancooriginal;package=br.com.original.bp;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.original.bp;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.original.bp', appStore: 'https://apps.apple.com/app/banco-original/id1159371498', color: 'linear-gradient(135deg, #1E3C3E, #2ECC71)', initials: 'Orig', domain: 'bancooriginal.com.br' },
    { name: 'Banrisul', scheme: 'banrisul://', intent: 'intent://open#Intent;scheme=banrisul;package=br.com.banrisul.celsul;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.banrisul.celsul;end', playStore: 'https://play.google.com/store/apps/details?id=br.com.banrisul.celsul', appStore: 'https://apps.apple.com/app/banrisul/id490488591', color: 'linear-gradient(135deg, #00519E, #0076D6)', initials: 'Ban', domain: 'banrisul.com.br' },
];

/* --------------------------------------------------------------------------
   2. DOM REFERENCES
   -------------------------------------------------------------------------- */

const DOM = {
    pixModal: document.getElementById('pixModal'),
    qrcodeModal: document.getElementById('qrcodeModal'),
    wifiModal: document.getElementById('wifiModal'),
    bankModal: document.getElementById('bankModal'),
    linkButtons: document.querySelectorAll('.link-button'),
    modalCloseButtons: document.querySelectorAll('.modal-close'),
    copyPixBtn: document.getElementById('copyPixBtn'),
    downloadQRBtn: document.getElementById('downloadQRBtn'),
    copyWifiBtn: document.getElementById('copyWifiBtn'),
    connectWifiBtn: document.getElementById('connectWifiBtn'),
    openBankBtn: document.getElementById('openBankBtn'),
    successMessage: document.getElementById('successMessage'),
    successText: document.getElementById('successText'),
    toast: document.getElementById('toast'),
    bankLoading: document.getElementById('bankLoading'),
    bankGrid: document.getElementById('bankGrid'),
    bankGridList: document.getElementById('bankGridList'),
    bankNotice: document.getElementById('bankNotice'),
    themeToggle: document.getElementById('themeToggle'),
};

/* --------------------------------------------------------------------------
   3. INITIALIZATION
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    detectAccessMethod();
    initMediaGallery();
});

/* --------------------------------------------------------------------------
   4. EVENT LISTENERS
   -------------------------------------------------------------------------- */

function initEventListeners() {
    DOM.linkButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    DOM.modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });

    if (DOM.copyPixBtn) DOM.copyPixBtn.addEventListener('click', copyPixKey);
    if (DOM.downloadQRBtn) DOM.downloadQRBtn.addEventListener('click', downloadQRCode);
    if (DOM.copyWifiBtn) DOM.copyWifiBtn.addEventListener('click', copyWifiPassword);
    if (DOM.connectWifiBtn) DOM.connectWifiBtn.addEventListener('click', openWifiSettings);
    if (DOM.openBankBtn) DOM.openBankBtn.addEventListener('click', openBankModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}

/* --------------------------------------------------------------------------
   5. BUTTON ACTIONS
   -------------------------------------------------------------------------- */

function handleButtonClick(e) {
    const button = e.currentTarget;
    const action = button.dataset.action;
    const link = button.dataset.link;

    const actions = {
        'open-link': () => openLink(link),
        'pix-modal': () => openPixModal(),
        'qrcode-modal': () => openQRCodeModal(),
        'wifi-modal': () => openWiFiModal(),
    };

    if (actions[action]) actions[action]();
}

function openLink(url) {
    if (!url) {
        showToast('Link não configurado', 'error');
        return;
    }
    trackEvent('link_click', { url });
    window.open(url, '_blank', 'noopener,noreferrer');
}

/* --------------------------------------------------------------------------
   6. CLIPBOARD
   -------------------------------------------------------------------------- */

function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).then(() => {
            showSuccessMessage(successMsg);
            return true;
        }).catch(() => fallbackCopy(text, successMsg));
    }
    return Promise.resolve(fallbackCopy(text, successMsg));
}

function fallbackCopy(text, successMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showSuccessMessage(successMsg);
        return true;
    } catch {
        showToast('Erro ao copiar', 'error');
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

function copyPixKey() {
    copyToClipboard(CONFIG.pixKey, 'Chave Pix copiada!').then(() => {
        updateButtonLabel(DOM.copyPixBtn, 'Copiado!', '<i class="fas fa-copy"></i> Copiar');
        trackEvent('pix_key_copied', {});
    });
}

function copyWifiPassword() {
    copyToClipboard(CONFIG.wifiPassword, 'Senha copiada!').then(() => {
        updateButtonLabel(DOM.copyWifiBtn, 'Copiado!', '<i class="fas fa-copy"></i> Copiar');
    });
}

function updateButtonLabel(btn, tempText, restoreHTML) {
    if (!btn) return;
    btn.innerHTML = `<i class="fas fa-check"></i> ${tempText}`;
    setTimeout(() => { btn.innerHTML = restoreHTML; }, 2000);
}

/* --------------------------------------------------------------------------
   7. MODALS
   -------------------------------------------------------------------------- */

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function scrollToTop() {
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function openPixModal() {
    closeAllModals();
    DOM.pixModal.classList.add('active');
    scrollToTop();
}

function openQRCodeModal() {
    closeAllModals();
    DOM.qrcodeModal.classList.add('active');
    generateQRCode();
    scrollToTop();
}

function openWiFiModal() {
    closeAllModals();
    DOM.wifiModal.classList.add('active');
    scrollToTop();
}

function openBankModal() {
    closeAllModals();
    DOM.bankModal.classList.add('active');
    DOM.bankLoading.style.display = 'flex';
    DOM.bankGrid.style.display = 'none';

    setTimeout(() => {
        DOM.bankLoading.style.display = 'none';
        DOM.bankGrid.style.display = 'block';
        renderBankGrid();
    }, 1500);
}

/* --------------------------------------------------------------------------
   8. QR CODE
   -------------------------------------------------------------------------- */

function generateQRCode() {
    const container = document.getElementById('pageQRCode');
    container.innerHTML = '';
    const url = CONFIG.pageUrl || window.location.href;

    try {
        new QRCode(container, {
            text: url,
            width: 200,
            height: 200,
            colorDark: '#0a2463',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    } catch {
        container.innerHTML = '<p style="color:#d32f2f">Erro ao gerar QR Code</p>';
    }
}

function downloadQRCode() {
    const canvas = document.querySelector('#pageQRCode canvas');
    if (!canvas) {
        showToast('QR Code não gerado', 'error');
        return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'papel-e-sonhos-qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showSuccessMessage('QR Code baixado!');
    trackEvent('qrcode_downloaded', {});
}

/* --------------------------------------------------------------------------
   9. WIFI
   -------------------------------------------------------------------------- */

function openWifiSettings() {
    copyWifiPassword();
    trackEvent('wifi_connect_clicked', {});

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(ua);
    const isIOS = /iphone|ipad|ipod/.test(ua);

    if (isAndroid) {
        window.location.href = 'intent://wifi#Intent;action=android.settings.WIFI_SETTINGS;end';
    } else if (isIOS) {
        showToast('Abrindo Ajustes... Selecione "Wi-Fi" na lista.', 'info');
        window.location.href = 'app-settings:';
    } else {
        showToast('Configuração de Wi-Fi disponível apenas em dispositivos móveis.', 'info');
    }
}

/* --------------------------------------------------------------------------
   10. BANK SELECTOR
   -------------------------------------------------------------------------- */

function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    return {
        isAndroid: /android/.test(ua),
        isIOS: /iphone|ipad|ipod/.test(ua),
    };
}

function renderBankGrid() {
    DOM.bankGridList.innerHTML = '';
    const { isAndroid, isIOS } = detectPlatform();
    const isMobile = isAndroid || isIOS;

    updateBankNotice(isMobile);

    BANKS.forEach(bank => {
        const item = document.createElement('div');
        item.className = 'bank-item';
        item.innerHTML = `
            <div class="bank-icon" style="background:${bank.color}">
                <img src="https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128"
                     alt="${bank.name}" class="bank-logo-img"
                     onload="this.parentElement.style.background='transparent';this.parentElement.style.boxShadow='none';this.nextElementSibling.style.display='none'"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <span class="bank-initials">${bank.initials}</span>
            </div>
            <div class="bank-name">${bank.name}</div>
        `;
        item.addEventListener('click', () => handleBankRedirect(bank));
        DOM.bankGridList.appendChild(item);
    });
}

function updateBankNotice(isMobile) {
    if (isMobile) {
        DOM.bankNotice.innerHTML = '<i class="fas fa-info-circle"></i> Toque em um banco para abrir o app. A chave Pix será copiada automaticamente.';
        DOM.bankNotice.style.cssText = 'background:rgba(33,194,94,0.15);color:#21c25e;border-color:rgba(33,194,94,0.3)';
    } else {
        DOM.bankNotice.innerHTML = '<i class="fas fa-info-circle"></i> No celular, o app abre direto. Aqui você será redirecionado ao site do banco.';
        DOM.bankNotice.style.cssText = 'background:rgba(255,193,7,0.15);color:#ffc107;border-color:rgba(255,193,7,0.3)';
    }
}

function handleBankRedirect(bank) {
    trackEvent('bank_redirect_attempt', { bankName: bank.name });
    const { isAndroid, isIOS } = detectPlatform();

    copyPixKeySilent();
    showToast(`Chave Pix copiada! Abrindo ${bank.name}...`, 'success');
    setTimeout(closeAllModals, 300);

    if (isAndroid) {
        triggerIntent(bank.intent);
    } else if (isIOS) {
        triggerIntent(bank.scheme);
    } else {
        window.location.href = bank.scheme;
        setTimeout(() => {
            if (document.visibilityState === 'visible') {
                window.location.href = bank.playStore;
            }
        }, 2000);
    }
}

function triggerIntent(url) {
    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function copyPixKeySilent() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONFIG.pixKey).catch(() => {});
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = CONFIG.pixKey;
        textarea.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(textarea);
        textarea.select();
        try { document.execCommand('copy'); } catch {}
        document.body.removeChild(textarea);
    }
}

/* --------------------------------------------------------------------------
   11. THEME
   -------------------------------------------------------------------------- */

function initTheme() {
    const btn = DOM.themeToggle;
    if (!btn) return;

    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');

    btn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const btn = DOM.themeToggle;
    const isDark = document.body.classList.contains('dark-theme');

    document.body.classList.toggle('dark-theme', !isDark);
    document.body.classList.toggle('light-theme', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    trackEvent('theme_changed', { theme: isDark ? 'light' : 'dark' });
}

/* --------------------------------------------------------------------------
   12. NOTIFICATIONS
   -------------------------------------------------------------------------- */

function showSuccessMessage(text) {
    DOM.successText.textContent = text;
    DOM.successMessage.classList.add('show');
    setTimeout(() => DOM.successMessage.classList.remove('show'), 3000);
}

function showToast(message, type = 'info') {
    DOM.toast.textContent = message;
    DOM.toast.className = `toast show ${type}`;
    setTimeout(() => DOM.toast.classList.remove('show'), 3000);
}

/* --------------------------------------------------------------------------
   13. ANALYTICS
   -------------------------------------------------------------------------- */

function trackEvent(eventName, eventData = {}) {
    console.log('Event:', eventName, eventData);

    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }

    const events = JSON.parse(localStorage.getItem('pageEvents') || '[]');
    events.push({ name: eventName, data: eventData, timestamp: new Date().toISOString() });

    if (events.length > 50) events.shift();
    localStorage.setItem('pageEvents', JSON.stringify(events));
}

function detectAccessMethod() {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');

    if (source === 'nfc' || source === 'qrcode') {
        trackEvent('page_access', { method: source });
    }
}

/* --------------------------------------------------------------------------
   14. MEDIA GALLERY
   -------------------------------------------------------------------------- */

let galleryState = {
    currentIndex: 0,
    items: [],
    timer: null,
    isPaused: false,
};

function initMediaGallery() {
    const gallery = document.getElementById('mediaGallery');
    if (!gallery || !MEDIA_GALLERY.media.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    MEDIA_GALLERY.media.forEach((media, index) => {
        const item = document.createElement('div');
        item.className = 'media-item';
        item.setAttribute('aria-hidden', 'true');

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src;
            video.muted = true;
            video.loop = false;
            video.playsInline = true;
            video.preload = index < 2 ? 'auto' : 'metadata';
            video.setAttribute('aria-hidden', 'true');

            video.addEventListener('ended', () => {
                advanceGallery();
            });

            video.addEventListener('error', () => {
                advanceGallery();
            });

            item.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = media.src;
            img.alt = '';
            img.loading = index < 3 ? 'eager' : 'lazy';
            img.setAttribute('aria-hidden', 'true');

            img.addEventListener('error', () => {
                advanceGallery();
            });

            item.appendChild(img);
        }

        gallery.appendChild(item);
        galleryState.items.push(item);
    });

    if (galleryState.items.length > 0) {
        showMedia(0);
        scheduleNext();
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseGallery();
        } else {
            resumeGallery();
        }
    });
}

function showMedia(index) {
    galleryState.items.forEach((item, i) => {
        item.classList.remove('active');
        const video = item.querySelector('video');
        if (video) {
            if (i !== index) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });

    const activeItem = galleryState.items[index];
    if (!activeItem) return;

    activeItem.classList.add('active');
    const video = activeItem.querySelector('video');

    if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise) {
            playPromise.catch(() => {});
        }
    }
}

function advanceGallery() {
    if (galleryState.isPaused) return;

    const nextIndex = (galleryState.currentIndex + 1) % galleryState.items.length;
    galleryState.currentIndex = nextIndex;
    showMedia(nextIndex);
    scheduleNext();
}

function scheduleNext() {
    clearTimeout(galleryState.timer);

    const currentMedia = MEDIA_GALLERY.media[galleryState.currentIndex];
    let duration;

    if (currentMedia.type === 'video') {
        duration = MEDIA_GALLERY.videoMaxDuration;
    } else {
        duration = MEDIA_GALLERY.imageDuration;
    }

    galleryState.timer = setTimeout(advanceGallery, duration);
}

function pauseGallery() {
    galleryState.isPaused = true;
    clearTimeout(galleryState.timer);

    const activeItem = galleryState.items[galleryState.currentIndex];
    if (activeItem) {
        const video = activeItem.querySelector('video');
        if (video) video.pause();
    }
}

function resumeGallery() {
    galleryState.isPaused = false;

    const activeItem = galleryState.items[galleryState.currentIndex];
    if (activeItem) {
        const video = activeItem.querySelector('video');
        if (video) {
            const playPromise = video.play();
            if (playPromise) {
                playPromise.catch(() => {});
            }
        }
    }

    scheduleNext();
}

/* --------------------------------------------------------------------------
   15. EXPORTS (for external access if needed)
   -------------------------------------------------------------------------- */

window.copyPixKey = copyPixKey;
window.downloadQRCode = downloadQRCode;
window.trackEvent = trackEvent;
window.getAnalytics = () => JSON.parse(localStorage.getItem('pageEvents') || '[]');
