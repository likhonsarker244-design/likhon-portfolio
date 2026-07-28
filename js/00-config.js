/* ==========================================================================
   00-CONFIG.JS  —  সব সেটিং এক জায়গায়
   টাইপিং লেখা/স্পিড বদলাতে চাইলে শুধু এই ফাইলটাই বদলান।
   ========================================================================== */

window.SITE_CONFIG = {

  /* Hero-এর টাইপিং লাইন। নতুন লাইন যোগ করতে কমা দিয়ে লিখুন:
     roles: ["I am Electrical Engineer", "I am Maintenance Specialist"], */
  roles: [
    "I am Electrical Engineer"
  ],

  typing: {
    typeSpeed: 90,      // অক্ষর লেখার গতি (ms)
    deleteSpeed: 40,    // মোছার গতি (ms)
    holdTime: 1500,     // পুরো লেখা দেখানোর সময় (ms)
    headingSpeed: 55    // সেকশন হেডিং টাইপিং গতি (ms)
  },

  mobileBreakpoint: 860 // এর নিচে dropdown ট্যাপে খুলবে
};
