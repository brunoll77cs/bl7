// ===== HEADER FUNDIR AO ROLAR =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const logoImg = document.querySelector('.logo-box img');
    const navLogo = document.querySelector('.nav-logo');
    
    if (header && logoImg) {
        if (window.scrollY > 80) {
            header.classList.add('is-compact');
            logoImg.style.height = '50px';
        } else {
            header.classList.remove('is-compact');
            logoImg.style.height = '110px';
        }
    }
});

// ===== MOBILE MENU =====
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const dropdownItems = document.querySelectorAll('.has-dropdown');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link (opcional)
    mainNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            mainNav.classList.remove('open');
        });
    });
}

// ===== DROPDOWN NO MOBILE =====
dropdownItems.forEach(function(item) {
    const link = item.querySelector('a');
    if (link) {
        link.addEventListener('click', function(e) {
            // Se for mobile (menu aberto), abre/fecha o dropdown
            if (window.innerWidth <= 768 && mainNav.classList.contains('open')) {
                e.preventDefault();
                item.classList.toggle('open');
            }
        });
    }
});

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== CARROSSEL (Exemplo Simples) =====
const heroImages = document.querySelectorAll('.hero-art img');
const dots = document.querySelectorAll('.hero-dots span');
let currentSlide = 0;

function showSlide(index) {
    if (heroImages.length > 0) {
        heroImages.forEach(function(img, i) {
            img.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === index);
        });
    }
}

if (heroImages.length > 0) {
    // Inicializa mostrando o primeiro
    showSlide(0);

    // Navegação
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % heroImages.length;
            showSlide(currentSlide);
        });
    }

    // Dots
    dots.forEach(function(dot, i) {
        dot.addEventListener('click', function() {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });
}
    const vereadores = [
    {
        id: 1,
        nome: "Carlinhos da Zona Leste",
        partido: "PSD",
        foto: "carlinhos.jpg",
        link: "#"
    },
    {
        id: 2,
        nome: "Maria Aparecida",
        partido: "MDB",
        foto: "maria.jpg",
        link: "#"
    },
    {
        id: 3,
        nome: "José Pereira",
        partido: "PL",
        foto: "jose.jpg",
        link: "#"
    },
    {
        id: 4,
        nome: "Ana Beatriz",
        partido: "PT",
        foto: "ana.jpg",
        link: "#"
    },
    {
        id: 5,
        nome: "Pedro Henrique",
        partido: "PSDB",
        foto: "pedro.jpg",
        link: "#"
    },
    {
        id: 6,
        nome: "Lúcia Ferreira",
        partido: "PP",
        foto: "lucia.jpg",
        link: "#"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.vereadores-grid');
    if (!grid) return;

    vereadores.forEach(function(v) {
        const card = document.createElement('div');
        card.className = 'vereador-card';
        card.setAttribute('data-id', v.id);
        
        card.innerHTML = `
            <a href="${v.link}" style="text-decoration: none; color: inherit; display: block;">
                <div class="photo">
                    <img src="img/${v.foto}" alt="${v.nome}" onerror="this.src='img/default.jpg'">
                </div>
                <div class="info">
                    <h5>${v.nome}</h5>
                    <span class="partido"><i class="fa-regular fa-circle"></i> ${v.partido}</span>
                    <div class="ver-mais">Ver mais <i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </a>
        `;
        
        grid.appendChild(card);
    });
});
