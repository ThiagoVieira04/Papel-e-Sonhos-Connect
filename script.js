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
        id: 'cartoes-visita',
        category: 'impressao',
        name: 'Cartões de Visita',
        shortDescription: 'Cartões profissionais em papel couché com acabamento de alta qualidade.',
        description: 'Criação e impressão de cartões de visita personalizados com sua logo, nome e contatos. Papel couché fosco ou brilhante com recorte preciso.',
        benefits: ['Design profissional', 'Acabamento fosco ou brilhante', 'Entrega rápida'],
        price: 'A partir de R$ 25,00 (100 un)',
        icon: 'fa-address-card',
        featured: false
    },
    {
        id: 'convites-casamento',
        category: 'personalizados',
        name: 'Convites de Casamento',
        shortDescription: 'Convites elegantes e exclusivos para o dia mais especial da sua vida.',
        description: 'Convites de casamento personalizados com o tema do casal, papel de alta gramatura, laços e acabamento premium. Modelos clássicos ou modernos.',
        benefits: ['Design exclusivo do casal', 'Papel de alta gramatura', 'Acabamento premium'],
        price: 'Sob consulta',
        icon: 'fa-ring',
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
    // --- EXISTENTES ---
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
    },

    // --- 📚 PAPELARIA & PERSONALIZADOS ---
    {
        id: 'port-7',
        title: 'Encadernação de Trabalhos e Documentos',
        category: 'impressao',
        image: 'logo.jpg',
        badge: 'Acabamento',
        description: 'Encadernação em espiral com capa transparente e contra-capa resistente.'
    },
    {
        id: 'port-8',
        title: 'Agendas Personalizadas',
        category: 'papelaria',
        image: 'preview.png',
        badge: 'Papelaria',
        description: 'Agendas pessoais e corporativas com capa personalizada e divisórias exclusivas.'
    },
    {
        id: 'port-9',
        title: 'Cadernetas de Vacina Reformadas',
        category: 'papelaria',
        image: 'logo.png',
        badge: 'Papelaria Afetiva',
        description: 'Reforma e confecção de cadernetas com capa dura e miolo atualizado do SUS.'
    },
    {
        id: 'port-10',
        title: 'Lembrancinhas para Festas e Eventos',
        category: 'personalizados',
        image: 'logo.jpg',
        badge: 'Eventos',
        description: 'Lembrancinhas personalizadas com nome, data e tema do seu evento.'
    },
    {
        id: 'port-11',
        title: 'Camisas Personalizadas',
        category: 'personalizados',
        image: 'preview.png',
        badge: 'Vestuário',
        description: 'Camisas estampadas para eventos, empresas, formaturas e aniversários.'
    },
    {
        id: 'port-12',
        title: 'Azulejos Personalizados',
        category: 'personalizados',
        image: 'logo.png',
        badge: 'Decoração',
        description: 'Azulejos estampados com suporte para mesa ou parede e acabamento resinado.'
    },
    {
        id: 'port-13',
        title: 'Bolsinhas Personalizadas',
        category: 'personalizados',
        image: 'logo.jpg',
        badge: 'Acessórios',
        description: 'Bolsinhas com estampa exclusiva para lembranças e brindes especiais.'
    },
    {
        id: 'port-15',
        title: 'Topos de Bolo Personalizados',
        category: 'personalizados',
        image: 'logo.png',
        badge: 'Festas',
        description: 'Topos de bolo em papel fotográfico com brilho e recorte preciso.'
    },
    {
        id: 'port-16',
        title: 'Papelaria Personalizada em Geral',
        category: 'personalizados',
        image: 'logo.jpg',
        badge: 'Personalizados',
        description: 'Papel timbrado, convites, cartões e papelaria completa com sua identidade.'
    },
    {
        id: 'port-17',
        title: 'Adesivos Personalizados',
        category: 'personalizados',
        image: 'preview.png',
        badge: 'Viniil & Papel',
        description: 'Adesivos recortados em vinil ou papel para marcas, festas e produtos.'
    },
    {
        id: 'port-18',
        title: 'Banners Promocionais',
        category: 'impressao',
        image: 'logo.png',
        badge: 'Grande Formato',
        description: 'Banners em lona com bastão, resistentes para ambientes internos e externos.'
    },

    // --- 🖨️ IMPRESSÃO E DOCUMENTOS ---
    {
        id: 'port-19',
        title: 'Xerox Rápido e de Qualidade',
        category: 'impressao',
        image: 'logo.jpg',
        badge: 'Cópias',
        description: 'Cópias em preto e branco e coloridas com alto padrão de nitidez.'
    },
    {
        id: 'port-20',
        title: 'Impressão de Documentos e Fotos',
        category: 'impressao',
        image: 'preview.png',
        badge: 'Impressão',
        description: 'Impressões de trabalhos, contratos, apostilas e fotos em vários tamanhos.'
    },
    {
        id: 'port-21',
        title: 'Emissão de Boletos e 2ª Via',
        category: 'impressao',
        image: 'logo.png',
        badge: 'Contas',
        description: 'Emissão e 2ª via de contas de luz, água, telefone e boletos bancários.'
    },
    {
        id: 'port-22',
        title: 'Escaneamento para WhatsApp e E-mail',
        category: 'impressao',
        image: 'logo.jpg',
        badge: 'Digitalização',
        description: 'Documentos digitalizados com alta nitidez e enviados direto para você.'
    },
    {
        id: 'port-23',
        title: 'Certidões Negativas (Estadual, Federal e Eleitoral)',
        category: 'documentos',
        image: 'preview.png',
        badge: 'Documentos',
        description: 'Emissão de certidões negativas de débitos junto aos órgãos públicos.'
    },
    {
        id: 'port-24',
        title: 'Currículos Profissionais',
        category: 'design',
        image: 'logo.png',
        badge: 'Empregabilidade',
        description: 'Elaboração de currículos com layout profissional para vagas locais e online.'
    },
    {
        id: 'port-25',
        title: 'Fotos em Vários Tamanhos',
        category: 'impressao',
        image: 'logo.jpg',
        badge: 'Fotografia',
        description: 'Fotos 3x4, 5x7 e ampliações com impressão fotográfica de alta qualidade.'
    },

    // --- 💼 SERVIÇOS ADMINISTRATIVOS E PROFISSIONAIS ---
    {
        id: 'port-26',
        title: 'Declaração de Imposto de Renda',
        category: 'documentos',
        image: 'preview.png',
        badge: 'Receita Federal',
        description: 'Elaboração e transmissão da sua declaração IRPF sem pendências.'
    },
    {
        id: 'port-27',
        title: 'Declaração de IR do MEI',
        category: 'documentos',
        image: 'logo.png',
        badge: 'MEI',
        description: 'Declaração anual do MEI (DASN-SIMEI) feita com agilidade e segurança.'
    },
    {
        id: 'port-28',
        title: 'Abertura de MEI',
        category: 'documentos',
        image: 'logo.jpg',
        badge: 'Empreendedor',
        description: 'Auxílio completo na abertura do seu MEI, do cadastro à emissão do CNPJ.'
    },
    {
        id: 'port-29',
        title: 'Recuperação de Conta GOV',
        category: 'documentos',
        image: 'preview.png',
        badge: 'Gov.br',
        description: 'Recuperação de acesso e validação da sua conta gov.br com seu documento.'
    },
    {
        id: 'port-30',
        title: 'Aposentadoria por Idade',
        category: 'documentos',
        image: 'logo.png',
        badge: 'INSS',
        description: 'Entrada e acompanhamento do processo de aposentadoria por idade no INSS.'
    },
    {
        id: 'port-31',
        title: 'Aposentadoria por Tempo de Serviço',
        category: 'documentos',
        image: 'logo.jpg',
        badge: 'INSS',
        description: 'Auxílio no requerimento de aposentadoria por tempo de contribuição.'
    },
    {
        id: 'port-32',
        title: 'Auxílio-Doença',
        category: 'documentos',
        image: 'preview.png',
        badge: 'INSS',
        description: 'Requisição de auxílio-doença com orientação sobre documentos e prazos.'
    },
    {
        id: 'port-33',
        title: 'Entrada em Seguro-Desemprego',
        category: 'documentos',
        image: 'logo.png',
        badge: 'Trabalho',
        description: 'Auxílio na solicitação e acompanhamento do seu seguro-desemprego.'
    },

    // --- 💻 TECNOLOGIA ---
    {
        id: 'port-34',
        title: 'Desenvolvimento de Aplicativos',
        category: 'informatica',
        image: 'logo.jpg',
        badge: 'Apps',
        description: 'Criação de aplicativos e soluções digitais sob medida para seu negócio.'
    },
    {
        id: 'port-35',
        title: 'Consertos e Formatação de Computadores',
        category: 'informatica',
        image: 'preview.png',
        badge: 'Manutenção',
        description: 'Conserto, formatação e otimização de computadores e notebooks.'
    },
    {
        id: 'port-36',
        title: 'Gravação de Áudio para Propaganda',
        category: 'informatica',
        image: 'logo.png',
        badge: 'Áudio',
        description: 'Gravação e edição de áudio profissional para sua propaganda e spot.'
    },
    {
        id: 'port-37',
        title: 'Músicas para Pen Drive',
        category: 'informatica',
        image: 'logo.jpg',
        badge: 'Música',
        description: 'Coletâneas de músicas e vídeos organizadas por gênero, cantor ou época.'
    }
];

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCategories();
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

    const openShareBtn = document.getElementById('openShareBtn');
    if (openShareBtn) openShareBtn.addEventListener('click', openShareModal);

    const openWifiBtn = document.getElementById('openWifiBtn');
    if (openWifiBtn) openWifiBtn.addEventListener('click', openWiFiModal);

    // Copy Pix Key
    const copyPixBtn = document.getElementById('copyPixBtn');
    if (copyPixBtn) copyPixBtn.addEventListener('click', copyPixKey);

    // Download QR Code
    const downloadQRBtn = document.getElementById('downloadQRBtn');
    if (downloadQRBtn) downloadQRBtn.addEventListener('click', downloadQRCode);

    // Share actions
    document.querySelectorAll('.share-item').forEach(item => {
        item.addEventListener('click', () => {
            handleShareAction(item.getAttribute('data-share'));
        });
    });

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

function openShareModal() {
    closeAllModals();
    const modal = document.getElementById('shareModal');
    if (modal) modal.classList.add('active');
}

const SHARE_TEXT = 'Conheça a Papel e Sonhos Informática! Papelaria, impressão, personalizados e serviços digitais em Magé/RJ.';

function getShareUrl() {
    return CONFIG.pageUrl || window.location.href;
}

function getShareMessage() {
    return SHARE_TEXT + '\n' + getShareUrl();
}

function handleShareAction(action) {
    closeAllModals();
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(SHARE_TEXT);

    switch (action) {
        case 'whatsapp':
            window.open('https://wa.me/?text=' + encodeURIComponent(getShareMessage()), '_blank', 'noopener');
            break;
        case 'facebook':
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank', 'noopener');
            break;
        case 'messenger':
            window.open('fb-messenger://share/?link=' + url, '_blank', 'noopener');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, '_blank', 'noopener');
            break;
        case 'x':
            window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url, '_blank', 'noopener');
            break;
        case 'telegram':
            window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank', 'noopener');
            break;
        case 'email':
            window.location.href = 'mailto:?subject=' + encodeURIComponent('Papel e Sonhos Informática') + '&body=' + encodeURIComponent(getShareMessage());
            break;
        case 'instagram':
            copyShareLink();
            showToast('Link copiado! Cole no seu Instagram ou compartilhe via Direct.', 'success');
            break;
        case 'copy':
            copyShareLink();
            break;
        case 'qr':
            openQRCodeModal();
            break;
        case 'native':
            nativeShare();
            break;
        default:
            break;
    }
}

function copyShareLink() {
    const pageUrl = getShareUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pageUrl)
            .then(() => showToast('Link copiado para a área de transferência!', 'success'))
            .catch(() => fallbackCopyShareLink(pageUrl));
    } else {
        fallbackCopyShareLink(pageUrl);
    }
}

function fallbackCopyShareLink(pageUrl) {
    const textarea = document.createElement('textarea');
    textarea.value = pageUrl;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Link copiado para a área de transferência!', 'success');
}

function nativeShare() {
    const pageUrl = getShareUrl();
    if (navigator.share) {
        navigator.share({
            title: 'Papel e Sonhos Informática',
            text: SHARE_TEXT,
            url: pageUrl
        }).catch(() => {});
    } else {
        copyShareLink();
        showToast('Compartilhamento nativo não suportado. Link copiado!', 'info');
    }
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
