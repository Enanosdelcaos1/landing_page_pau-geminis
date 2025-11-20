// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadDownloadCount();
    document.getElementById('emailForm')?.addEventListener('submit', handleSubmit);
    setupScrollLinks();
    setupHeaderShadow();
    setupIntersectionObserver();
});

// Manejo de formulario
async function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    if (!isValidEmail(email)) {
        showError('Email inválido');
        return;
    }
    const btn = e.target.querySelector('.submit-button');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    
    if (typeof emailjs !== 'undefined') {
        try {
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                to_email: email,
                from_name: 'Aprende a Programar',
                to_name: email.split('@')[0],
                subject: 'Tu libro "Aprende a Programar" está listo',
                message: `Hola,\n\nGracias por tu interés.\n\n¡A programar se aprende programando!\n\nSaludos,\nEl equipo de Aprende a Programar`
            });
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_THANK_YOU_TEMPLATE_ID', {
                user_email: email,
                user_name: email.split('@')[0],
                book_title: 'Aprende a Programar',
                book_author: 'Toni Ferrà'
            }).catch(() => {});
            incrementDownloadCount();
            showSuccess();
        } catch (error) {
            showError('Error al enviar email');
            btn.disabled = false;
            btn.textContent = 'Descargar Gratis';
        }
    } else {
        showError('Servicio no disponible');
        btn.disabled = false;
        btn.textContent = 'Descargar Gratis';
    }
}

// Contador de descargas
function loadDownloadCount() {
    document.getElementById('downloadCount').textContent = localStorage.getItem('downloadCount') || '0';
}

function incrementDownloadCount() {
    let count = parseInt(localStorage.getItem('downloadCount') || '0') + 1;
    localStorage.setItem('downloadCount', count);
    document.getElementById('downloadCount').textContent = count;
}

// Validación
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// UI
function showSuccess() {
    const form = document.getElementById('emailForm');
    const msg = document.getElementById('successMessage');
    form.style.display = 'none';
    msg.style.display = 'block';
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => downloadPDF(), 1000);
    setTimeout(() => {
        form.style.display = 'block';
        msg.style.display = 'none';
        document.getElementById('emailInput').value = '';
        document.querySelector('.submit-button').disabled = false;
        document.querySelector('.submit-button').textContent = 'Descargar Gratis';
    }, 5000);
}

function showError(msg) {
    alert(msg);
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = './downloads/Aprende-a-Programar.pdf';
    link.download = 'Aprende-a-Programar-ToniFerra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Scroll suave y sombra del header
function setupScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href !== '#descarga') {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function setupHeaderShadow() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.style.boxShadow = window.scrollY > 50 
            ? '0 8px 30px rgba(77, 111, 255, 0.2)' 
            : '0 4px 20px rgba(77, 111, 255, 0.2)';
    });
}

// Animaciones al scroll
function setupIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.beneficio-card, .features-list li').forEach(el => {
        el.style.cssText = 'opacity: 0; transform: translateY(20px); transition: all 0.6s ease;';
        observer.observe(el);
    });
}