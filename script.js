// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. ROLAGEM SUAVE (Smooth Scroll)
    // Faz com que ao clicar no menu, a página deslize suavemente até a seção
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajuste por causa do menu fixo
                behavior: 'smooth'
            });
        });
    });

    // 2. EFEITO DE APARECIMENTO (Fade-in)
    // Faz as seções aparecerem conforme você rola a página
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });

    // 3. MUDANÇA DE COR DO MENU AO ROLAR
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = '#1b3d18'; // Verde mais escuro ao rolar
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.background = '#2d5a27';
            header.style.boxShadow = 'none';
        }
    });
});