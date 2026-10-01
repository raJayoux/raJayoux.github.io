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

  /* Noto Sans SC is only fetched for 中文 (≈120 KB); elsewhere the few CJK glyphs use the system font. */
  function loadCjkFont() {
    if (document.getElementById("font-cjk")) return;
    var l = document.createElement("link");
    l.id = "font-cjk"; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600&display=swap";
    document.head.appendChild(l);
  }

  /* ---- language ---- */
  var lang = "en";

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    var pack = I18N[lang];
    if (lang === "zh") loadCjkFont();
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
    document.querySelectorAll(".if-app[data-lang-toggle]").forEach(function (b) {
      b.setAttribute("aria-label", pack.appLanguage + " — " + pack.langLabel);
    });
    applyThemeLabels();
    store("pengyujie-lang", lang);
  }

  /* ---- theme ---- */
  function theme() { return root.getAttribute("data-theme") === "day" ? "day" : "night"; }

  function applyThemeLabels() {
    var pack = I18N[lang], t = theme();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      var v = b.querySelector("[data-theme-value]");
      if (v) v.textContent = t === "day" ? pack.themeDay : pack.themeNight;
      if (b.classList.contains("if-app")) b.setAttribute("aria-label", pack.appTheme + " — " + (t === "day" ? pack.themeLabelDay : pack.themeLabelNight));
    });
  }

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    store("pengyujie-theme", t);
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
    shortcutsOn = read("pengyujie-shortcuts") !== "off";
    var saved = read("pengyujie-lang");
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

    /* Scene B joins the loading cycle once its art has loaded (after the page, off the critical path).
       The A-only loop and the A→B cycle are identical for their first 6.5 s, so if B is ready before
       Scene A's dip-out we switch at the same moment in time (no visible change, B follows this A);
       otherwise we wait for the loop boundary, when every layer is at Scene A's start. */
    var desktopMotion = matchMedia("(prefers-reduced-motion: no-preference)");   /* desktop + mobile poster */
    if (hero && desktopMotion.matches) {
      window.addEventListener("load", function () {
        var imgs = Array.prototype.slice.call(document.querySelectorAll(".hero-scene-b img, .hero-breakout-b img"));
        document.querySelectorAll(".hero-scene-b source, .hero-breakout-b source").forEach(function (s) {
          s.srcset = s.getAttribute("data-srcset");
        });
        Promise.all(imgs.map(function (img) {
          if (img.getAttribute("data-srcset")) img.srcset = img.getAttribute("data-srcset");
          img.src = img.getAttribute("data-src");
          return img.decode ? img.decode() : Promise.resolve();
        })).then(function () {
          var dip = hero.querySelector(".hero-dip");
          var dipAnim = dip.getAnimations ? dip.getAnimations()[0] : null;
          var sceneMs = 7000, safeUntil = 6400;     /* stay clear of the 6.5 s scene swap */
          var t = dipAnim && dipAnim.currentTime != null ? dipAnim.currentTime % sceneMs : null;
          if (t != null && t < safeUntil) {
            hero.classList.add("cycle-ab");
            hero.getAnimations({ subtree: true }).forEach(function (a) {
              if (/^(cycle2|m2)-/.test(a.animationName || "")) a.currentTime = t;
            });
          } else {
            dip.addEventListener("animationiteration", function swap() {
              hero.classList.add("cycle-ab");
              dip.removeEventListener("animationiteration", swap);
            });
          }
        }).catch(function () { /* Scene B failed to load: keep the Scene A loop */ });
      });
    }

    /* Desktop and mobile cycles share some keyframes and not others, so crossing 1024 px restarts only
       part of the layers and the scenes drift apart. Restart every layer together from Scene A's start. */
    var bp = matchMedia("(min-width: 1024px)");
    var restartCycle = function () {
      if (!hero) return;
      hero.classList.add("cycle-restart");
      void hero.offsetWidth;            /* flush styles so `animation: none` takes effect */
      hero.classList.remove("cycle-restart");
    };
    if (bp.addEventListener) bp.addEventListener("change", restartCycle);
    else if (bp.addListener) bp.addListener(restartCycle);

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
      store("pengyujie-shortcuts", shortcutsOn ? "on" : "off");
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
