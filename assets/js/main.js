document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".topbar-toggle");
  var nav = document.querySelector(".mobile-nav");
  var themeKey = "quiz1-theme";

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function updateThemeButtons(theme) {
    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      var isDark = theme === "dark";
      button.textContent = isDark ? "Light mode" : "Dark mode";
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
    updateThemeButtons(theme);
  }

  var savedTheme = localStorage.getItem(themeKey);
  var initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(initialTheme);

  document.querySelectorAll(".sidebar-header, .topbar").forEach(function (container) {
    var themeButton = document.createElement("button");
    themeButton.className = "theme-toggle";
    themeButton.type = "button";
    themeButton.addEventListener("click", function () {
      setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
    container.appendChild(themeButton);
  });
  updateThemeButtons(initialTheme);

  var backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.textContent = "Top";
  backToTop.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var modal = document.createElement("div");
  modal.className = "image-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = '<div class="image-modal-content" role="dialog" aria-modal="true" aria-label="Enlarged image"><button class="image-modal-close" type="button" aria-label="Close image">Close</button><img class="image-modal-image" alt=""></div>';
  document.body.appendChild(modal);

  var modalImage = modal.querySelector(".image-modal-image");
  var closeModal = function () {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("main img").forEach(function (image) {
    image.classList.add("zoomable-image");
    image.setAttribute("tabindex", "0");
    image.addEventListener("click", function () {
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        image.click();
      }
    });
  });

  modal.querySelector(".image-modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});
