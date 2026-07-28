/* ==========================================================================
   02-HEADER.JS  —  স্ক্রল করলে হেডারে ব্যাকগ্রাউন্ড আসে
   ========================================================================== */

(function () {
  var header = document.getElementById("header");
  if (!header) return;

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
})();
