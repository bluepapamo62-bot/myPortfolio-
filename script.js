document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Smooth scroll to section
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get values (in real portfolio, send to backend or email)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    document.getElementById('formResponse').textContent =
        `Thank you, ${name}! Your message has been sent to the swamp. 🐸✨`;
    this.reset();
});

// Optional: highlight nav links on scroll
window.addEventListener('scroll', function() {
    const sections = ['home', 'about', 'skills', 'contact'];
    let scrollPos = window.scrollY + 80;
    for (let sec of sections) {
        const section = document.getElementById(sec);
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector(`.nav-link[href="#${sec}"]`).classList.add('active');
        }
    }
});