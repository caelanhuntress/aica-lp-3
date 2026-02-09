/* ============================================
   AI Roadmap Workshop — Landing Page Scripts
   ============================================ */

(function () {
  "use strict";

  // ---------- Sticky header shadow on scroll ----------
  var header = document.getElementById("site-header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ---------- FAQ: close other items when one opens ----------
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (this.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
})();
