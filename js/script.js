document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".topo-fixo");
  const menu = document.querySelector(".menu-principal");
  const toggle = document.querySelector(".menu-toggle");
  const inner = document.querySelector(".inner");

  /* ============================= */
  /* ✅ ANIMAÇÃO DE ENTRADA HEADER */
  /* ============================= */
  header.style.opacity = "0";
  header.style.transform = "translateY(-40px)";

  setTimeout(() => {
    header.style.transition = "0.6s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);

  /* ============================= */
  /* ✅ HEADER ENCOLHE NO SCROLL */
  /* ============================= */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  /* ============================= */
  /* ✅ MENU HAMBURGUER */
  /* ============================= */
  if (toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("ativo");

      /* ✅ BLUR NO FUNDO AO ABRIR */
      if (menu.classList.contains("ativo")) {
        inner.style.filter = "blur(6px)";
        inner.style.transition = "0.3s ease";
        header.style.zIndex = "999";
      } else {
        inner.style.filter = "blur(0)";
      }
    });
  }

  /* ============================= */
  /* ✅ FECHAR MENU AO CLICAR EM LINK */
  /* ============================= */
  const links = document.querySelectorAll(".menu-principal a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      inner.style.filter = "blur(0)";
    });
  });

});
