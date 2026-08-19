// ==========================================
// PAPEL E SONHOS INFORMÁTICA - SCRIPT PRINCIPAL
// Bio + Catálogo Commercial + Orçamento WhatsApp
// ==========================================

const CONFIG = {
    whatsappPhone: '5521987172463',
    whatsappFormatted: '+55 21 98717-2463',
    pixKey: '+5521987172463',
    pixOwner: 'Thiago Samuel',
    pixBank: 'PagSeguro',
    googleReviewUrl: 'https://g.page/r/CXUQrjKh4lJtEAE/review',
    instagramUrl: 'https://www.instagram.com/papel_e_sonhos0504/',
    facebookUrl: 'https://www.facebook.com/biancathiago0504',
    locationUrl: 'https://maps.app.goo.gl/gK2X9JmyqhsShQe49',
    pageUrl: 'https://papel-e-sonhos-connect.vercel.app/'
};

// ==========================================
// CATÁLOGO DE SERVIÇOS (ESTRUTURA JS ESTRUTURADA)
// ==========================================

const CATEGORIES_DATA = {
    documentos: {
        id: 'documentos',
        title: 'Documentos & Serviços Online',
        icon: 'fa-file-contract',
        badge: 'Praticidade Digital',
        description: 'Resolva seus documentos, certidões e serviços digitais com rapidez e praticidade sem sair de casa.'
    },
    impressao: {
        id: 'impressao',
        title: 'Impressão & Papelaria',
        icon: 'fa-print',
        badge: 'Qualidade Gráfica',
        description: 'Impressões em alta definição, cópias, encadernações, adesivos e itens essenciais de papelaria.'
    },
    personalizados: {
        id: 'personalizados',
        title: 'Personalizados & Presentes',
        icon: 'fa-gift',
        badge: 'Exclusivo para Você',
        description: 'Transforme ideias, imagens e frases em presentes inesquecíveis, canecas, camisas e brindes marcantes.'
    },
    informatica: {
        id: 'informatica',
        title: 'Informática & Suporte',
        icon: 'fa-laptop-code',
        badge: 'Assistência Técnica',
        description: 'Manutenção, formatação, configuração de equipamentos, rede e suporte técnico especializado.'
    }
};

const SERVICES_DATA = [
    // --- DOCUMENTOS & SERVIÇOS ONLINE ---
    {
        id: 'curriculos',
        category: 'documentos',
        name: 'Elaboração de Currículos',
        shortDescription: 'Currículos profissionais e modernos formatados para destacar suas habilidades.',
        description: 'Elaboração e atualização de currículos com layout profissional e atrativo para processos seletivos. Entrega em PDF e cópia impressa se desejar.',
        benefits: ['Layout moderno e legível', 'Destaque de competências', 'Pronto para enviar por e-mail/WhatsApp ou imprimir'],
        price: 'A partir de R$ 15,00',
        icon: 'fa-file-invoice',
        featured: true
    },
    {
        id: 'recuperacao-gov',
        category: 'documentos',
        name: 'Recuperação de Conta Gov.br',
        shortDescription: 'Recupere o acesso à sua conta Gov.br com total segurança e agilidade.',
        description: 'Auxílio especializado para desbloquear, redefinir senhas e nivelar a conta Gov.br (Prata/Ouro) para acesso a serviços federais.',
        benefits: ['Processo 100% seguro', 'Resolução rápida', 'Acesso garantido aos portais oficiais'],
        price: 'Sob consulta',
        icon: 'fa-user-shield',
        featured: true
    },
    {
        id: 'imposto-renda',
        category: 'documentos',
        name: 'Declaração de Imposto de Renda',
        shortDescription: 'Envio e regularização do seu Imposto de Renda sem complicações.',
        description: 'Auxílio completo para preenchimento e transmissão da declaração IRPF, evitando pendências com a Receita Federal.',
        benefits: ['Evita malha fina', 'Conferência detalhada', 'Comprovante emitido na hora'],
        price: 'Sob consulta',
        icon: 'fa-calculator',
        featured: false
    },
    {
        id: 'declaração-mei',
        category: 'documentos',
        name: 'Declaração e Abertura de MEI',
        shortDescription: 'Abertura, DAS mensal, declaração anual (DASN) e regularização para Microempreendedores.',
        description: 'Serviço especializado para abrir seu MEI, emitir guia DAS, transmitir a declaração anual obrigatoria e manter seu CNPJ em dia.',
        benefits: ['CNPJ ativo e regularizado', 'Suporte a dúvidas', 'Emissão de DAS rápida'],
        price: 'Sob consulta',
        icon: 'fa-briefcase',
        featured: false
    },
    {
        id: 'certidoes',
        category: 'documentos',
        name: 'Emissão de Certidões',
        shortDescription: 'Certidões negativas, quitar débitos, certidão de nascimento/casamento/antecedentes.',
        description: 'Emissão e busca de certidões da Justiça, Receita Federal, Polícia Federal e órgãos estaduais/municipais.',
        benefits: ['Agilidade e praticidade', 'Arquivos em PDF prontos para uso'],
        price: 'Sob consulta',
        icon: 'fa-certificate',
        featured: false
    },
    {
        id: 'inss-servicos',
        category: 'documentos',
        name: 'Serviços INSS & Auxílios',
        shortDescription: 'Agendamentos, extratos de pagamento, consulta de benefícios e seguro-desemprego.',
        description: 'Auxílio digital para agendamento no INSS, requisição de auxílio-doença, seguro-desemprego e consulta ao Meu INSS.',
        benefits: ['Orientação clara', 'Sem necessidade de encarar filas'],
        price: 'Sob consulta',
        icon: 'fa-hands-holding-circle',
        featured: false
    },
    {
        id: 'digitalizacao-boletos',
        category: 'documentos',
        name: 'Digitalização & 2ª Via de Boletos',
        shortDescription: 'Digitalização de documentos físicos para PDF e emissão de 2ª via de contas.',
        description: 'Escanear fotos/documentos com alta nitidez e emitir 2ª via de luz, água, telefone e boletos bancários.',
        benefits: ['PDFs nítidos e organizados', 'Pagamento facilitado'],
        price: 'A partir de R$ 2,00',
        icon: 'fa-scanner-keyboard',
        featured: false
    },

    // --- IMPRESSÃO & PAPELARIA ---
    {
        id: 'xerox-impressao',
        category: 'impressao',
        name: 'Impressão & Xerox',
        shortDescription: 'Impressões em preto e branco e coloridas de altíssima definição.',
        description: 'Impressão de trabalhos escolares, apostilas, documentos, fotos e contratos com papel de gramatura ideal e cores vivas.',
        benefits: ['Papel de excelente qualidade', 'Opção P&B ou Colorido', 'Desconto para grande quantidade'],
        price: 'A partir de R$ 0,50',
        icon: 'fa-print',
        featured: true
    },
    {
        id: 'foto-3x4',
        category: 'impressao',
        name: 'Foto 3x4 na Hora',
        shortDescription: 'Fotos para documentos, carteiras e passaportes com impressão fotográfica.',
        description: 'Tire sua foto 3x4 no local com iluminação adequada e tratamento leve, pronta para uso imediato em documentos.',
        benefits: ['Pronta na hora', 'Papel fotográfico de alto brilho', 'Recorte preciso'],
        price: 'R$ 15,00 (Kit 4 fotos)',
        icon: 'fa-id-card',
        featured: true
    },
    {
        id: 'encadernacao-plastificacao',
        category: 'impressao',
        name: 'Encadernação & Plastificação',
        shortDescription: 'Organize e proteja seus documentos, apostilas e certidões com acabamento durável.',
        description: 'Encadernação em espiral para cadernos/trabalhos e plastificação polaseal transparente e resistente.',
        benefits: ['Protege contra água e rasgões', 'Capa transparente e contra-capa resistente'],
        price: 'A partir de R$ 5,00',
        icon: 'fa-book-open',
        featured: false
    },
    {
        id: 'agendas-cadernetas',
        category: 'impressao',
        name: 'Agendas & Cadernetas de Vacina',
        shortDescription: 'Cadernetas de vacinação infantil personalizadas e agendas corporativas/pessoais.',
        description: 'Confecção e reforma de cadernetas de saúde com capa dura personalizada, bolso interno e páginas oficiais do SUS.',
        benefits: ['Capa dura com laminação', 'Nome e tema à sua escolha', 'Alta durabilidade'],
        price: 'Sob consulta',
        icon: 'fa-book-bookmark',
        featured: false
    },
    {
        id: 'banners-adesivos',
        category: 'impressao',
        name: 'Banners & Adesivos',
        shortDescription: 'Banners em lona com bastão e adesivos em vinil ou papel para eventos e marcas.',
        description: 'Impressão comercial em grande formato. Banners promocionais, lonas para eventos e adesivos recortados.',
        benefits: ['Resistente a ambientes internos e externos', 'Cores vibrantes'],
        price: 'Sob consulta',
        icon: 'fa-scroll',
        featured: false
    },

    // --- PERSONALIZADOS & PRESENTES ---
    {
        id: 'canecas-personalizadas',
        category: 'personalizados',
        name: 'Canecas Personalizadas',
        shortDescription: 'Transforme uma foto, frase ou ideia em uma caneca de cerâmica exclusiva.',
        description: 'Canecas de cerâmica com sublimação em alta definição. Perfeitas para datas comemorativas, lembranças e brindes corporativos.',
        benefits: ['Pode ir ao micro-ondas', 'Estampa com brilho intenso e durável', 'Embalada para presente'],
        price: 'A partir de R$ 35,00',
        icon: 'fa-mug-hot',
        featured: true
    },
    {
        id: 'camisas-personalizadas',
        category: 'personalizados',
        name: 'Camisas & Almofadas Personalizadas',
        shortDescription: 'Camisas e itens de tecido estampados com sua marca, arte ou foto preferida.',
        description: 'Camisas personalizadas para eventos, aniversários, empresas e presentes com estampas confortáveis que não desbotam.',
        benefits: ['Tecido macio e fresco', 'Cores fiéis à arte', 'Vários tamanhos disponíveis'],
        price: 'A partir de R$ 40,00',
        icon: 'fa-shirt',
        featured: false
    },
    {
        id: 'azulejos-lembrancinhas',
        category: 'personalizados',
        name: 'Azulejos & Quadros Decorativos',
        shortDescription: 'Azulejos estampados com suporte para mesa ou parede e topos de bolo.',
        description: 'Quadros de azulejo resinado com suporte de apoio, lembrancinhas de festas, topos de bolo em papel fotográfico e chaveiros.',
        benefits: ['Item decorativo afetivo e elegante', 'Acabamento premium'],
        price: 'A partir de R$ 25,00',
        icon: 'fa-images',
        featured: false
    },
    {
        id: 'papelaria-personalizada',
        category: 'personalizados',
        name: 'Papelaria Personalizada para Festas',
        shortDescription: 'Caixinhas milks, topos de bolo, adesivos e mimos personalizados para aniversários.',
        description: 'Kits de papelaria de festa confeccionados em papel offset de alta gramatura com corte preciso e cores alegres.',
        benefits: ['Deixa sua festa inesquecível', 'Montagem cuidadosa'],
        price: 'Sob consulta',
        icon: 'fa-cake-candles',
        featured: false
    },

    // --- INFORMÁTICA & SUPORTE ---
    {
        id: 'formatacao-pc',
        category: 'informatica',
        name: 'Formatação de PC & Notebook',
        shortDescription: 'Deixe seu computador como novo, rápido e livre de vírus.',
        description: 'Formatação limpa com Windows 10/11 ativado, instalação de drivers atualizados, pacote Office, antivírus e cópia de segurança (backup) de seus arquivos.',
        benefits: ['Velocidade máxima restaurada', 'Backup seguro de fotos e documentos', 'Garantia de serviço'],
        price: 'A partir de R$ 80,00',
        icon: 'fa-laptop-medical',
        featured: true
    },
    {
        id: 'conserto-hardware',
        category: 'informatica',
        name: 'Manutenção & Consertos',
        shortDescription: 'Limpeza interna, troca de pasta térmica, substituição de peças e upgrade SSD.',
        description: 'Diagnóstico e reparo de computadores e notebooks lentos ou com problemas de componentes. Instalação de SSD para turbinar a inicialização.',
        benefits: ['Diagnóstico transparente', 'Peças de qualidade', 'Até 10x mais rápido com SSD'],
        price: 'Sob consulta',
        icon: 'fa-microchip',
        featured: false
    },
    {
        id: 'impressoras-config',
        category: 'informatica',
        name: 'Instalação de Impressoras & Redes',
        shortDescription: 'Configuração de impressoras Wi-Fi, redes domésticas e compartilhamentos.',
        description: 'Instalação correta dos drivers de impressoras HP, Epson, Canon e Brother, configuração de Wi-Fi e auxílio remoto ou presencial.',
        benefits: ['Imprima direto do celular ou PC', 'Sem erros de comunicação'],
        price: 'Sob consulta',
        icon: 'fa-network-wired',
        featured: false
    },
    {
        id: 'musicas-pendrive',
        category: 'informatica',
        name: 'Músicas e Vídeos para Pendrive',
        shortDescription: 'Sua seleção musical favorita pronta para tocar no carro, som de casa ou TV.',
        description: 'Montagem de coletâneas de músicas e vídeos em pendrive ou cartão de memória organizadas por gênero, cantor ou época.',
        benefits: ['Áudio em alta qualidade', 'Organização por pastas', 'Testado antes da entrega'],
        price: 'A partir de R$ 20,00',
        icon: 'fa-compact-disc',
        featured: false
    },
    {
        id: 'desenvolvimento-suporte',
        category: 'informatica',
        name: 'Suporte Técnico & Apps',
        shortDescription: 'Solução de dúvidas de tecnologia, desenvolvimento simples e suporte geral.',
        description: 'Atendimento consultivo para resolver problemas em computadores, instalação de programas, suporte a pequenos negócios e sistemas.',
        benefits: ['Atendimento paciente e didático', 'Solução rápida'],
        price: 'Sob consulta',
        icon: 'fa-headset',
        featured: false
    }
];

// ==========================================
// DADOS DO PORTFÓLIO ("NOSSOS TRABALHOS")
// ==========================================

const PORTFOLIO_DATA = [
    {
        id: 'port-1',
        title: 'Caneca Personalizada com Foto e Frase',
        category: 'personalizados',
        image: 'logo.jpg',
        badge: 'Caneca Sublimada',
        description: 'Acabamento brilhante e estampa de alta definição produzida na Papel e Sonhos.'
    },
    {
        id: 'port-2',
        title: 'Impressão de Apostilas e Encadernação',
        category: 'impressao',
        image: 'preview.png',
        badge: 'Impressão Gráfica',
        description: 'Materiais didáticos encadernados com capa de proteção e espiral reforçado.'
    },
    {
        id: 'port-3',
        title: 'Caderneta de Vacinação Infantil',
        category: 'papelaria',
        image: 'logo.png',
        badge: 'Papelaria Afetiva',
        description: 'Capa dura personalizada com nome da criança e miolo atualizado do SUS.'
    },
    {
        id: 'port-4',
        title: 'Formatação e Upgrade de Notebook',
        category: 'informatica',
        image: 'preview.png',
        badge: 'Manutenção',
        description: 'Notebook restaurado com instalação de SSD de alta performance e Windows 11.'
    },
    {
        id: 'port-5',
        title: 'Currículos Otimizados e Formatados',
        category: 'design',
        image: 'logo.jpg',
        badge: 'Serviços Digitais',
        description: 'Currículos atraentes desenvolvidos para processos seletivos locais e online.'
    },
    {
        id: 'port-6',
        title: 'Kits de Lembrancinhas e Topos de Bolo',
        category: 'personalizados',
        image: 'logo.png',
        badge: 'Festas',
        description: 'Papelaria personalizada recortada para eventos com excelente acabamento.'
    }
];

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCategories();
    renderTopServices();
    renderCatalogServices('todos');
    renderPortfolio('todos');
    initEventListeners();
    initBottomNavScroll();
    optimizeForMobile();
});

// ==========================================
// TEMA CLARO / ESCURO (LIGHT DEFAULT)
// ==========================================

function initTheme() {
    const savedTheme = localStorage.getItem('ps_theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-theme');
        updateThemeIcon(false);
    }

    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('ps_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
    showToast(isDark ? 'Modo Escuro ativado' : 'Modo Claro ativado', 'info');
}

function updateThemeIcon(isDark) {
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeBtn.setAttribute('aria-label', isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    }
}

// ==========================================
// RENDERIZAÇÃO DAS CATEGORIAS ("O QUE VOCÊ PROCURA?")
// ==========================================

function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    container.innerHTML = Object.values(CATEGORIES_DATA).map(cat => `
        <div class="category-card" data-category="${cat.id}" role="button" tabindex="0">
            <div class="category-icon-wrapper">
                <i class="fas ${cat.icon}"></i>
            </div>
            <div class="category-info">
                <span class="category-badge">${cat.badge}</span>
                <h3>${cat.title}</h3>
                <p>${cat.description}</p>
            </div>
            <div class="category-action">
                <span>Ver opções <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
    `).join('');

    // Event listeners dos cards de categoria
    container.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.getAttribute('data-category');
            openCatalogCategoryModal(catId);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const catId = card.getAttribute('data-category');
                openCatalogCategoryModal(catId);
            }
        });
    });
}

// ==========================================
// RENDERIZAÇÃO DOS SERVIÇOS MAIS PROCURADOS
// ==========================================

function renderTopServices() {
    const container = document.getElementById('topServicesGrid');
    if (!container) return;

    const featuredServices = SERVICES_DATA.filter(s => s.featured);

    container.innerHTML = featuredServices.map(service => `
        <div class="service-card featured-service-card" data-id="${service.id}">
            <div class="service-icon-box">
                <i class="fas ${service.icon}"></i>
            </div>
            <div class="service-card-body">
                <span class="service-category-tag">${CATEGORIES_DATA[service.category]?.title || 'Serviço'}</span>
                <h4>${service.name}</h4>
                <p>${service.shortDescription}</p>
            </div>
            <div class="service-card-footer">
                <button class="btn btn-sm btn-primary open-service-modal-btn" data-id="${service.id}">
                    <i class="fas fa-eye"></i> Quero este serviço
                </button>
            </div>
        </div>
    `).join('');

    // Listeners
    container.querySelectorAll('.open-service-modal-btn, .featured-service-card').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.stopPropagation();
            const serviceId = elem.getAttribute('data-id') || elem.closest('[data-id]')?.getAttribute('data-id');
            if (serviceId) openServiceDetailModal(serviceId);
        });
    });
}

// ==========================================
// RENDERIZAÇÃO DO CATÁLOGO DE SERVIÇOS (COM FILTROS)
// ==========================================

function renderCatalogServices(categoryFilter = 'todos') {
    const container = document.getElementById('catalogServicesGrid');
    if (!container) return;

    let filtered = SERVICES_DATA;
    if (categoryFilter !== 'todos') {
        filtered = SERVICES_DATA.filter(s => s.category === categoryFilter);
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p class="empty-msg">Nenhum serviço encontrado nesta categoria.</p>`;
        return;
    }

    container.innerHTML = filtered.map(service => `
        <div class="catalog-item-card">
            <div class="catalog-item-header">
                <div class="catalog-item-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <div class="catalog-item-titles">
                    <h4>${service.name}</h4>
                    <span class="price-tag">${service.price}</span>
                </div>
            </div>
            <p class="catalog-item-desc">${service.shortDescription}</p>
            <div class="catalog-item-actions">
                <button class="btn btn-outline btn-sm view-details-btn" data-id="${service.id}">
                    <i class="fas fa-circle-info"></i> Detalhes
                </button>
                <button class="btn btn-whatsapp btn-sm order-direct-btn" data-id="${service.id}">
                    <i class="fab fa-whatsapp"></i> Orçamento
                </button>
            </div>
        </div>
    `).join('');

    // Attach click handlers
    container.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            openServiceDetailModal(id);
        });
    });

    container.querySelectorAll('.order-direct-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const service = SERVICES_DATA.find(s => s.id === id);
            if (service) sendServiceWhatsAppQuote(service.name);
        });
    });
}

// ==========================================
// RENDERIZAÇÃO DO PORTFÓLIO
// ==========================================

function renderPortfolio(filterCategory = 'todos') {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;

    let items = PORTFOLIO_DATA;
    if (filterCategory !== 'todos') {
        items = PORTFOLIO_DATA.filter(item => item.category === filterCategory);
    }

    container.innerHTML = items.map(item => `
        <div class="portfolio-item-card" data-category="${item.category}" data-id="${item.id}">
            <div class="portfolio-image-wrapper">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <span class="portfolio-badge">${item.badge}</span>
                <div class="portfolio-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>Ampliar</span>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    // Attach click handlers to open lightbox
    container.querySelectorAll('.portfolio-item-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const item = PORTFOLIO_DATA.find(p => p.id === id);
            if (item) openLightboxModal(item);
        });
    });
}

// ==========================================
// MODAL DE CATEGORIA / VISUALIZAR CATÁLOGO FILTRADO
// ==========================================

function openCatalogCategoryModal(categoryId) {
    const category = CATEGORIES_DATA[categoryId];
    if (!category) return;

    // Filter catalog section and scroll smoothly to catalog
    const filterButtons = document.querySelectorAll('#catalogFilterTabs .filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === categoryId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderCatalogServices(categoryId);

    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// MODAL DETALHES DO SERVIÇO
// ==========================================

function openServiceDetailModal(serviceId) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById('serviceDetailModal');
    if (!modal) return;

    const categoryTitle = CATEGORIES_DATA[service.category]?.title || 'Serviço';

    modal.querySelector('#modalServiceTitle').textContent = service.name;
    modal.querySelector('#modalServiceCategory').textContent = categoryTitle;
    modal.querySelector('#modalServiceIcon').className = `fas ${service.icon}`;
    modal.querySelector('#modalServiceDesc').textContent = service.description;
    modal.querySelector('#modalServicePrice').textContent = service.price;

    const benefitsList = modal.querySelector('#modalServiceBenefits');
    if (benefitsList) {
        benefitsList.innerHTML = service.benefits.map(b => `<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('');
    }

    const whatsappBtn = modal.querySelector('#modalServiceWhatsAppBtn');
    if (whatsappBtn) {
        whatsappBtn.onclick = () => {
            sendServiceWhatsAppQuote(service.name);
            closeAllModals();
        };
    }

    closeAllModals();
    modal.classList.add('active');
}

// ==========================================
// GERADOR DE MENSAGENS WHATSAPP
// ==========================================

function sendServiceWhatsAppQuote(serviceName) {
    const message = `Olá! Vi o serviço "${serviceName}" no site da Papel e Sonhos e gostaria de solicitar um orçamento.`;
    openWhatsAppWithMessage(message);
}

function openWhatsAppWithMessage(messageText) {
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/${CONFIG.whatsappPhone}?text=${encoded}`;
    trackEvent('whatsapp_click', { text: messageText });
    window.open(url, '_blank', 'noopener,noreferrer');
}

// ==========================================
// EVENT LISTENERS & MODAIS
// ==========================================

function initEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close, [data-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Close Modal on Overlay Click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // ESC Key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    // Catalog Filter Buttons
    document.querySelectorAll('#catalogFilterTabs .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#catalogFilterTabs .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderCatalogServices(filter);
        });
    });

    // Portfolio Filter Buttons
    document.querySelectorAll('#portfolioFilterTabs .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#portfolioFilterTabs .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });

    // Hero CTA WhatsApp Button
    const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
    if (heroWhatsappBtn) {
        heroWhatsappBtn.addEventListener('click', () => {
            openWhatsAppWithMessage("Olá! Vim pelo site da Papel e Sonhos e gostaria de informações sobre um serviço.");
        });
    }

    // Floating WhatsApp Button
    const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
    if (floatingWhatsappBtn) {
        floatingWhatsappBtn.addEventListener('click', () => {
            openWhatsAppWithMessage("Olá! Vim pelo site da Papel e Sonhos e gostaria de tirar uma dúvida.");
        });
    }

    // "Tenho uma Ideia" Form & Modal Triggers
    const openIdeaModalBtn = document.getElementById('openIdeaModalBtn');
    if (openIdeaModalBtn) {
        openIdeaModalBtn.addEventListener('click', () => {
            closeAllModals();
            const modal = document.getElementById('ideaModal');
            if (modal) modal.classList.add('active');
        });
    }

    const ideaForm = document.getElementById('ideaForm');
    if (ideaForm) {
        ideaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('ideaName').value.trim();
            const phone = document.getElementById('ideaPhone').value.trim();
            const category = document.getElementById('ideaCategory').value;
            const description = document.getElementById('ideaDescription').value.trim();

            const message = `Olá! Vim pelo site da Papel e Sonhos e tenho uma ideia de projeto:\n- Nome: ${name}\n- WhatsApp: ${phone}\n- Categoria: ${category}\n- Ideia: ${description}`;

            openWhatsAppWithMessage(message);
            closeAllModals();
            showSuccessMessage('Ideia enviada! Abrindo WhatsApp...');
        });
    }

    // Form Orçamento Global
    const globalQuoteForm = document.getElementById('globalQuoteForm');
    const quoteCategorySelect = document.getElementById('quoteCategory');
    const quoteServiceSelect = document.getElementById('quoteService');

    if (quoteCategorySelect && quoteServiceSelect) {
        quoteCategorySelect.addEventListener('change', () => {
            populateQuoteServices(quoteCategorySelect.value);
        });

        // Initialize select options
        populateQuoteServices('todos');
    }

    if (globalQuoteForm) {
        globalQuoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const serviceName = quoteServiceSelect.options[quoteServiceSelect.selectedIndex]?.text || 'Serviço Geral';
            const quantity = document.getElementById('quoteQuantity').value || '1';
            const notes = document.getElementById('quoteNotes').value.trim() || 'Sem observações adicionais';

            const message = `Olá! Vim pelo site da Papel e Sonhos. Gostaria de solicitar um orçamento.\nServiço: ${serviceName}\nQuantidade: ${quantity}\nObservações: ${notes}`;

            openWhatsAppWithMessage(message);
            showSuccessMessage('Solicitação pronta! Abrindo WhatsApp...');
        });
    }

    // Action buttons (Pix, QR, WiFi)
    const openPixBtn = document.getElementById('openPixBtn');
    if (openPixBtn) openPixBtn.addEventListener('click', openPixModal);

    const openQrBtn = document.getElementById('openQrBtn');
    if (openQrBtn) openQrBtn.addEventListener('click', openQRCodeModal);

    const openWifiBtn = document.getElementById('openWifiBtn');
    if (openWifiBtn) openWifiBtn.addEventListener('click', openWiFiModal);

    // Copy Pix Key
    const copyPixBtn = document.getElementById('copyPixBtn');
    if (copyPixBtn) copyPixBtn.addEventListener('click', copyPixKey);

    // Download QR Code
    const downloadQRBtn = document.getElementById('downloadQRBtn');
    if (downloadQRBtn) downloadQRBtn.addEventListener('click', downloadQRCode);

    // Connect WiFi
    const connectWiFiBtn = document.getElementById('connectWiFiBtn');
    if (connectWiFiBtn) connectWiFiBtn.addEventListener('click', connectToWiFi);

    // Open Bank Selector Modal
    const openBankBtn = document.getElementById('openBankBtn');
    if (openBankBtn) openBankBtn.addEventListener('click', openBankModal);
}

// Popula os serviços no formulário de orçamento
function populateQuoteServices(category) {
    const select = document.getElementById('quoteService');
    if (!select) return;

    let items = SERVICES_DATA;
    if (category !== 'todos') {
        items = SERVICES_DATA.filter(s => s.category === category);
    }

    select.innerHTML = items.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
}

// ==========================================
// MODAL LIGHTBOX DO PORTFÓLIO
// ==========================================

function openLightboxModal(item) {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    modal.querySelector('#lightboxImage').src = item.image;
    modal.querySelector('#lightboxImage').alt = item.title;
    modal.querySelector('#lightboxTitle').textContent = item.title;
    modal.querySelector('#lightboxDesc').textContent = item.description;

    const quoteBtn = modal.querySelector('#lightboxQuoteBtn');
    if (quoteBtn) {
        quoteBtn.onclick = () => {
            sendServiceWhatsAppQuote(item.title);
            closeAllModals();
        };
    }

    closeAllModals();
    modal.classList.add('active');
}

// ==========================================
// MODAIS UTILITÁRIOS (PIX, QR CODE, WIFI, BANCO)
// ==========================================

function openPixModal() {
    closeAllModals();
    const modal = document.getElementById('pixModal');
    if (modal) modal.classList.add('active');
}

function copyPixKey() {
    const pixKey = CONFIG.pixKey;
    copyToClipboard(pixKey)
        .then(() => {
            showSuccessMessage('Chave Pix copiada com sucesso!');
            const btn = document.getElementById('copyPixBtn');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-copy"></i> Copiar Chave';
                }, 2000);
            }
            trackEvent('pix_copied', {});
        })
        .catch(() => {
            showToast('Chave Pix: ' + pixKey, 'info');
        });
}

function openQRCodeModal() {
    closeAllModals();
    const modal = document.getElementById('qrcodeModal');
    if (modal) {
        modal.classList.add('active');
        generatePageQRCode();
    }
}

function generatePageQRCode() {
    const container = document.getElementById('pageQRCode');
    if (!container) return;
    container.innerHTML = '';
    const pageUrl = CONFIG.pageUrl || window.location.href;

    try {
        new QRCode(container, {
            text: pageUrl,
            width: 200,
            height: 200,
            colorDark: '#0F4C5C',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch(e) {
        container.innerHTML = '<p class="error-msg">Erro ao gerar código QR.</p>';
    }
}

function downloadQRCode() {
    const canvas = document.querySelector('#pageQRCode canvas');
    if (!canvas) {
        showToast('QR Code não gerado', 'error');
        return;
    }
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode-papel-e-sonhos.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccessMessage('Download do QR Code iniciado!');
}

function openWiFiModal() {
    closeAllModals();
    const modal = document.getElementById('wifiModal');
    if (modal) modal.classList.add('active');
}

const WIFI_CONFIG = {
    ssid: 'TSDINFORMATICA',
    password: 't04101986',
    security: 'WPA2'
};

function connectToWiFi() {
    const { isAndroid, isIOS } = detectPlatform();
    if (isAndroid) {
        try {
            window.location.href = 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end';
        } catch(e) {
            showWifiFallbackModal();
        }
    } else {
        showWifiFallbackModal();
    }
}

function showWifiFallbackModal() {
    copyToClipboard(WIFI_CONFIG.password)
        .then(() => {
            showSuccessMessage(`Senha Wi-Fi ("${WIFI_CONFIG.password}") copiada! Conecte-se na rede ${WIFI_CONFIG.ssid}.`);
        })
        .catch(() => {
            showToast(`Rede: ${WIFI_CONFIG.ssid} | Senha: ${WIFI_CONFIG.password}`, 'info');
        });
}

// ==========================================
// SELETOR DE BANCOS DO PIX
// ==========================================

const BANKS = [
    { name: 'Nubank', scheme: 'nubank://', packageName: 'com.nu.production', color: 'linear-gradient(135deg, #820AD1, #530082)', initials: 'Nu', webUrl: 'https://nubank.com.br' },
    { name: 'Itaú', scheme: 'itau://', packageName: 'com.itau', color: 'linear-gradient(135deg, #FF7A00, #EC5E00)', initials: 'Itaú', webUrl: 'https://www.itau.com.br' },
    { name: 'Bradesco', scheme: 'bradescomobile://', packageName: 'com.bradesco', color: 'linear-gradient(135deg, #CC092F, #E60042)', initials: 'Brad', webUrl: 'https://banco.bradesco' },
    { name: 'Banco do Brasil', scheme: 'bancodobrasil://', packageName: 'br.com.bb.android', color: 'linear-gradient(135deg, #F2E307, #003399)', initials: 'BB', webUrl: 'https://www.bb.com.br' },
    { name: 'Caixa', scheme: 'caixadireto://', packageName: 'br.com.gabba.Caixa', color: 'linear-gradient(135deg, #005CA9, #F58220)', initials: 'X', webUrl: 'https://www.caixa.gov.br' },
    { name: 'Santander', scheme: 'santanderpass://', packageName: 'com.santander.app', color: 'linear-gradient(135deg, #EC0000, #990000)', initials: 'San', webUrl: 'https://www.santander.com.br' },
    { name: 'Inter', scheme: 'bancointer://', packageName: 'br.com.intermedium', color: 'linear-gradient(135deg, #FF7A00, #FF5000)', initials: 'Inter', webUrl: 'https://www.bancointer.com.br' },
    { name: 'PicPay', scheme: 'picpay://', packageName: 'com.picpay', color: 'linear-gradient(135deg, #11C76F, #0A8B4C)', initials: 'Pic', webUrl: 'https://picpay.com' },
    { name: 'Mercado Pago', scheme: 'mercadopago://', packageName: 'com.mercadopago.wallet', color: 'linear-gradient(135deg, #009EE3, #007EA7)', initials: 'MP', webUrl: 'https://www.mercadopago.com.br' },
    { name: 'PagBank', scheme: 'pagbank://', packageName: 'br.com.uol.ps.myaccount', color: 'linear-gradient(135deg, #00C69E, #008F72)', initials: 'Pag', webUrl: 'https://pagbank.com.br' },
    { name: 'C6 Bank', scheme: 'c6bank://', packageName: 'com.c6bank.app', color: 'linear-gradient(135deg, #242424, #121212)', initials: 'C6', webUrl: 'https://www.c6bank.com.br' }
];

function openBankModal() {
    closeAllModals();
    const modal = document.getElementById('bankModal');
    if (!modal) return;
    modal.classList.add('active');

    const bankGridList = document.getElementById('bankGridList');
    if (!bankGridList) return;

    bankGridList.innerHTML = BANKS.map(bank => `
        <div class="bank-item" style="background: ${bank.color};" onclick="openBankApp('${bank.scheme}', '${bank.packageName}', '${bank.webUrl}')">
            <span class="bank-initials">${bank.initials}</span>
            <span class="bank-name">${bank.name}</span>
        </div>
    `).join('');
}

function openBankApp(scheme, packageName, webUrl) {
    const { isAndroid, isIOS } = detectPlatform();
    let opened = false;

    const onBlur = () => { opened = true; };
    window.addEventListener('blur', onBlur);

    if (isAndroid) {
        window.location.href = `intent://open#Intent;scheme=${scheme.replace('://', '')};package=${packageName};end`;
    } else {
        window.location.href = scheme;
    }

    setTimeout(() => {
        window.removeEventListener('blur', onBlur);
        if (!opened) {
            window.open(webUrl, '_blank');
        }
    }, 1500);
}

// ==========================================
// SUPORTE A NAVEGAÇÃO BOTTOM BAR E SCROLL
// ==========================================

function initBottomNavScroll() {
    const navItems = document.querySelectorAll('.bottom-nav-item, .nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    targetElem.scrollIntoView({ behavior: 'smooth' });

                    // Update active state
                    navItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                }
            }
        });
    });
}

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function showSuccessMessage(msg) {
    showToast(msg, 'success');
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
        toast.className = 'toast';
    }, 3500);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            resolve();
        } catch(e) {
            reject(e);
        }
        document.body.removeChild(textarea);
    });
}

function detectPlatform() {
    const ua = navigator.userAgent;
    return {
        isAndroid: /Android/i.test(ua),
        isIOS: /iPhone|iPad|iPod/i.test(ua)
    };
}

function optimizeForMobile() {
    const { isAndroid, isIOS } = detectPlatform();
    if (isAndroid || isIOS) {
        document.documentElement.classList.add('is-mobile');
    }
}

function trackEvent(name, data) {
    console.log('[Analytics]', name, data);
}
