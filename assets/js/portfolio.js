const I18N = {
  en: {
    docTitle: "Pengyu Jie — Software Engineer",
    docDesc: "Software Engineer in Europe. Fullstack, product and platforms. Available now.",
    navWork: "Work",
    navContact: "Contact",
    kicker: "Pengyu Jie · Rouen",
    h1: "Software Engineer",
    lede: "Fullstack, product and platforms, EN/FR.",
    available: "Available now",
    downloadCv: "Download CV",
    seeWork: "See work",
    xrResume: "XR resume",
    aboutKicker: "About",
    aboutTitle: "About",
    about1: "I’m Pengyu Jie — raJayoux to collaborators. I study Software Engineering at ESIGELEC in Rouen, and I just finished six months shipping production Angular and C#/.NET at Presage Care in Paris.",
    about2: "I like building the parts people actually use: portals, APIs, auth, and the quiet platform work that keeps a product honest. XR and Unity are how I learned to ship. They are background, not the headline.",
    stackKicker: "Stack",
    stackTitle: "Tools I reach for",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    xr: "XR (background)",
    workKicker: "Selected work",
    workTitle: "Case studies",
    presageTitle: "Presage Care",
    presageRole: "Fullstack Software Engineering Intern",
    presageDates: "Feb 2026 – Aug 2026 · Paris, PariSanté Campus",
    presage1: "Shipped 88 merged pull requests across a production healthcare platform: institute Angular portal, patient/family web app, and ASP.NET Core / EF Core backend and identity services.",
    presage2: "Built portal features end-to-end — monitoring workflows, prevention views, institute admin, questionnaire-driven UI, notifications, calendar — on BFF-proxied REST APIs with RxJS, route guards, and RBAC.",
    presage3: "Designed and shipped a Weekly Brief dashboard: rendered a backend-generated HTML report in Angular, and embedded Google Maps in a readonly report mode without breaking the live dashboard.",
    motoTitle: "Moto Micro Tours",
    motoRole: "Fullstack · personal / coursework",
    motoDates: "Oct 2025 – Jan 2026",
    moto1: "Built a motorcycle micro-tour marketplace: discovery, booking approval, mock payment, real-time chat, completion, and reviews.",
    moto2: "Chat sends over REST and receives in real time on SignalR hubs, with polling kept as fallback.",
    moto3: "Role-aware booking workflows: participant/motard authorization, transactional seat reservation, refund handling, two-sided completion, and gated reviews.",
    motoLink: "Source on GitHub",
    dashTitle: "Dashcam Cloud Service",
    dashRole: "Fullstack · personal",
    dashDates: "Jan 2026 – Apr 2026",
    dash1: "Video tamper-detection: on-device perceptual hashes stream to Supabase, then a validator re-hashes submitted video and matches with Hamming distance.",
    dash2: "Three services — capture client, Angular validator portal, ASP.NET Core API with ffmpeg frame extraction and JWT/role checks.",
    dash3: "Failed detections classified by root cause (timestamp drift, visual transform, extraction failure) across a five-case tamper matrix.",
    dashLink: "Source on GitHub",
    resoTitle: "Resonova",
    resoBody: "Personal AI radio companion: playlist or track list becomes a hosted cast — Gemini multi-speaker scripts, streamed TTS, and a browser player that crossfades commentary with live Spotify playback (OAuth/PKCE + Web Playback SDK).",
    xrStrip: "XR · MTE 2023 Gold + Special Award · CCC 1st provincial / 2nd national",
    certMte: "MTE",
    certProv: "Provincial",
    certNat: "National",
    contactKicker: "Contact",
    contactTitle: "Let’s work",
    contactLead: "Email me, write on LinkedIn, or leave a short note. I reply quickly.",
    emailLabel: "Email",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    thanks: "Sent. I’ll get back to you.",
    footer: "© 2026 raJayoux",
    github: "GitHub"
  },
  fr: {
    docTitle: "Pengyu Jie — Software Engineer",
    docDesc: "Ingénieur logiciel en Europe. Fullstack, produit et plateformes. Disponible maintenant.",
    navWork: "Travail",
    navContact: "Contact",
    kicker: "Pengyu Jie · Rouen",
    h1: "Software Engineer",
    lede: "Fullstack, produit et plateformes, EN/FR.",
    available: "Disponible maintenant",
    downloadCv: "Télécharger le CV",
    seeWork: "Voir le travail",
    xrResume: "CV XR",
    aboutKicker: "À propos",
    aboutTitle: "À propos",
    about1: "Je suis Pengyu Jie — raJayoux pour les collaborateurs. J’étudie le génie logiciel à l’ESIGELEC à Rouen, et je viens de passer six mois à livrer de l’Angular et du C#/.NET en production chez Presage Care à Paris.",
    about2: "J’aime construire ce que les gens utilisent vraiment : portails, API, authentification, et le travail de plateforme discret qui tient un produit. XR et Unity, c’est comment j’ai appris à livrer. C’est le décor, pas le titre.",
    stackKicker: "Stack",
    stackTitle: "Outils que j’utilise",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Outils",
    xr: "XR (arrière-plan)",
    workKicker: "Travail choisi",
    workTitle: "Études de cas",
    presageTitle: "Presage Care",
    presageRole: "Stagiaire ingénieur logiciel fullstack",
    presageDates: "Fév. 2026 – août 2026 · Paris, PariSanté Campus",
    presage1: "88 pull requests fusionnées sur une plateforme de santé en production : portail Angular institut, application patient/famille, et services backend / identité ASP.NET Core et EF Core.",
    presage2: "Fonctionnalités portail de bout en bout — suivi, prévention, admin institut, UI de questionnaires, notifications, calendrier — sur des API REST via BFF, avec RxJS, garde de routes et RBAC.",
    presage3: "Tableau de bord Weekly Brief : rapport HTML généré côté serveur affiché dans Angular, et widget Google Maps en lecture seule sans casser le tableau de bord live.",
    motoTitle: "Moto Micro Tours",
    motoRole: "Fullstack · personnel / cours",
    motoDates: "Oct. 2025 – janv. 2026",
    moto1: "Place de marché de micro-tours moto : découverte, validation de réservation, paiement simulé, chat temps réel, clôture et avis.",
    moto2: "Le chat envoie en REST et reçoit en temps réel via SignalR, avec polling en repli.",
    moto3: "Parcours de réservation selon le rôle : autorisation participant/motard, réservation transactionnelle, remboursement, clôture bilatérale et avis conditionnés.",
    motoLink: "Code sur GitHub",
    dashTitle: "Dashcam Cloud Service",
    dashRole: "Fullstack · personnel",
    dashDates: "Janv. 2026 – avr. 2026",
    dash1: "Détection de falsification vidéo : hashes perceptuels captés à l’enregistrement vers Supabase, puis re-hachage de la vidéo soumise et comparaison Hamming.",
    dash2: "Trois services — client de capture, portail Angular, API ASP.NET Core avec extraction ffmpeg et contrôle JWT/rôles.",
    dash3: "Échecs classés par cause (dérive temporelle, transformée visuelle, extraction) sur une matrice de cinq cas.",
    dashLink: "Code sur GitHub",
    resoTitle: "Resonova",
    resoBody: "Compagnon radio IA personnel : une playlist devient une session — scripts Gemini multi-voix, TTS en flux, et un lecteur navigateur qui enchaîne commentaire et lecture Spotify (OAuth/PKCE + Web Playback SDK).",
    xrStrip: "XR · MTE 2023 Or + Prix spécial · 1er provincial / 2e national",
    certMte: "MTE",
    certProv: "Provincial",
    certNat: "National",
    contactKicker: "Contact",
    contactTitle: "Travaillons ensemble",
    contactLead: "Écrivez-moi par e-mail, sur LinkedIn, ou laissez un court message. Je réponds vite.",
    emailLabel: "E-mail",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    submit: "Envoyer",
    thanks: "Envoyé. Je vous répondrai.",
    footer: "© 2026 raJayoux",
    github: "GitHub"
  },
  zh: {
    docTitle: "揭鹏宇 — 软件工程师",
    docDesc: "欧洲软件工程师。全栈、产品与平台。现在可入职。",
    navWork: "作品",
    navContact: "联系",
    kicker: "揭鹏宇 · 鲁昂",
    h1: "软件工程师",
    lede: "全栈、产品与平台，英/法工作环境。",
    available: "现在可入职",
    downloadCv: "下载简历",
    seeWork: "查看作品",
    xrResume: "XR 简历",
    aboutKicker: "关于",
    aboutTitle: "关于",
    about1: "我是揭鹏宇，协作时也用 raJayoux。我在鲁昂 ESIGELEC 读软件工程硕士，刚在巴黎 Presage Care 做完六个月的生产环境 Angular 与 C#/.NET 全栈实习。",
    about2: "我喜欢做真正会被用到的部分：门户、接口、鉴权，以及让产品站得住的平台工作。XR 和 Unity 是我学会交付的背景，不是现在的身份。",
    stackKicker: "技术",
    stackTitle: "常用工具",
    frontend: "前端",
    backend: "后端",
    tools: "工具",
    xr: "XR（背景）",
    workKicker: "精选作品",
    workTitle: "案例",
    presageTitle: "Presage Care",
    presageRole: "全栈软件工程实习生",
    presageDates: "2026年2月 – 2026年8月 · 巴黎 PariSanté Campus",
    presage1: "在生产医疗平台合并 88 个 pull request：机构端 Angular 门户、患者/家属 Web 应用，以及 ASP.NET Core / EF Core 后端与身份服务。",
    presage2: "端到端实现门户功能：监测流程、预防建议、机构管理、问卷驱动界面、通知与日历；经 BFF 代理 REST，配合 RxJS、路由守卫与 RBAC。",
    presage3: "独立设计并上线 Weekly Brief 仪表盘：在 Angular 中解析后端生成的 HTML 报告，并以只读方式嵌入 Google Maps，不影响实时仪表盘。",
    motoTitle: "Moto Micro Tours",
    motoRole: "全栈 · 个人 / 课程",
    motoDates: "2025年10月 – 2026年1月",
    moto1: "摩托车微旅行市场：发现、预订审批、模拟支付、实时聊天、完结与评价。",
    moto2: "聊天经 REST 发送，经 SignalR 实时接收，轮询作为回退。",
    moto3: "按角色的预订流程：骑手/组织者授权、事务性座位预留、退款、双方确认完结与受控评价。",
    motoLink: "GitHub 源码",
    dashTitle: "Dashcam Cloud Service",
    dashRole: "全栈 · 个人",
    dashDates: "2026年1月 – 2026年4月",
    dash1: "视频篡改检测：录制时感知哈希写入 Supabase，校验端对提交视频再哈希并以汉明距离比对。",
    dash2: "三个独立服务——采集客户端、Angular 校验门户、带 ffmpeg 抽帧与 JWT/角色校验的 ASP.NET Core API。",
    dash3: "失败按根因分类（时间戳漂移、视觉变换、抽帧失败），覆盖五类篡改矩阵。",
    dashLink: "GitHub 源码",
    resoTitle: "Resonova",
    resoBody: "个人 AI 电台：歌单或曲目列表生成节目——Gemini 双人主持脚本、流式 TTS，以及在浏览器中把解说与 Spotify 播放交叉淡入（OAuth/PKCE + Web Playback SDK）。",
    xrStrip: "XR · MTE 2023 金奖+特别奖 · 省级一等 / 国家二等",
    certMte: "MTE",
    certProv: "省级",
    certNat: "国家级",
    contactKicker: "联系",
    contactTitle: "开始合作",
    contactLead: "发邮件、LinkedIn，或在下面留一句。我会尽快回复。",
    emailLabel: "邮箱",
    name: "姓名",
    email: "邮箱",
    message: "留言",
    submit: "发送",
    thanks: "已发送，我会回复。",
    footer: "© 2026 raJayoux",
    github: "GitHub"
  }
};

function applyLang(lang) {
  const pack = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  document.title = pack.docTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", pack.docDesc);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key] != null) el.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (pack[key] != null) el.setAttribute("value", pack[key]);
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
  const xr = {
    en: "assets/docs/JiePengyu_CV_UnityXR_2025-09_EN.pdf",
    fr: "assets/docs/JiePengyu_CV_UnityXR_2025-09_FR.pdf",
    zh: "assets/docs/JiePengyu_CV_UnityXR_2025-09_ZH.pdf"
  };
  const xrLink = document.querySelector('a[data-i18n="xrResume"]');
  if (xrLink) xrLink.href = xr[lang] || xr.en;
  try { localStorage.setItem("rajayoux-lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = (() => { try { return localStorage.getItem("rajayoux-lang"); } catch (e) { return null; } })();
  applyLang(saved && I18N[saved] ? saved : "en");
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const header = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("contact-form");
  const thanks = document.getElementById("form-ok");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        _subject: "Message from rajayoux.github.io"
      };
      fetch("https://formspree.io/f/xbjvwrwo", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).catch(() => {});
      form.classList.add("sent");
      if (thanks) thanks.classList.add("show");
    });
  }
});
