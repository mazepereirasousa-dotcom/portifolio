// Menu Celular
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animação de entrada (ScrollReveal)
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 150
});

// Função para enviar formulário para o WhatsApp
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o formulário de recarregar a página

        // Pega os valores dos campos pelos IDs corretos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Configuração do número (Somente números: DDI + DDD + Número)
        const numeroWhatsApp = "5589994103233"; 

        // Monta a mensagem formatada
        const texto = `Olá! Meu nome é *${nome}*.\nMeu e-mail: ${email}\n\n*Mensagem:* ${mensagem}`;
        
        // Codifica para URL
        const textoCodificado = encodeURIComponent(texto);
        
        // URL final do WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(url, '_blank');
    });
}