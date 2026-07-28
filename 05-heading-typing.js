/* ==========================================================================
   05-HEADING-TYPING.JS  —  স্ক্রল করলে সেকশন হেডিং টাইপ হয়
   HTML: <h2 class="typed-heading" data-text="আপনার লেখা"></h2>
   ========================================================================== */

(function () {
  var headings = document.querySelectorAll(".typed-heading");
  if (!headings.length) return;

  var cfg = (window.SITE_CONFIG && window.SITE_CONFIG.typing) || {};
  var speed = cfg.headingSpeed || 55;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      if (entry.target.dataset.done) return;

      entry.target.dataset.done = "true";

      var text = entry.target.dataset.text || "";
      var i = 0;

      (function write() {
        entry.target.textContent = text.substring(0, i);
        i++;
        if (i <= text.length) setTimeout(write, speed);
      })();
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

  headings.forEach(function (h) { observer.observe(h); });
})();
