/* ==========================================================================
   04-HERO-TYPING.JS  —  "I am Electrical Engineer" টাইপিং অ্যানিমেশন
   লেখা বদলাতে js/00-config.js এর roles বদলান।
   ========================================================================== */

(function () {
  var target = document.getElementById("typed");
  if (!target) return;

  var cfg = window.SITE_CONFIG || {};
  var roles = cfg.roles || ["I am Electrical Engineer"];
  var speed = cfg.typing || {};

  var typeSpeed   = speed.typeSpeed   || 90;
  var deleteSpeed = speed.deleteSpeed || 40;
  var holdTime    = speed.holdTime    || 1500;

  var roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    var current = roles[roleIndex];
    target.textContent = current.substring(0, charIndex);

    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, holdTime);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
  }

  tick();
})();
