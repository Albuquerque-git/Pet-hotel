window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-bar');
  const header = document.querySelector('.header');

  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
    header.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
    header.classList.remove('scrolled');
  }
});

function toggleMenu() {
      const menu = document.getElementById("menuMobile");
      menu.classList.toggle("show");
    }
  
    function fecharMenu() {
      const menu = document.getElementById("menuMobile");
      menu.classList.remove("show");
    }

    // Pata SVG transparente (preenchimento branco com fundo transparente)
const pataSvg = `
data:image/svg+xml;base64,
PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIg
eG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSAxNEMxOS41IDcu
NSA0MiA3LjUgNDIgMTQiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTI3IDE0QzI3IDcuNSA0MCA3LjUg
NDAgMTQiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIxIDI3QzIxIDIxIDM4IDIxIDM4IDI3IiBmaWxs
PSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0xNSAzM0MxNSAyNiAzNSAyNiAzNSAzMyIgZmlsbD0id2hpdGUiLz48
L3N2Zz4=`.trim();

const NUM_PATAS = 25;

function criarPata() {
  const pata = document.createElement('img');
  pata.src = pataSvg;
  pata.classList.add('pata');

  pata.style.left = Math.random() * window.innerWidth + 'px';
  pata.style.top = Math.random() * window.innerHeight + 'px';

  const size = 20 + Math.random() * 30;
  pata.style.width = size + 'px';
  pata.style.height = size + 'px';

  const duracao = 4000 + Math.random() * 4000;
  pata.style.animation = `flutuar ${duracao}ms infinite alternate`;
  pata.style.animationDelay = (Math.random() * duracao) + 'ms';

  document.body.appendChild(pata);

  let posX = parseFloat(pata.style.left);
  let posY = parseFloat(pata.style.top);
  let directionX = Math.random() > 0.5 ? 1 : -1;
  let directionY = Math.random() > 0.5 ? 1 : -1;
  let speedX = 0.1 + Math.random() * 0.3;
  let speedY = 0.1 + Math.random() * 0.3;

  function mover() {
    posX += speedX * directionX;
    posY += speedY * directionY;

    if (posX < 0) directionX = 1;
    if (posX > window.innerWidth - size) directionX = -1;
    if (posY < 0) directionY = 1;
    if (posY > window.innerHeight - size) directionY = -1;

    pata.style.left = posX + 'px';
    pata.style.top = posY + 'px';

    requestAnimationFrame(mover);
  }

  mover();
}

for (let i = 0; i < NUM_PATAS; i++) {
  criarPata();
}

window.addEventListener('resize', () => {
  document.querySelectorAll('.pata').forEach(pata => {
    let left = parseFloat(pata.style.left);
    let top = parseFloat(pata.style.top);
    let width = parseFloat(pata.style.width);

    if (left > window.innerWidth - width) pata.style.left = (window.innerWidth - width) + 'px';
    if (top > window.innerHeight - width) pata.style.top = (window.innerHeight - width) + 'px';
  });
});



    document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".depoimentos-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500, // tempo entre slides (2.5 segundos)
      disableOnInteraction: false, // continua mesmo se clicar
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});
