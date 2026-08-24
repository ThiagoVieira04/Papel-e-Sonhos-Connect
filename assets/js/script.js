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
   2. SERVICES CONFIGURATION
   -------------------------------------------------------------------------- */

const SERVICES = [
    {
        title: 'Papelaria e Encadernação',
        icon: 'fas fa-book',
        items: [
            'Encadernação',
            'Agendas',
            'Cadernetas de vacina',
            'Papelaria personalizada em geral',
            'Cartão de visita',
            'Panfletos',
            'Convites em geral',
            'Necessaires',
            'Bolsinhas',
            'Lembrancinhas',
            'Canecas'
        ]
    },
    {
        title: 'Impressão e Documentos',
        icon: 'fas fa-print',
        items: [
            'Xerox',
            'Impressão',
            'Escaneamento de documentos',
            'Envio de documentos por WhatsApp e e-mail',
            'Boletos',
            'Currículos',
            'Fotos de vários tamanhos'
        ]
    },
    {
        title: 'Personalização',
        icon: 'fas fa-palette',
        items: [
            'Camisas personalizadas',
            'Azulejos personalizados',
            'Adesivos personalizados',
            'Topos de bolo',
            'Banners',
            'Lembrancinhas personalizadas'
        ]
    },
    {
        title: 'Festas e Eventos',
        icon: 'fas fa-glass-cheers',
        items: [
            'Topos de bolo',
            'Lembrancinhas',
            'Papelaria personalizada',
            'Bolsinhas personalizadas',
            'Adesivos',
            'Banners',
            'Convites em geral',
            'Necessaires'
        ]
    },
    {
        title: 'Informática e Tecnologia',
        icon: 'fas fa-laptop-code',
        items: [
            'Consertos de computadores',
            'Consertos de notebooks',
            'Formatação de computadores',
            'Formatação de notebooks',
            'Desenvolvimento de aplicativos'
        ]
    },
    {
        title: 'Serviços para Empresas e MEI',
        icon: 'fas fa-briefcase',
        items: [
            'Abertura de MEI',
            'Declaração de Imposto de Renda',
            'Declaração de Imposto de Renda do MEI',
            'Emissão de certidão negativa estadual',
            'Emissão de certidão negativa federal',
            'Emissão de certidão negativa eleitoral',
            'Cartão de visita',
            'Panfletos'
        ]
    },
    {
        title: 'Serviços de Benefícios',
        icon: 'fas fa-hands-helping',
        items: [
            'Entrada em processos de aposentadoria por idade',
            'Entrada em processos de aposentadoria por tempo de serviço',
            'Auxílio-doença',
            'Entrada em seguro-desemprego',
            'Recuperação de conta GOV'
        ]
    },
    {
        title: 'Áudio e Mídia',
        icon: 'fas fa-headphones',
        items: [
            'Gravação de áudio para propaganda',
            'Músicas para pen drive'
        ]
    }
];

const CATALOG_MEDIA = [
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
    { type: 'image', src: 'assets/media/imagens/img20.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img21.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img22.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img23.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img24.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img25.jpeg' },
    { type: 'image', src: 'assets/media/imagens/img26.jpeg' },
];

/* --------------------------------------------------------------------------
   3. DOM REFERENCES
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
    servicesList: document.getElementById('servicesList'),
};

/* --------------------------------------------------------------------------
   4. INITIALIZATION
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    detectAccessMethod();
    initLogoAnimation();
    renderServices();
    renderCatalog();
    renderTestimonials();
});

/* --------------------------------------------------------------------------
   5. EVENT LISTENERS
   -------------------------------------------------------------------------- */

function initEventListeners() {
    DOM.linkButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    DOM.modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    const mediaViewerClose = document.getElementById('mediaViewerClose');
    if (mediaViewerClose) mediaViewerClose.addEventListener('click', closeAllModals);

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
   6. BUTTON ACTIONS
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
   7. SERVICES & CATALOG
   -------------------------------------------------------------------------- */

function renderServices() {
    const list = DOM.servicesList;
    const header = document.getElementById('servicesHeader');
    const body = document.getElementById('servicesBody');
    const arrow = document.getElementById('servicesArrow');
    if (!list || !header || !body) return;

    SERVICES.forEach(service => {
        const cat = document.createElement('div');
        cat.className = 'service-category';
        cat.innerHTML = `
            <h3 class="service-category-title">
                <i class="${service.icon}"></i> ${service.title}
            </h3>
            <ul class="service-category-items">
                ${service.items.map(item => `
                    <li>
                        <span class="service-item-text">${item}</span>
                        <a class="service-quote-btn" href="https://wa.me/5521987172463?text=${encodeURIComponent('Olá! Gostaria de um orçamento para: ' + item)}" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp"></i> Solicite um orçamento
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        list.appendChild(cat);
    });

    header.addEventListener('click', () => {
        const isOpen = body.classList.contains('open');
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
    });
}

function renderCatalog() {
    const track = document.getElementById('catalogTrack');
    const dotsContainer = document.getElementById('catalogDots');
    const header = document.getElementById('catalogHeader');
    const body = document.getElementById('catalogBody');
    const arrow = document.getElementById('catalogArrow');
    if (!track || !header || !body) return;

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    CATALOG_MEDIA.forEach((media, index) => {
        const slide = document.createElement('div');
        slide.className = 'catalog-slide';
        slide.style.cursor = 'pointer';

        if (media.type === 'video') {
            slide.innerHTML = `<video src="${media.src}" muted loop playsinline preload="metadata"></video>`;
        } else {
            slide.innerHTML = `<img src="${media.src}" alt="Serviço ${index + 1}" loading="lazy">`;
        }

        slide.addEventListener('click', (e) => {
            if (e.target.closest('.video-controls')) return;
            openMediaViewer(media.type, media.src);
        });

        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'catalog-dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const counter = document.createElement('div');
    counter.className = 'catalog-counter';
    counter.textContent = `1 / ${CATALOG_MEDIA.length}`;
    dotsContainer.after(counter);

    function goToSlide(index) {
        const slides = track.querySelectorAll('.catalog-slide');
        const dots = dotsContainer.querySelectorAll('.catalog-dot');

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        pauseAllVideos();
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;

        const activeVideo = slides[currentIndex].querySelector('video');
        if (activeVideo) {
            activeVideo.currentTime = 0;
            activeVideo.play().catch(() => {});
        }
    }

    function pauseAllVideos() {
        track.querySelectorAll('video').forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
    }

    function onDragStart(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentX - startX;
        const offset = -(currentIndex * 100) + (diff / track.offsetWidth * 100);
        track.style.transform = `translateX(${offset}%)`;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2;

        if (diff < -threshold) {
            goToSlide(currentIndex + 1);
        } else if (diff > threshold) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex);
        }
    }

    track.addEventListener('mousedown', onDragStart);
    track.addEventListener('mousemove', onDragMove);
    track.addEventListener('mouseup', onDragEnd);
    track.addEventListener('mouseleave', onDragEnd);

    track.addEventListener('touchstart', onDragStart, { passive: true });
    track.addEventListener('touchmove', onDragMove, { passive: false });
    track.addEventListener('touchend', onDragEnd);

    const prevBtn = document.getElementById('catalogPrev');
    const nextBtn = document.getElementById('catalogNext');

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    goToSlide(0);

    header.addEventListener('click', () => {
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
    });
}

function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialsDots');
    const header = document.getElementById('testimonialsHeader');
    const body = document.getElementById('testimonialsBody');
    const arrow = document.getElementById('testimonialsArrow');
    if (!track || !header || !body) return;

    const media = [
        { type: 'video', src: 'assets/media/videos/video05.mp4' }
    ];

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    media.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'catalog-slide';

        if (item.type === 'video') {
            slide.innerHTML = `
                <div class="video-container">
                    <video src="${item.src}" loop playsinline preload="metadata"></video>
                    <div class="video-controls">
                        <button class="video-btn video-play-btn" title="Play/Pause"><i class="fas fa-play"></i></button>
                        <button class="video-btn video-stop-btn" title="Parar"><i class="fas fa-stop"></i></button>
                        <div class="video-volume-group">
                            <i class="fas fa-volume-up video-volume-icon"></i>
                            <input type="range" class="video-volume" min="0" max="1" step="0.05" value="1">
                        </div>
                    </div>
                </div>`;
        } else {
            slide.innerHTML = `<img src="${item.src}" alt="Depoimento ${index + 1}" loading="lazy">`;
        }

        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'catalog-dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const counter = document.createElement('div');
    counter.className = 'catalog-counter';
    counter.textContent = `1 / ${media.length}`;
    dotsContainer.after(counter);

    function goToSlide(index) {
        const slides = track.querySelectorAll('.catalog-slide');
        const dots = dotsContainer.querySelectorAll('.catalog-dot');

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        pauseAllVideos();
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;

        const activeVideo = slides[currentIndex].querySelector('video');
        if (activeVideo) {
            activeVideo.currentTime = 0;
            activeVideo.play().catch(() => {});
        }
    }

    function pauseAllVideos() {
        track.querySelectorAll('video').forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
    }

    function onDragStart(e) {
        if (e.target.closest('.video-controls')) return;
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentX - startX;
        const offset = -(currentIndex * 100) + (diff / track.offsetWidth * 100);
        track.style.transform = `translateX(${offset}%)`;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2;

        if (diff < -threshold) {
            goToSlide(currentIndex + 1);
        } else if (diff > threshold) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex);
        }
    }

    track.addEventListener('mousedown', onDragStart);
    track.addEventListener('mousemove', onDragMove);
    track.addEventListener('mouseup', onDragEnd);
    track.addEventListener('mouseleave', onDragEnd);

    track.addEventListener('touchstart', onDragStart, { passive: true });
    track.addEventListener('touchmove', onDragMove, { passive: false });
    track.addEventListener('touchend', onDragEnd);

    const prevBtn = document.getElementById('testimonialsPrev');
    const nextBtn = document.getElementById('testimonialsNext');

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    goToSlide(0);

    track.querySelectorAll('.video-container').forEach(vc => {
        const video = vc.querySelector('video');
        const playBtn = vc.querySelector('.video-play-btn');
        const stopBtn = vc.querySelector('.video-stop-btn');
        const volumeSlider = vc.querySelector('.video-volume');
        const volumeIcon = vc.querySelector('.video-volume-icon');

        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play().catch(() => {});
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        stopBtn.addEventListener('click', () => {
            video.pause();
            video.currentTime = 0;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        });

        volumeSlider.addEventListener('input', () => {
            video.volume = volumeSlider.value;
            video.muted = false;
            if (video.volume === 0) {
                volumeIcon.className = 'fas fa-volume-mute video-volume-icon';
            } else if (video.volume < 0.5) {
                volumeIcon.className = 'fas fa-volume-down video-volume-icon';
            } else {
                volumeIcon.className = 'fas fa-volume-up video-volume-icon';
            }
        });

        volumeIcon.addEventListener('click', () => {
            video.muted = !video.muted;
            if (video.muted) {
                volumeIcon.className = 'fas fa-volume-mute video-volume-icon';
                volumeSlider.value = 0;
            } else {
                volumeIcon.className = 'fas fa-volume-up video-volume-icon';
                volumeSlider.value = video.volume;
            }
        });

        video.addEventListener('ended', () => {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
    });

    header.addEventListener('click', () => {
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
    });
}

/* --------------------------------------------------------------------------
   8. CLIPBOARD
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
        if (successMsg) showSuccessMessage(successMsg);
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
   9. MODALS
   -------------------------------------------------------------------------- */

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    const viewer = document.getElementById('mediaViewerContent');
    if (viewer) {
        viewer.innerHTML = '';
        viewer.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
    }
}

function openMediaViewer(type, src) {
    const modal = document.getElementById('mediaViewerModal');
    const content = document.getElementById('mediaViewerContent');
    if (!modal || !content) return;

    content.innerHTML = '';
    closeAllModals();

    if (type === 'video') {
        content.innerHTML = `<video src="${src}" controls autoplay playsinline style="max-width:90vw;max-height:85vh;border-radius:12px;"></video>`;
    } else {
        content.innerHTML = `<img src="${src}" style="max-width:90vw;max-height:85vh;border-radius:12px;object-fit:contain;">`;
    }

    modal.classList.add('active');
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
   10. QR CODE
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
   11. WIFI
   -------------------------------------------------------------------------- */

function openWifiSettings() {
    copyWifiPassword();
    trackEvent('wifi_connect_clicked', {});

    const { isAndroid, isIOS } = detectPlatform();

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
   12. BANK SELECTOR
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
        fallbackCopy(CONFIG.pixKey, null);
    }
}

/* --------------------------------------------------------------------------
   13. THEME
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
   14. NOTIFICATIONS
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
   15. ANALYTICS
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
   16. LOGO ANIMATION
   -------------------------------------------------------------------------- */

function initLogoAnimation() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    logo.addEventListener('animationend', (e) => {
        if (e.animationName === 'logoEntrance') {
            logo.classList.add('loaded');
        }
    });
}

/* --------------------------------------------------------------------------
   17. EXPORTS (for external access if needed)
   -------------------------------------------------------------------------- */

window.copyPixKey = copyPixKey;
window.downloadQRCode = downloadQRCode;
window.trackEvent = trackEvent;
window.getAnalytics = () => JSON.parse(localStorage.getItem('pageEvents') || '[]');
