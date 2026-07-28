/* ==========================================================================
   06-STATS-DROPDOWN.JS  —  3+ Years / 10+ Machines / 4 Trainings dropdown
   ডেস্কটপে hover (CSS নিজেই করে), মোবাইলে ট্যাপ করলে খোলে।
   আইটেম যোগ/বাদ দিতে index.html এর <ul class="stat-dropdown"> এ কাজ করুন।
   ========================================================================== */

(function () {
  var items = document.querySelectorAll(".stat-item");
  if (!items.length) return;

  var breakpoint = (window.SITE_CONFIG && window.SITE_CONFIG.mobileBreakpoint) || 860;

  function isMobile() { return window.innerWidth <= breakpoint; }

  function closeAll(except) {
    document.querySelectorAll(".stat-dropdown").forEach(function (menu) {
      if (menu !== except) menu.classList.remove("show");
    });
  }

  items.forEach(function (item) {
    var dropdown = item.querySelector(".stat-dropdown");
    if (!dropdown) return;

    item.addEventListener("click", function (e) {
      if (!isMobile()) return;
      e.stopPropagation();
      closeAll(dropdown);
      dropdown.classList.toggle("show");
    });
  });

  document.addEventListener("click", function () {
    if (isMobile()) closeAll(null);
  });
})();
