const anoElemento = document.getElementById("ano");
anoElemento.textContent = new Date().getFullYear();

// ===== Menu: destaca a seção visível =====
const secoes = document.querySelectorAll("main section, footer");
const linksMenu = document.querySelectorAll("nav a");

const observadorMenu = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        linksMenu.forEach((link) => {
          link.classList.toggle(
            "ativo",
            link.getAttribute("href") === "#" + entrada.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

secoes.forEach((secao) => observadorMenu.observe(secao));

//Animação de entrada das seções 
const secoesAnimadas = document.querySelectorAll("main section:not(#inicio)");

const observadorReveal = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.1 }
);

secoesAnimadas.forEach((secao) => {
  secao.classList.add("reveal");
  observadorReveal.observe(secao);
});