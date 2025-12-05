// =======================
// ELEMENTOS
// =======================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');

const highlightsViewport = document.getElementById('highlightsViewport');
const highlightsInner = document.getElementById('highlightsInner');
const prevHighlight = document.getElementById('prevHighlight');
const nextHighlight = document.getElementById('nextHighlight');

const testViewport = document.getElementById('testViewport');
const testInner = document.getElementById('testInner');
const prevTest = document.getElementById('prevTest');
const nextTest = document.getElementById('nextTest');


// =======================
// MENU MOBILE
// =======================
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// =======================
// NAVBAR + HERO
// =======================
function applyHeightsBasedOnScroll() {
  const viewportH = window.innerHeight;
  const scrolledToSecondFold = window.scrollY >= viewportH - 1;

  if (!scrolledToSecondFold) {
    navbar.style.height = '15vh';
    document.body.style.paddingTop = navbar.style.height;
    if (hero) hero.style.height = '85vh';
  } else {
    navbar.style.height = '10vh';
    document.body.style.paddingTop = navbar.style.height;
    if (hero) hero.style.height = '85vh';
  }
}

window.addEventListener('load', applyHeightsBasedOnScroll);
window.addEventListener('resize', applyHeightsBasedOnScroll);
window.addEventListener('scroll', applyHeightsBasedOnScroll);


// =======================
// ✅ CARROSSEL DESTAQUES (1 POR VEZ REAL)
// =======================
let highlightIndex = 0;

function getHighlightCardWidth() {
  const card = highlightsInner?.querySelector('.highlight-card');
  return card ? card.offsetWidth : 0;
}

function getHighlightTotal() {
  return highlightsInner
    ? highlightsInner.querySelectorAll('.highlight-card').length
    : 0;
}

function updateHighlights() {
  const cardWidth = getHighlightCardWidth();
  highlightsInner.style.transform = `translateX(-${highlightIndex * cardWidth}px)`;
}

prevHighlight?.addEventListener('click', () => {
  if (highlightIndex > 0) {
    highlightIndex--;
    updateHighlights();
  }
});

nextHighlight?.addEventListener('click', () => {
  const total = getHighlightTotal();
  if (highlightIndex < total - 1) {
    highlightIndex++;
    updateHighlights();
  }
});

window.addEventListener('resize', updateHighlights);
updateHighlights();


// =======================
// ✅ CARROSSEL DEPOIMENTOS (1 POR VEZ REAL)
// =======================
let testIndex = 0;

function getTestCardWidth() {
  const card = testInner?.querySelector('.testimonial-card');
  return card ? card.offsetWidth : 0;
}

function getTestTotal() {
  return testInner
    ? testInner.querySelectorAll('.testimonial-card').length
    : 0;
}

function updateTests() {
  const cardWidth = getTestCardWidth();
  testInner.style.transform = `translateX(-${testIndex * cardWidth}px)`;
}

prevTest?.addEventListener('click', () => {
  if (testIndex > 0) {
    testIndex--;
    updateTests();
  }
});

nextTest?.addEventListener('click', () => {
  const total = getTestTotal();
  if (testIndex < total - 1) {
    testIndex++;
    updateTests();
  }
});

window.addEventListener('resize', updateTests);
updateTests();
