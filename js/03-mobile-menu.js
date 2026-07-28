/* ==========================================================================
   03-MOBILE-MENU.JS  —  মোবাইলে মেনু খোলা/বন্ধ
   ========================================================================== */

(function () {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("navLinks");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
})();
