function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.icon');
    
    document.querySelectorAll('.accordion-content').forEach((item) => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });
    
    document.querySelectorAll('.icon').forEach((item) => {
        if (item !== icon) {
            item.textContent = '+';
        }
    });
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '−';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            if (window.innerWidth <= 768) {
                document.getElementById('navLinks').style.display = 'none';
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('navLinks');
        const navbar = document.querySelector('.navbar');
        
        if (window.innerWidth <= 768 && !navbar.contains(event.target)) {
            nav.style.display = 'none';
        }
    });
});

window.addEventListener('resize', function() {
    const nav = document.getElementById('navLinks');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});
