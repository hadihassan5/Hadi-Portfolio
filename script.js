const progress = document.getElementById('progress');
function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress);
updateProgress();

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

document.querySelectorAll('a.mail-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const email = link.dataset.email || 'hadipk110@gmail.com';
        const subject = link.dataset.subject || 'Hello Hadi';
        const body = link.dataset.body || '';
        let mailtoLink = `mailto:${email}`;

        if (subject) {
            mailtoLink += `?subject=${encodeURIComponent(subject)}`;
        }

        if (body) {
            mailtoLink += `${subject ? '&' : '?'}body=${encodeURIComponent(body)}`;
        }

        window.location.href = mailtoLink;
        event.preventDefault();
    });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nlink');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nlink[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => io.observe(s));

const revealEls = document.querySelectorAll('.reveal');
const rio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); rio.unobserve(entry.target); }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => rio.observe(el));
