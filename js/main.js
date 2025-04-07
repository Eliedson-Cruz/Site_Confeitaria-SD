// Menu Mobile
document.querySelector('.menu-mobile').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Fecha o menu mobile se estiver aberto
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Efeito no scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--branco)';
        navbar.style.boxShadow = 'none';
    }
});

// Formulário
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pedido enviado! Entraremos em contato em breve.');
    this.reset();
});