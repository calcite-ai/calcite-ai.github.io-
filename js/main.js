/* =============================================
   カルサイト ポートフォリオ JavaScript
   作成：NEXUS / FORGE
   ============================================= */

// --- スクロール時のナビゲーション影 ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(26, 74, 122, 0.12)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// --- スクロールアニメーション ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// アニメーション対象の要素を監視
document.querySelectorAll(
  '.strength-card, .service-card, .process-step, .hero-badge, .hero-title, .hero-sub, .hero-buttons, .hero-stats'
).forEach(el => {
  el.classList.add('animate-target');
  observer.observe(el);
});

// --- スムーズスクロール（ナビリンク） ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// --- 現在年をフッターに表示 ---
const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
