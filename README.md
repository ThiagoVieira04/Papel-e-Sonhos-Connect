# Papel e Sonhos Connect

Página de apresentação da **Papel e Sonhos Informática** — cartão de visita digital com contatos, pagamento Pix, WiFi, catálogo de serviços e QR Code.

**[Acessar o Site](https://papel-e-sonhos-connect.vercel.app/)**

---

## Preview

![Preview do site](https://papel-e-sonhos-connect.vercel.app/assets/img/logo.png)

---

## Funcionalidades

| Botão | O que faz |
|-------|-----------|
| Avalie no Google | Abre a página de avaliação no Google |
| WhatsApp | Inicia conversa direto com a loja |
| Instagram | Acessa o perfil da loja |
| Facebook | Acessa a página no Facebook |
| Localização | Abre o endereço no Google Maps |
| Pix | Exibe a chave Pix com opção de copiar |
| WiFi Grátis | Mostra rede e senha, com opção de conectar |
| QR Code | Gera QR Code para compartilhar o site |
| Nossos Serviços | Lista de serviços por categoria (accordion) |
| Catálogo de Serviços | Carrossel de imagens e vídeos dos trabalhos |

---

## Como Usar

**Abrir no navegador:**
Dê duplo clique em `index.html`.

**Rodar com servidor local:**
```bash
python -m http.server 8000
```
Acesse `http://localhost:8000`

---

## Como Personalizar

Edite o objeto `CONFIG` no arquivo `assets/js/script.js`:

```javascript
const CONFIG = {
    pixKey: '+5521987172463',
    whatsappPhone: '5521987172463',
    googleReviewUrl: 'https://...',
    instagramUrl: 'https://...',
    facebookUrl: 'https://...',
    pageUrl: 'https://...',
    wifiPassword: 'sua_senha',
    wifiSSID: 'NomeDaRede',
};
```

Salve e recarregue o navegador.

---

## Estrutura

```
├── index.html              ← Página principal
├── style.css               ← Estilos
├── assets/
│   ├── js/script.js        ← Lógica e configurações
│   ├── img/                ← Imagens (logo, ícones, gifs)
│   └── media/              ← Catálogo (imagens e vídeos)
├── manifest.json           ← Configuração PWA
├── vercel.json             ← Deploy na Vercel
├── .htaccess               ← Config Apache
├── robots.txt              ← SEO
└── sitemap.xml             ← SEO
```

---

## Deploy

**Vercel (recomendado):**
1. Conecte o repositório ao [vercel.com](https://vercel.com)
2. Clique em **Deploy**

---

## Tecnologias

- HTML5 / CSS3 / JavaScript (vanilla)
- [Font Awesome 6](https://fontawesome.com/) — Ícones
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) — Geração de QR Code

---

## Contato

- **WhatsApp:** [+55 21 98717-2463](https://wa.me/5521987172463)
- **Instagram:** [@papel_e_sonhos0504](https://www.instagram.com/papel_e_sonhos0504/)
- **Facebook:** [biancathiago0504](https://www.facebook.com/biancathiago0504)

---

Desenvolvido por **Papel e Sonhos Informática**
