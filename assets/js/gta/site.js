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
  var XR_CV = {
    en: "assets/docs/JiePengyu_CV_UnityXR_2025-09_EN.pdf",
    fr: "assets/docs/JiePengyu_CV_UnityXR_2025-09_FR.pdf",
    zh: "assets/docs/JiePengyu_CV_UnityXR_2025-09_ZH.pdf"
  };
  var root = document.documentElement;
  var shortcutsOn = true;

  function applyShortcutLabel() {
    var b = document.querySelector("[data-shortcuts-toggle]");
    if (!b) return;
    b.setAttribute("aria-pressed", shortcutsOn ? "true" : "false");
    var v = b.querySelector("[data-shortcuts-value]");
    if (v) v.textContent = I18N[lang][shortcutsOn ? "on" : "off"];
    document.documentElement.classList.toggle("shortcuts-off", !shortcutsOn);
  }

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
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var v = pack[el.getAttribute("data-i18n-title")];
      if (v != null) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-cv]").forEach(function (a) { a.href = CV[lang]; });
    document.querySelectorAll("[data-xr-cv]").forEach(function (a) { a.href = XR_CV[lang]; });
    applyShortcutLabel();
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
    shortcutsOn = read("rajayoux-shortcuts") !== "off";
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

    /* hero: entrance plays once; loading cycle pause/play (WCAG 2.2.2) */
    var hero = document.querySelector(".hero");
    if (hero) {
      setTimeout(function () { hero.classList.add("is-entered"); }, 700);
      var toggle = document.querySelector("[data-cycle-toggle]");
      if (toggle) {
        toggle.addEventListener("click", function () {
          var paused = hero.classList.toggle("is-paused");
          var key = paused ? "cyclePlay" : "cyclePause";
          toggle.setAttribute("data-i18n-label", key);
          toggle.setAttribute("aria-label", I18N[lang][key]);
        });
      }
    }

    /* details dialogs (Presage "View details") — native <dialog>: focus, Esc and top layer for free */
    document.querySelectorAll("[data-open-dialog]").forEach(function (b) {
      var d = document.getElementById(b.getAttribute("data-open-dialog"));
      if (!d || !d.showModal) return;
      b.addEventListener("click", function () { d.showModal(); });
      d.addEventListener("click", function (e) { if (e.target === d) d.close(); });   /* backdrop click */
    });

    /* iFruit phone = mobile menu */
    var ifruit = document.getElementById("ifruit");
    if (ifruit && ifruit.showModal) {
      var clock = ifruit.querySelector("[data-ifruit-time]");
      var tick = function () {
        if (clock) clock.textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" }).format(new Date());
      };
      document.querySelectorAll("[data-open-ifruit]").forEach(function (b) {
        b.addEventListener("click", function () { tick(); ifruit.showModal(); });
      });
      ifruit.addEventListener("click", function (e) {
        if (e.target === ifruit || e.target.closest("[data-close-ifruit]")) ifruit.close();
      });
    }

    /* keyboard shortcuts — the key caps on screen: D = download CV, C = contact, E = email */
    var sc = document.querySelector("[data-shortcuts-toggle]");
    if (sc) sc.addEventListener("click", function () {
      shortcutsOn = !shortcutsOn;
      store("rajayoux-shortcuts", shortcutsOn ? "on" : "off");
      applyShortcutLabel();
    });
    document.addEventListener("keydown", function (e) {
      if (!shortcutsOn || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (document.querySelector("dialog[open]")) return;
      var k = e.key.toLowerCase();
      if (k === "d") {
        var cv = document.querySelector(".story [data-cv]");
        if (cv) { e.preventDefault(); cv.click(); }
      } else if (k === "c") {
        var contact = document.getElementById("contact");
        if (contact) {
          e.preventDefault();
          contact.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
          var first = contact.querySelector("a, button");
          if (first) first.focus({ preventScroll: true });
        }
      } else if (k === "e") {
        var mail = document.querySelector("[data-shortcut-email]");
        if (mail) { e.preventDefault(); mail.click(); }
      }
    });

    /* nav: mark the section currently in view */
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.hero-nav a[href^="#"]'));
    if ("IntersectionObserver" in window && navLinks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          navLinks.forEach(function (a) {
            if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      navLinks.forEach(function (a) {
        var s = document.querySelector(a.getAttribute("href"));
        if (s) spy.observe(s);
      });
    }

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
