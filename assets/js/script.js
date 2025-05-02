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
    // Use let for variables that need to change: Use let for variables whose values might need to be updated during the program's execution.
    // Use const for variables that remain fixed: Use const for variables that you intend to keep constant throughout the program to prevent accidental reassignments.
    let currentLanguage = "en"; // Set initial language
    const languageSwitcher = document.getElementById("language-switcher");
    const languageOptions = languageSwitcher.querySelectorAll("span");
    const translatableElements = document.querySelectorAll("[data-translatable]");

    const translations = {
    en: {
        // English translations here
        hello: "hello, i am",
        tagline: "Young // Dumb // Biker",
        about: "about",
        work: "work",
        lounge: "integration",
        contact: "contact",
        biotextPr1: "Hello! It's Jay! I am a student studying in Rouen France for my master's degree in Software Engineering.",
        biotextPr2: "I love designing and developing wick scripts or tricks of softwares, like, intergrating CHATGPT and other flavourings into a platform to make some fun.. And I have some experience in developing VR/AR games also, and get some trivial rewards... And since I have been living in France, I fell in love in riding Bikes. Sometimes I'm lazy and need some reminders or deadlines to push me.. Just btw I have stayed a few months in MangoTV China, if you are interested in my boring works or anything, just contact me below! I will reply as fast as lightning, for this point I'm not lazy at all.",
        biotextPr3: "In my own time, I enjoy exploring new places, imagining playing in a sandbox game, seek and find collections as many as more, and feel it like something achievement? so I ride bikes around the town, bodybuilding(recently I don't go often, I'm so lonely and I need a partner to save me from laziness), i used like metal rock music for example(Paranoid by Megadeth), now i just listen all. Some moments, I prefer to be wild or naughty(when I stay with the person i like). I'm also interested in trying and learning new sports and skills, though i'm not smart. And one more, I'm thirsty to make any new friends! haha",
        biotextPr4: "Keep scrolling to learn more about me! And take a look at my life boring moments. Can we be friends? ",
        bioContact: "Contact me here",
        resume: "See Full Resume",
        MRPuzzle: "MR Puzzle",
        MRPuzzlepos: "Project Manager, Game Designer ",
        MRPuzzledate: " Jan 2024 - May 2024 ",
        wechatbot: "Reply Bot on Wechat",
        wechatposition: "Project Collaborator, Manager",
        wechatdate: " August 2023 - Sept 2024 ",
        redditbot: "Auto Reply Bot on Reddit",
        redditpos: "Project Collabrator, Manager, Designer",
        redditdate: " July 2023 - Sept 2023 ",
        intern1: " Mango TV // Rendering Engineer, Game Porting ",
        intern1date: " November 2023 - April 2024 ",
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
        certifi: " © 2023 raJayoux. All Rights Reserved. ",
        scroll: " scroll to learn more ",
        bikes: "bikes"
    },
    zh: {
        // Chinese translations here
        hello: "你好，我是",
        tagline: "虚拟现实 // 小发明家 // 金属摇滚",
        about: "我",
        work: "工作经历",
        lounge: "生活剪影",
        contact: "联系我",
        biotextPr1: "你好！我是Jay，目前在法国鲁昂攻读软件工程硕士学位。",
biotextPr2: "我热爱设计和开发一些有趣的小程序或软件技巧，比如将CHATGPT和其他有趣的元素整合到平台中，增加趣味性。我也有一些开发VR/AR游戏的经验，并获得了一些小奖项。自从来到法国，我爱上了骑自行车。不过，有时候我会有点懒，需要一些提醒或截止日期来推动自己。顺便提一下，我曾在中国的芒果TV实习了几个月。如果你对我的这些“无聊”作品感兴趣，或者想了解更多，欢迎随时联系我！我会以“闪电般的速度”回复你，这方面我可一点都不懒。",
biotextPr3: "在我的空闲时间，我喜欢探索新地方，想象自己在沙盒游戏中冒险，寻找和收集各种东西，仿佛完成了一项成就。所以，我经常骑自行车在城里转悠，也会去健身（不过最近不常去了，因为太孤单了，需要一个伙伴来拯救我的懒惰）。以前我喜欢听金属摇滚，比如Megadeth的《Paranoid》，现在什么音乐都听。有时候，当我和喜欢的人在一起时，我会变得有点“放飞自我”或调皮。我也对尝试和学习新运动、新技能感兴趣，尽管我不算聪明。还有一点，我非常渴望结交新朋友！哈哈。",
biotextPr4: "继续向下滚动，了解更多关于我的信息！看看我生活中那些“无聊”的瞬间吧。我们可以成为朋友吗？",
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
        certifi: " © 2023 揭鹏宇. 版权所有. ",
        scroll: " 滑动以了解更多 ",
        bikes: "自行车"
    },
    fr: {
        // French translations here
        hello: "bonjour, je suis",
        tagline: "Jeune // un peu bête // Biker",
        about: "à propos",
        work: "expérience",
        lounge: "silhouette de vie",
        contact: "Contactez-moi",
        biotextPr1: "Salut ! Moi, c'est Jay. Je suis étudiant à Rouen, en France, où je prépare un master en ingénierie logicielle.",
biotextPr2: "J'adore bidouiller des scripts et créer des petites astuces logicielles marrantes, comme intégrer CHATGPT ou d'autres trucs sympas dans des plateformes. J'ai aussi un peu d'expérience dans le développement de jeux VR/AR, et j'ai même gagné quelques petites récompenses (rien de fou, hein). Depuis que je vis en France, je suis tombé amoureux du Bike. Bon, je l'avoue, je suis parfois un peu flemmard et j'ai besoin de deadlines pour me bouger. Ah, et j'ai bossé quelques mois chez MangoTV en Chine. Si mes projets (ou mes délires) t'intéressent, contacte-moi ! Promis, je réponds vite, là-dessus je ne suis pas flemmard du tout.",
biotextPr3: "Quand j'ai du temps libre, j'aime explorer de nouveaux endroits, un peu comme dans un jeu sandbox où tu cherches et collectionnes des trucs. Du coup, je fais pas mal de vélo en ville. J'allais aussi à la salle de sport, mais ces derniers temps, j'y vais moins (la solitude, tu vois...). Avant, j'étais à fond sur le métal, genre Megadeth et leur morceau 'Paranoid', mais maintenant j'écoute un peu de tout. Parfois, j'aime bien être un peu fou ou taquin, surtout avec les gens que j'apprécie. J'adore aussi essayer de nouveaux sports ou apprendre des trucs, même si je ne suis pas un génie. Et surtout, j'adore rencontrer de nouvelles personnes !",
biotextPr4: "Continue de scroller pour en savoir plus sur moi ! Et jette un œil à mes moments de vie (pas si) ennuyeux. On devient potes ?",
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
        emname: "nom",
        em: "e-mail",
        mes: "message",
        submit: "soumission!",
        thanks: " Envoyé ! Merci pour votre message ! ",
        certifi: " © 2023 raJayoux. Tous droits réservés. ",
        scroll: " faites défiler pour en savoir plus ",
        bikes: "vélos"
    },
    };

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
    changeLanguage(currentLanguage);
});

$(document).ready(function () {
    // -- Bike Carousel Logic -- //
    const bikesCarouselWrapper = $('#bikes-carousel-wrapper');
    const bikeSlides = $('.bike-slide');
    const bikesNavPrevBtn = $('#bikes-prev-btn');
    const bikesNavNextBtn = $('#bikes-next-btn');

    let currentBikeIndex = 0;
    const bikeCount = bikeSlides.length;

    function updateBikeCarousel() {
        const translateValue = -currentBikeIndex * 100 + '%'; // Calculate percentage from position
        bikesCarouselWrapper.css('transform', 'translateX(' + translateValue + ')');
    }

    bikesNavPrevBtn.on('click', function () {
        currentBikeIndex = (currentBikeIndex - 1 + bikeCount) % bikeCount; // Calculate for looping
        updateBikeCarousel();
    });

    bikesNavNextBtn.on('click', function () {
        currentBikeIndex = (currentBikeIndex + 1) % bikeCount; // Calculate for looping
        updateBikeCarousel();
    });

    // -- Image Carousel Logic -- //
        $('.bike-slide').each(function() {
        const currentSlide = $(this);
        const photoCarousel = currentSlide.find('.bike-photo-carousel');
        const photoPrevBtn = currentSlide.find('.photo-prev-btn');
        const photoNextBtn = currentSlide.find('.photo-next-btn');
        const photoCount = currentSlide.find('.bike-photo').length;
        let currentPhotoIndex = 0;

         function updatePhotoCarousel() {
           const translateValue = -currentPhotoIndex * 100 + '%';
          photoCarousel.css('transform', 'translateX(' + translateValue + ')');
        }

        photoPrevBtn.on('click', function () {
            currentPhotoIndex = (currentPhotoIndex - 1 + photoCount) % photoCount;
            updatePhotoCarousel();
        });

        photoNextBtn.on('click', function () {
          currentPhotoIndex = (currentPhotoIndex + 1) % photoCount;
            updatePhotoCarousel();
      });
    });
});