document.addEventListener('DOMContentLoaded', () => {

    // Scroll suave para todos os links com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80; // altura aproximada do header fixo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Feedback do botão "enviar tudo"
    const btnEnviar = document.getElementById('btnEnviar');
    const contactForm = document.getElementById('contactForm');

    if (btnEnviar && contactForm) {
        btnEnviar.addEventListener('click', function () {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();

            if (nome === '' || email === '') {
                alert('Por favor, preencha seu nome e email!');
                return;
            }

            const originalText = this.textContent;
            this.innerHTML = 'Enviado com sucesso ✓';
            this.style.background = '#28a745';

            setTimeout(() => {
                alert(`Obrigado, ${nome}!\nSua mensagem foi enviada.`);
                this.innerHTML = originalText;
                this.style.background = '';
                contactForm.reset();
            }, 1800);
        });
    }

    console.log('%cHero Complex - Scroll suave ativado!', 'color: #ff4500; font-weight: bold;');
});
