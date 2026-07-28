# Likhon Sarker — Portfolio (Modular Version)

ডিজাইন আগের মতোই আছে। শুধু কোড আলাদা আলাদা ফাইলে ভাগ করা হয়েছে,
যাতে একটা জিনিস বদলালে অন্য কিছু নষ্ট না হয়।

## ফোল্ডার

```
index.html          → সব সেকশনের HTML (কমেন্ট দিয়ে ভাগ করা)
pic.jpeg            → প্রোফাইল ছবি
css/
  01-theme.css      → রঙ, ফন্ট, ছায়া (decoration এখানে বদলান)
  02-base.css       → reset, body, লিংক
  03-layout.css     → container, section, grid, button
  04-header.css     → উপরের মেনু বার
  05-hero.css       → প্রথম স্ক্রিন + প্রোফাইল ছবি
  06-stats.css      → 3+ / 10+ / 4 কার্ড ও hover dropdown
  07-cards.css      → About, Experience, Education, Skills, Contact কার্ড
  08-footer.css     → ফুটার
  09-animations.css → সব keyframes
  10-responsive.css → মোবাইল লেআউট
js/
  00-config.js          → টাইপিং লেখা ও স্পিড (সেটিং)
  01-year.js            → ফুটারের বছর
  02-header.js          → স্ক্রলে হেডার
  03-mobile-menu.js     → মোবাইল মেনু
  04-hero-typing.js     → "I am Electrical Engineer" টাইপিং
  05-heading-typing.js  → সেকশন হেডিং টাইপিং
  06-stats-dropdown.js  → stat dropdown (মোবাইল ট্যাপ)
```

## কোথায় কী বদলাবেন

| যা করতে চান | যে ফাইল খুলবেন |
|---|---|
| রঙ / ফন্ট / ছায়া বদলানো | `css/01-theme.css` |
| টাইপিং লেখা বা গতি | `js/00-config.js` |
| dropdown-এ নতুন আইটেম | `index.html` → সংশ্লিষ্ট `<ul class="stat-dropdown">` এ নতুন `<li>` |
| নতুন চাকরি/ট্রেনিং কার্ড | `index.html` → `<article class="tl-card">` ব্লক কপি |
| নতুন স্কিল | `index.html` → `<ul class="chips">` এ নতুন `<li>` |
| সেকশনের হেডিং লেখা | `index.html` → `data-text="..."` |
| মোবাইল লেআউট | `css/10-responsive.css` |

## GitHub Pages-এ চালানো

1. রিপোজিটরির root-এ সব ফাইল রাখুন (index.html, css/, js/, pic.jpeg)।
2. Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save।

> নোট: CSS ও JS ফাইলগুলো index.html-এ যে ক্রমে দেওয়া আছে সেই ক্রম বদলাবেন না।
