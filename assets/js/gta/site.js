/* GTA-mimic homepage behaviour — vanilla, no dependencies.
 * Language (I18N from i18n.js), Night/Day theme, desktop composition scaling. */
(function () {
  "use strict";

  var LANGS = ["en", "fr", "zh"];
  var CV = {
    en: "assets/docs/resume-fullstack/Fullstack_JiePengyu_CV_EN_BASELINE.pdf",
    fr: "assets/docs/resume-fullstack/Fullstack_JiePengyu_CV_EN_BASELINE.pdf",
    zh: "assets/docs/resume-fullstack/Fullstack_JiePengyu_CV_ZH_BASELINE.pdf"
  };
  var root = document.documentElement;

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ---- language ---- */
  var lang = "en";

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    var pack = I18N[lang];
    root.lang = lang === "zh" ? "zh-Hans" : lang;
    document.title = pack.docTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pack.docDesc);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = pack[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = pack[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var v = pack[el.getAttribute("data-i18n-label")];
      if (v != null) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-cv]").forEach(function (a) { a.href = CV[lang]; });
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.setAttribute("aria-label", pack.langLabel);
    });
    applyThemeLabels();
    store("rajayoux-lang", lang);
  }

  /* ---- theme ---- */
  function theme() { return root.getAttribute("data-theme") === "day" ? "day" : "night"; }

  function applyThemeLabels() {
    var pack = I18N[lang], t = theme();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      var v = b.querySelector("[data-theme-value]");
      if (v) v.textContent = t === "day" ? pack.themeDay : pack.themeNight;
      b.setAttribute("aria-label", t === "day" ? pack.themeLabelDay : pack.themeLabelNight);
    });
  }

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    store("rajayoux-theme", t);
    applyThemeLabels();
  }

  /* ---- desktop composition: one 1440 px frame scaled as a whole (1024–1440 px) ---- */
  var stage = document.querySelector(".stage");
  function fit() {
    if (!stage) return;
    var w = root.clientWidth;
    stage.style.zoom = w >= 1024 ? String(Math.min(1, w / 1440)) : "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = read("rajayoux-lang");
    applyLang(saved && LANGS.indexOf(saved) >= 0 ? saved : "en");

    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]);
      });
    });
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.addEventListener("click", function () { setTheme(theme() === "day" ? "night" : "day"); });
    });

    fit();
    window.addEventListener("resize", fit);

    /* nav strip sticks to the top once the hero card has scrolled away (desktop) */
    var nav = document.querySelector(".hero-nav");
    var card = document.querySelector(".hero-card");
    if (nav && card && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        var e = entries[0];
        nav.classList.toggle("is-stuck", !e.isIntersecting && e.boundingClientRect.top < 0);
      }).observe(card);
    }
  });
})();
