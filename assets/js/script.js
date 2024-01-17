function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav-item-container a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.selector == "cs61a.html") return;
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-item-container a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    
    if ($('#nav-item-container #nav-home a').hasClass("active")) {
        $("#nav-topbar").css("display", "none")
        $("#nav-topbar-about").css("display", "block")
    } else {
        $("#nav-topbar").css("display", "block")
        $("#nav-topbar-about").css("display", "none")

    }
}


$(document).ready(function() {

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    

    // MENU
    $(".menu-button").click(function() {
        $("#grayed-out-box").css("display", "block")
        $("#nav-sidebar").css("display", "block")
        $("#grayed-out-box").addClass("nav-open")
        $("body").css("overflow-y", "hidden")
    })

    $("#grayed-out-box").click(function() {
        $("#grayed-out-box").css("display", "none")
        $("#video-container").css("z-index", "-10")

        $("#grayed-out-box").removeClass("video-open")
        $("iframe").css("display", "none");
        $("body").css("overflow-y", "auto")

        $("iframe").each(function() { 
            var src= $(this).attr('src');
            $(this).attr('src',src);  
        });

        
    })

    $('#sidebar-exit').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
    })

    $('#menu-items a').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
        $('#menu-items a').removeClass("on")
        $(this).addClass("on")
    })

    $('#sidebar-heading a').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
        $('#menu-items a').removeClass("on")
        $(this).addClass("on")
    })


    // WORK
    // $(".bar").click(function () { 
    //     if ($(this).hasClass("show-text")) { 
    //         $(this).removeClass("show-text"); 
    //         $(this).find(".close").css("display", "none");
    //         $(this).find(".learn-more").css("display", "table-cell");
    //         $(this).parent().find(".description").css("display","none");
    //     } else {
    //         $(this).addClass("show-text"); 
    //         $(this).find(".close").css("display", "table-cell");
    //         $(this).find(".learn-more").css("display", "none");
    //         $(this).parent().find(".description").css("display","block");
    //     }
    // });

    //DANCE
    $(".thumbnail").hover(function() {
        $(this).find(".overlay").css("display", "inline-block");
        $(this).find(".non-overlay").css("display", "none");
        $('body').css('cursor', 'pointer')
        $(this).find(".dance-label").css("display", "inline-block");
    }, function() {
        $(this).find(".non-overlay").css("display", "inline-block");
        $(this).find(".overlay").css("display", "none");
        $('body').css('cursor', 'default')
        $(this).find(".dance-label").css("display", "none");
    })

    $(".thumbnail").click(function() {
        $("#video-container").css("z-index", "20");
        $("body").css("overflow-y", "hidden");
    }
    )

    $("#motorRide").click(function() {
        $("#motorRide-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    $("#aWinter").click(function() {
        $("#aWinter-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    $("#aGala").click(function() {
        $("#aGala-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    $("#Swimming").click(function() {
        $("#Swimming-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    $("#bikeRide").click(function() {
        $("#bikeRide-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    $("#aLife").click(function() {
        $("#aLife-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
    })

    // CONTACT
    $("#emailer").on("submit", function(){
        $.ajax({
            url: "https://formspree.io/f/xbjvwrwo", 
            method: "POST",
            data: {
                    name: $('#emailer').find('input[name="name"]').val(),
                    email: $('#emailer').find('input[name="email"]').val(),
                    message: $('#emailer').find($('#message')).val(),
                    _subject: "Message from rajayoux.github.io",
                },
            dataType: "json"
        });
        $("#emailer").css("display",'none')
        $("#received-message").css("display", 'block')
        return false;
    })
});

//Fade in
window.addEventListener('load', function() {
    // select the element with the fade-in class
    const fadeInElement = document.querySelectorAll("#home-title-container");
    fadeInElement.forEach(element => {
        element.classList.add('fade-in')
    })
    getBingwallpaper();
  })

//Get BingWallpaper
function getBingwallpaper(){
    // Get request to the API endPoint
    fetch("https://bing.biturl.top/?resolution=1920&format=json&index=0")
    .then(response => response.json())
    .then(data => {
        var BingWallpaper = document.getElementById("home");
        BingWallpaper.style.backgroundImage = "url(" + data.url + ")";
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    //language Switcher
    const languageSwitcher = document.getElementById("language-switcher");
    const languageOptions = languageSwitcher.querySelectorAll("span");
    const translatableElements = document.querySelectorAll("[data-translatable]");

    const translations = {
    en: {
        // English translations here
        hello: "hello, i am",
        tagline: "Virtual Reality // Innovator // Metal Rock",
        about: "about",
        work: "work",
        lounge: "lounge",//could be highlights
        contact: "contact",
        biotextPr1: "Hello! My name is raJayoux(Jie Pengyu) and I am a fourth year undergraduate student studying Computer Science(Software Engineering) at the Hainan Vocational University of Science and Technology.",
        biotextPr2: "I am an aspiring engineer and designer, who is passionate about creating innovative and impactful products and solutions that combine VR/AR and artificial intelligence. I have completed several projects and won several awards in these fields as well. I have also published my works on Github and participated in online communities such as Reddit, where I created an auto reply bot used my customized AI, and received positive feedbacks from the users.",
        biotextPr3: "In my free time, I enjoy exploring new places, riding bikes, workout, and metal rock music. I like to try new things and challenge myself, like learning new sports or skills. I also like to share my hobbies and interests with others through social media and online platforms.",
        biotextPr4: "Keep scrolling to learn more about my work experience and involvement in activities and take a look at my life moments. Interested in working/making friends with me? ",
        bioContact: "Contact me here",
        resume: "See Full Resume",
        wechatbot: "Reply Bot on Wechat",
        wechatposition: "Project Collaborator, Manager",
        wechatdate: " August 2023 - Present ",
        redditbot: "Auto Reply Bot on Reddit",
        redditpos: "Project Collabrator, Manager, Designer",
        redditdate: " July 2023 - Sept 2023 ",
        intern1: " Haikou Zhongtian Computer Technology // VR Applications and Games Dev Intern ",
        intern1date: " June 2023 - August 2023 ",
        CTM: "Journey of CTM",
        CTMpos: "Project Manager, Game Designer ",
        CTMdate: " April 2023 - Oct 2023 ",
        intern2: " Huapu Zhilian (Beijing) Technology // Software Engineering Intern ",
        intern2date: " July 2022 - August 2022 ",
        cs61a: "UC Berkeley cs61a",
        cs61apos: " Self-taught Learning ",
        cs61adate: " June 2022 - Dec 2022 ",
        cyberRenai: "Cyber Renaissance (VR Game)",
        cyberRenaipos: " Project Manager, Game Designer ",
        cyberRenaidate: " May 2022 - July 2022 ",
        Chinesehanzi: "Chinese Characters Quest (VR Game)",
        Chinesehanzipos: " Project Manager, Game Designer ",
        Chinesehanzidate: " Spring 2022 - Fall 2022 ",
        contactmes: "Email me at",
        contactmesfix: " or leave me a message below, and I will get back to you as soon as I can!",
        emname: "name",
        em: "email",
        mes: "message",
        submit: "submit!",
        thanks: " Sent! Thanks for your message! ",
        certifi: " © 2023 raJayoux. All Rights Reserved. "
    },
    zh: {
        // Chinese translations here
        hello: "你好，我是",
        tagline: "虚拟现实 // 小发明家 // 金属摇滚",
        about: "我",
        work: "工作经历",
        lounge: "生活剪影",
        contact: "联系我",
        biotextPr1: "你好！我叫raJayoux（揭鹏宇），是海南科技职业大学计算机科学（软件工程）专业的四年级本科生。",
        biotextPr2: "我是一名有抱负的工程师和设计师，热衷于创造结合VR/AR和人工智能的创新和有影响力的产品和解决方案。我在这些领域完成了多个项目，并获得了多个奖项。我还把我的作品发布在Github上，并参与了一些在线社区，比如Reddit，我在那里用我定制的AI创建了一个自动回复机器人，并得到了用户的积极反馈。",
        biotextPr3: "在我的空闲时间，我喜欢探索新地方，骑自行车，锻炼身体，还有金属摇滚音乐。我喜欢尝试新事物，挑战自我，比如学习新的运动或技能。我也喜欢通过社交媒体和在线平台，和别人分享我的爱好和兴趣。",
        biotextPr4: "继续向下滚动，了解更多关于我的工作经验和活动，还有我的生活瞬间。有兴趣和我合作吗？",
        bioContact: "在这里联系我",
        resume: "查看简历（英文）",
        wechatbot: "微信智能回复助理",
        wechatposition: "项目参与者、项目经理",
        wechatdate: " 2023 年 八月 - 现在 ",
        redditbot: "Reddit自动回复机器人",
        redditpos: "项目参与者，管理者，设计师",
        redditdate: " 2023 年 7 月 - 2023 年 9 月 ",
        intern1: " 海口中天计算机服务技术公司 // VR应用与游戏开发实习生 ",
        intern1date: " 2023 年 6 月 - 2023 年 8 月 ",
        CTM: "中草药之旅",
        CTMpos: " 项目经理、游戏设计师 ",
        CTMdate: " 2023 年 4 月 - 2023 年 10 月 ",
        intern2: " 华普智联（北京）科技有限公司 // 软件工程实习生 ",
        intern2date: " 2022 年 7 月 - 2022 年 8 月 ",
        cs61a: "加州大学伯克利分校 cs61a",
        cs61apos: " 自学 ",
        cs61adate: " 2022 年 6 月 - 2022 年 12 月 ",
        cyberRenai: "奇幻工作室（VR 游戏）",
        cyberRenaipos: " 项目经理、游戏设计师 ",
        cyberRenaidate: " 2022 年 5 月 - 2022 年 7 月 ",
        Chinesehanzi: "趣味汉字（VR 游戏）",
        Chinesehanzipos: " 项目经理，游戏设计师 ",
        Chinesehanzidate: " 2022 年 春季 - 2022 年 秋季 ",
        contactmes: "请通过此邮箱联系我",
        contactmesfix: "或者在下面给我留言，我会尽快回复您！",
        emname: "姓名",
        em: "您的邮箱",
        mes: "写下您想对我说的话",
        submit: "提交!",
        thanks: " 发送成功！谢谢您的消息！ ",
        certifi: " © 2023 揭鹏宇. 版权所有. "
    },
    fr: {
        // French translations here
        hello: "bonjour, je suis",
        tagline: "Créateur de réalité virtuelle // petit inventeur // fan de rock métal",
        about: "à propos",
        work: "expérience",
        lounge: "silhouette de vie",
        contact: "Contactez-moi",
        biotextPr1: "Bonjour ! Je m'appelle raJayoux(Jie Pengyu) et je suis un étudiant de quatrième année en informatique(ingénierie logicielle) à l'Université des sciences et technologies professionnelles du Hainan Chine.",
        biotextPr2: "Je suis un ingénieur et un designer émérite, qui est passionné par la conception de produits et de solutions révolutionnaires et percutants qui fusionnent la réalité virtuelle/augmentée et l'intelligence artificielle. J'ai accompli plusieurs projets et décroché plusieurs distinctions dans ces domaines également. J'ai également diffusé mes œuvres sur Github et intégré des communautés en ligne comme Reddit, où j'ai élaboré un bot de réplique automatique exploitant mon IA sur mesure, et recueilli des éloges des utilisateurs.",
        biotextPr3: "Durant mes moments libres, j'aime visiter des endroits inédits, pratiquer le cyclisme, sculpter mon corps et écouter de la musique hard rock. J'aime expérimenter de nouvelles choses et me mettre au défi, comme acquérir de nouveaux sports ou compétences. J'aime aussi échanger sur mes hobbies et mes affinités avec les autres sur les réseaux sociaux et les plateformes en ligne.",
        biotextPr4: "Découvrez mon parcours et mon engagement dans des activités et profitez d'un aperçu de mes moments de vie. Intéressé(e) à collaborer/sympathiser avec moi ?",
        bioContact: "Contactez-moi ici",
        resume: "Voir le CV (anglais)",
        wechatbot : "Interlocuteur automatisé sur WeChat",
        wechatposition : "Coéquipier de projet, Dirigeant",
        wechatdate : " Août 2023 - maintenant ",
        redditbot: "Bot de réponse automatique sur Reddit",
        redditpos: "Collaborateur de projet, gestionnaire, concepteur",
        redditdate: " juillet 2023 - septembre 2023 ",
        intern1: " Haikou Zhongtian Computer Service Technology Co., Ltd. // Stagiaire en développement d'applications et de jeux VR ",
        intern1date: " Juin 2023 - août 2023 ",
        CTM: "Voyage de la phytothérapie chinoise",
        CTMpos: " Chef de projet, Game Designer ",
        CTMdate: " Avril 2023 - octobre 2023 ",
        intern2: " Huapu Zhilian (Beijing) Technology Co., Ltd. // Stagiaire en génie logiciel ",
        intern2date: " Juillet 2022 - août 2022 ",
        cs61a: "UC Berkeley cs61a",
        cs61apos: " auto-apprentissage ",
        cs61adate: " Juin 2022 - décembre 2022 ",
        cyberRenai: "Fantasy Studio (Jeu VR)",
        cyberRenaipos: " Chef de projet, Game Designer ",
        cyberRenaidate: " Mai 2022 - Juillet 2022 ",
        Chinesehanzi: "Caractères chinois amusants (jeu VR)",
        Chinesehanzipos: " Chef de projet, game designer ",
        Chinesehanzidate: " Printemps 2022 - Automne 2022 ",
        contactmes: "Envoyez-moi un email à",
        contactmesfix: "ou laissez-moi un message ci-dessous, et je vous répondrai dès que possible !",
        submit: "soumission!",
        thanks: " Envoyé ! Merci pour votre message ! ",
        certifi: " © 2023 raJayoux. Tous droits réservés. "
    },
    };



    // Use let for variables that need to change: Use let for variables whose values might need to be updated during the program's execution.
    // Use const for variables that remain fixed: Use const for variables that you intend to keep constant throughout the program to prevent accidental reassignments.
    let currentLanguage = "en"; // Set initial language

    languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const newLanguage = option.id;
        changeLanguage(newLanguage);
        });
    });

    function changeLanguage(language) {
    currentLanguage = language;
    translatableElements.forEach((element) => {
// you can replace translatable with any other name you prefer. Just ensure consistency throughout your code:
// Use the same name in the HTML attribute (data-your-chosen-name).
// Use the same name when accessing it in JavaScript (element.dataset.yourChosenName).
        const key = element.dataset.translatable;

        if (element.tagName.toLowerCase() === "input") {
            // If it's a button, update its value
            element.value = translations[language][key];
        } else {
            // Otherwise, update its text content as usual
            element.textContent = translations[language][key];
        }
        

        const fontForLanguage = {
            en: "Warsaw Gothi", // Font for English
            zh: "SimSun", // Font for Chinese
            fr: "Warsaw Gothi", // Font for French
            // Add more language-font pairings as needed
        };
        element.style.fontFamily = fontForLanguage[language];
    });

    // Optional: Store the selected language in local storage for persistence
    localStorage.setItem("currentLanguage", language);
    }

});

