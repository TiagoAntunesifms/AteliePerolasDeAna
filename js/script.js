document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".topo-fixo");
  const menu = document.querySelector(".menu-principal");
  const toggle = document.querySelector(".menu-toggle");

  /* ✅ ANIMAÇÃO DE ENTRADA */
  header.style.opacity = "0";
  header.style.transform = "translateY(-40px)";

  setTimeout(() => {
    header.style.transition = "0.6s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);

  /* ✅ ENCOLHIMENTO NO SCROLL */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  /* ✅ MENU HAMBURGUER */
  toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });

  /* ✅ FECHAR MENU AO CLICAR EM LINK */
  document.querySelectorAll(".menu-principal a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
    });
  });

});
