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

// //Fade in
// window.addEventListener('load', function() {
//     // select the element with the fade-in class
//     const fadeInElement = document.querySelectorAll("#home-title-container");
//     fadeInElement.forEach(element => {
//         element.classList.add('fade-in')
//     })
//     getBingwallpaper();
// })

// //Get BingWallpaper
// function getBingwallpaper(){
//     // Get request to the API endPoint
//     fetch("https://bing.biturl.top/?resolution=1920&format=json&index=0")
//     .then(response => response.json())
//     .then(data => {
//         var BingWallpaper = document.getElementById("home");
//         BingWallpaper.style.backgroundImage = "url(" + data.url + ")";
//     })
//     .catch(error => console.error(error));
// }

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
        tagline: "年轻 // 有点傻 // 骑行爱好者",
        about: "关于我",
        work: "工作经历",
        lounge: "生活剪影",
        contact: "联系我",
        biotextPr1: "你好！我是Jay，目前在法国鲁昂攻读软件工程硕士学位。",
        biotextPr2: "我喜欢设计和开发一些有趣的小程序或软件技巧，比如将CHATGPT和其他有趣的元素整合到平台中，增加趣味性。我也有一些开发VR/AR游戏的经验，并获得了一些小奖项。自从来到法国，我爱上了骑自行车。不过，有时候我会有点懒，需要一些提醒或截止日期来推动自己。顺便提一下，我曾在中国的芒果TV实习了几个月。如果你对我的这些“无聊”作品感兴趣，或者想了解更多，欢迎随时联系我！我会以“闪电般的速度”回复你，这方面我可一点都不懒。",
        biotextPr3: "在我的空闲时间，我喜欢探索新地方，想象自己在沙盒游戏中冒险，寻找和收集各种东西，仿佛完成了一项成就。所以，我经常骑自行车在城里转悠，也会去健身（不过最近不常去了，因为太孤单了，需要一个伙伴来拯救我的懒惰）。以前我喜欢听金属摇滚，比如Megadeth的《Paranoid》，现在什么音乐都听。有时候，当我和喜欢的人在一起时，我会变得有点“放飞自我”或调皮。我也对尝试和学习新运动、新技能感兴趣，尽管我不算聪明。还有一点，我非常渴望结交新朋友！哈哈。",
        biotextPr4: "继续向下滚动，了解更多关于我的信息！看看我生活中那些“无聊”的瞬间吧。我们可以成为朋友吗？",
        bioContact: "在这里联系我",
        resume: "查看完整简历",
        MRPuzzle: "MR Puzzle",
        MRPuzzlepos: "项目经理，游戏设计师",
        MRPuzzledate: "2024年1月 - 2024年5月",
        wechatbot: "微信智能回复机器人",
        wechatposition: "项目协作者，经理",
        wechatdate: "2023年8月 - 2024年9月",
        redditbot: "Reddit自动回复机器人",
        redditpos: "项目协作者，经理，设计师",
        redditdate: "2023年7月 - 2023年9月",
        intern1: "芒果TV // 渲染工程师，游戏移植",
        intern1date: "2023年11月 - 2024年4月",
        CTM: "中草药之旅",
        CTMpos: "项目经理，游戏设计师",
        CTMdate: "2023年4月 - 2023年10月",
        intern2: "华普智联（北京）科技有限公司 // 软件工程实习生",
        intern2date: "2022年7月 - 2022年8月",
        cs61a: "加州大学伯克利分校 cs61a",
        cs61apos: "自学",
        cs61adate: "2022年6月 - 2022年12月",
        cyberRenai: "赛博文艺复兴（VR游戏）",
        cyberRenaipos: "项目经理，游戏设计师",
        cyberRenaidate: "2022年5月 - 2022年7月",
        Chinesehanzi: "趣味汉字（VR游戏）",
        Chinesehanzipos: "项目经理，游戏设计师",
        Chinesehanzidate: "2022年春季 - 2022年秋季",
        contactmes: "通过此邮箱联系我",
        contactmesfix: "或者在下面给我留言，我会尽快回复您！",
        emname: "姓名",
        em: "邮箱",
        mes: "留言",
        submit: "提交！",
        thanks: "发送成功！感谢您的留言！",
        certifi: "© 2023 raJayoux. 版权所有。",
        scroll: "向下滚动了解更多",
        bikes: "自行车"
    },
    fr: {
        // French translations here
        hello: "bonjour, je suis",
        tagline: "Jeune // Un peu fou // Cycliste",
        about: "à propos",
        work: "expériences",
        lounge: "instantanés de vie",
        contact: "contactez-moi",
        biotextPr1: "Salut ! Moi, c'est Jay. Je suis étudiant à Rouen, en France, où je prépare un master en ingénierie logicielle.",
        biotextPr2: "J'adore concevoir et développer des scripts amusants ou des astuces logicielles, comme intégrer CHATGPT et d'autres éléments intéressants dans une plateforme pour la rendre plus ludique. J'ai aussi un peu d'expérience dans le développement de jeux VR/AR et j'ai remporté quelques petites récompenses. Depuis que je vis en France, je suis tombé amoureux du vélo. Parfois, je suis un peu paresseux et j'ai besoin de rappels ou de délais pour me motiver. Ah, et j'ai fait un stage de quelques mois chez MangoTV en Chine. Si mes projets (ou mes délires) vous intéressent, contactez-moi ! Je réponds rapidement, promis.",
        biotextPr3: "Pendant mon temps libre, j'aime explorer de nouveaux endroits, un peu comme dans un jeu sandbox où l'on cherche et collectionne des objets. Je fais souvent du vélo en ville et j'allais aussi à la salle de sport (mais ces derniers temps, j'y vais moins souvent, car je me sens seul et j'ai besoin d'un partenaire pour me motiver). Avant, j'étais fan de métal, comme 'Paranoid' de Megadeth, mais maintenant j'écoute un peu de tout. Parfois, j'aime être un peu fou ou taquin, surtout avec les gens que j'apprécie. J'adore aussi essayer de nouveaux sports ou apprendre de nouvelles compétences, même si je ne suis pas un génie. Et surtout, j'adore rencontrer de nouvelles personnes !",
        biotextPr4: "Continuez à faire défiler pour en savoir plus sur moi ! Découvrez mes moments de vie (pas si) ennuyeux. On devient amis ?",
        bioContact: "Contactez-moi ici",
        resume: "Voir le CV complet",
        MRPuzzle: "MR Puzzle",
        MRPuzzlepos: "Chef de projet, Game Designer",
        MRPuzzledate: "Janvier 2024 - Mai 2024",
        wechatbot: "Bot de réponse automatique sur WeChat",
        wechatposition: "Collaborateur de projet, Manager",
        wechatdate: "Août 2023 - Septembre 2024",
        redditbot: "Bot de réponse automatique sur Reddit",
        redditpos: "Collaborateur de projet, Manager, Designer",
        redditdate: "Juillet 2023 - Septembre 2023",
        intern1: "Mango TV // Ingénieur en rendu, Portage de jeux",
        intern1date: "Novembre 2023 - Avril 2024",
        CTM: "Voyage de la phytothérapie chinoise",
        CTMpos: "Chef de projet, Game Designer",
        CTMdate: "Avril 2023 - Octobre 2023",
        intern2: "Huapu Zhilian (Beijing) Technology // Stagiaire en génie logiciel",
        intern2date: "Juillet 2022 - Août 2022",
        cs61a: "UC Berkeley cs61a",
        cs61apos: "Auto-apprentissage",
        cs61adate: "Juin 2022 - Décembre 2022",
        cyberRenai: "Renaissance Cybernétique (Jeu VR)",
        cyberRenaipos: "Chef de projet, Game Designer",
        cyberRenaidate: "Mai 2022 - Juillet 2022",
        Chinesehanzi: "Quête des caractères chinois (Jeu VR)",
        Chinesehanzipos: "Chef de projet, Game Designer",
        Chinesehanzidate: "Printemps 2022 - Automne 2022",
        contactmes: "Envoyez-moi un email à",
        contactmesfix: "ou laissez-moi un message ci-dessous, et je vous répondrai dès que possible !",
        emname: "Nom",
        em: "Email",
        mes: "Message",
        submit: "Soumettre !",
        thanks: "Envoyé ! Merci pour votre message !",
        certifi: "© 2023 raJayoux. Tous droits réservés.",
        scroll: "Faites défiler pour en savoir plus",
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


document.addEventListener("DOMContentLoaded", () => {
    const bikeCards = document.querySelectorAll(".bike-card");
    const galleryModal = document.createElement("div");
    galleryModal.id = "gallery-modal";
    galleryModal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="modal-body">
                <div class="photo-and-details">
                    <div id="gallery-photo-full">
                        <img id="full-image" src="" alt="Full Image">
                    </div>
                    <div id="photo-details">
                        <h3 id="photo-title"></h3>
                        <p id="photo-description"></p>
                    </div>
                </div>
                <div id="gallery-photos-container"></div> <!-- Gallery below -->
            </div>
        </div>
    `;
    document.body.appendChild(galleryModal);

    const closeBtn = galleryModal.querySelector(".close-btn");
    const galleryPhotosContainer = galleryModal.querySelector("#gallery-photos-container");
    const photoTitle = galleryModal.querySelector("#photo-title");
    const photoDescription = galleryModal.querySelector("#photo-description");

    // Data for bike galleries compress img url: https://www.birme.net/?auto_width=true&image_format=webp&rename=ORIGINAL-NAME
    const bikeGalleries = {
        "bike-1": [
            { src: "assets/img/bikes/Firstbtwin500/20240914_211413.jpg", thumbnailSrc: "assets/img/bikes/Firstbtwin500/thumbnails/20240914_211413.webp", title: "My Indian friend", description: "My friend he looks very happy on my bike, that moment was memorable.\n That was the first day we went out, he invited me to eat lunch at his home, he cooked the Indian rice with Kishan and shared it with me, then we went out to Explore the city, at that moment I was very very new, and it was the first time I went to the Big Cathedrale, I even asked him, do you want a girlfriend here, he replied sure, I invited him to find passengers on the street to hook up and have conversation, he was more brave than me, even we have the same bad level in French, he just asked everyone on the street for the directions, I was impressive by him that day." },
            { src: "assets/img/bikes/Firstbtwin500/20240915_161245.jpg", thumbnailSrc: "assets/img/bikes/Firstbtwin500/thumbnails/20240915_161245.webp", title: "City discovery", description: "The day I took this photo was Sept 15, first time I visited Panorama Cote Sainte Catherine, I fell in love the panorama since that day, impressive, me as a new comer in this city, it's the first time I feel the city so beautiful, then I descend from the top and put my bike in front of the church under the mountain, everything goes smoothly and the moment sunshine was really warm." },
            { src: "assets/img/bikes/Firstbtwin500/20240916_185038.jpg", thumbnailSrc: "assets/img/bikes/Firstbtwin500/thumbnails/20240916_185038.webp", title: "Ride back home", description: "The first day I rode bike to school and I just joined La Semain d'integration, along the road from school to Home, that was sweet, at the time I was even using google map for navigation and especially I was passtionate for the future. (Also the first night in the school pool party, I rode my bike going there also haha, that was too much to arrive there because it was on Mont Saint aingn, so I put the bike on the half way and I run to the swimming pool, although on the mountain I took another bus, it was a wrong direction! Finally I arrived the party, the party also was impressive, I met Jessica she is the first person I talked in the party, then Dylan helped me and found my bike, So lucky.)" }
        ],
        "bike-2": [
            { src: "assets/img/bikes/VTTbtwin500/20240921_184647.jpg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/20240921_184647.webp", title: "Bike 2 - Photo 1", description: "This is the first photo of Bike 2." },
            { src: "assets/img/bikes/VTTbtwin500/20240926_185133.jpg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/20240926_185133.webp", title: "Bike 2 - Photo 2", description: "This is the second photo of Bike 2." },
            { src: "assets/img/bikes/VTTbtwin500/20240928_172709.jpg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/20240928_172709.webp", title: "Bike 2 - Photo 2", description: "This is the second photo of Bike 2." },
            { src: "assets/img/bikes/VTTbtwin500/20240928_185501.jpg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/20240928_185501.webp", title: "Bike 2 - Photo 2", description: "This is the second photo of Bike 2." },
            { src: "assets/img/bikes/VTTbtwin500/IMG-20240929-WA0010.jpeg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/IMG-20240929-WA0010.webp", title: "Bike 2 - Photo 2", description: "This is the second photo of Bike 2." },
            { src: "assets/img/bikes/VTTbtwin500/20241002_202553.jpg", thumbnailSrc: "assets/img/bikes/VTTbtwin500/thumbnails/20241002_202553.webp", title: "Bike 2 - Photo 2", description: "This is the second photo of Bike 2." }
        ],
        "bike-3": [
            { src: "assets/img/bikes/VTTScott/20241004_183108.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241004_183108.webp", title: "Bike 3 - Photo 1", description: "This is the first photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/6_oct_2024.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/6_oct_2024.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241008_183934.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241008_183934.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241109_104946.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241109_104946.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241110_145920.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241110_145920.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241110_152955.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241110_152955.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241117_151700.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241117_151700.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." },
            { src: "assets/img/bikes/VTTScott/20241121_140433.jpg", thumbnailSrc: "assets/img/bikes/VTTScott/thumbnails/20241121_140433.webp", title: "Bike 3 - Photo 2", description: "This is the second photo of Bike 3." }
        ],
        "bike-4": [
            { src: "assets/img/bikes/VeloDeRoute/bike1.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/bike1.webp", title: "Bike 4 - Photo 1", description: "This is the first photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/bike0.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/bike0.webp", title: "Bike 4 - Photo 2", description: "This is the second photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20241210_154702.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20241210_154702.webp", title: "Bike 4 - Photo 3", description: "This is the third photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20241215_152022.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20241215_152022.webp", title: "Bike 4 - Photo 4", description: "This is the fourth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20241215_152443.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20241215_152443.webp", title: "Bike 4 - Photo 5", description: "This is the fifth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20241215_153100.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20241215_153100.webp", title: "Bike 4 - Photo 6", description: "This is the sixth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/15_Dec_2024_1646.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/15_Dec_2024_1646.webp", title: "Bike 4 - Photo 7", description: "This is the seventh photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250115_145419.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250115_145419.webp", title: "Bike 4 - Photo 8", description: "This is the eighth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250115_161435.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250115_161435.webp", title: "Bike 4 - Photo 9", description: "This is the ninth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250301_111242.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250301_111242.webp", title: "Bike 4 - Photo 10", description: "This is the tenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250130_180735.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250130_180735.webp", title: "Bike 4 - Photo 11", description: "This is the eleventh photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250201_140624.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250201_140624.webp", title: "Bike 4 - Photo 12", description: "This is the twelfth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250201_152904.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250201_152904.webp", title: "Bike 4 - Photo 13", description: "This is the thirteenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250208_151343.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250208_151343.webp", title: "Bike 4 - Photo 14", description: "This is the fourteenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250312_205818.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250312_205818.webp", title: "Bike 4 - Photo 15", description: "This is the fifteenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250313_185742.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250313_185742.webp", title: "Bike 4 - Photo 16", description: "This is the sixteenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250313_192938.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250313_192938.webp", title: "Bike 4 - Photo 17", description: "This is the seventeenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250314_210538.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250314_210538.webp", title: "Bike 4 - Photo 18", description: "This is the eighteenth photo of Bike 4." },
            { src: "assets/img/bikes/VeloDeRoute/20250315_141926.jpg", thumbnailSrc: "assets/img/bikes/VeloDeRoute/thumbnails/20250315_141926.webp", title: "Bike 4 - Photo 19", description: "This is the nineteenth photo of Bike 4." }
        ],
        "bike-5": [
            { src: "assets/img/bikes/VTTRockRider/Screenshot_20241210_191140_Leboncoin.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/Screenshot_20241210_191140_Leboncoin.webp", title: "Bike 5 - Photo 1", description: "This is the first photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20241213_201656.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20241213_201656.webp", title: "Bike 5 - Photo 2", description: "This is the second photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20241222_110230.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20241222_110230.webp", title: "Bike 5 - Photo 3", description: "This is the third photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250103_133207.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250103_133207.webp", title: "Bike 5 - Photo 4", description: "This is the fourth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250103_154246.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250103_154246.webp", title: "Bike 5 - Photo 5", description: "This is the fifth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250103_163135.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250103_163135.webp", title: "Bike 5 - Photo 6", description: "This is the sixth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250103_173753.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250103_173753.webp", title: "Bike 5 - Photo 7", description: "This is the seventh photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250105_195955.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250105_195955.webp", title: "Bike 5 - Photo 8", description: "This is the eighth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250110_200929.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250110_200929.webp", title: "Bike 5 - Photo 9", description: "This is the ninth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250110_201145.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250110_201145.webp", title: "Bike 5 - Photo 10", description: "This is the tenth photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/20250119_194435.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/20250119_194435.webp", title: "Bike 5 - Photo 11", description: "This is the eleventh photo of Bike 5." },
            { src: "assets/img/bikes/VTTRockRider/10_mars_2025.jpg", thumbnailSrc: "assets/img/bikes/VTTRockRider/thumbnails/10_mars_2025.webp", title: "Bike 5 - Photo 12", description: "This is the twelfth photo of Bike 5." }
        ],
        "bike-6": [
            { src: "assets/img/bikes/VTTNakamura/20250111_193558.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250111_193558.webp", title: "Bike 6 - Photo 1", description: "This is the first photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/20250115_131021.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250115_131021.webp", title: "Bike 6 - Photo 2", description: "This is the second photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/IMG-20250116-WA0040.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/IMG-20250116-WA0040.webp", title: "Bike 6 - Photo 3", description: "This is the third photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/20250123_220228.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250123_220228.webp", title: "Bike 6 - Photo 4", description: "This is the fourth photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/20250223_154419.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250223_154419.webp", title: "Bike 6 - Photo 5", description: "This is the fifth photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/20250223_154510.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250223_154510.webp", title: "Bike 6 - Photo 6", description: "This is the sixth photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/20250223_154534.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/20250223_154534.webp", title: "Bike 6 - Photo 7", description: "This is the seventh photo of Bike 6." },
            { src: "assets/img/bikes/VTTNakamura/8_Mars_1714.jpg", thumbnailSrc: "assets/img/bikes/VTTNakamura/thumbnails/8_Mars_1714.webp", title: "Bike 6 - Photo 8", description: "This is the eighth photo of Bike 6." }
        ],
    };

    // Open gallery modal when a bike preview is clicked
    bikeCards.forEach((card) => {
        card.addEventListener("click", () => {
            const bikeId = card.id;
            const gallery = bikeGalleries[bikeId];

            if (gallery) {
                // Populate the gallery with thumbnails
                galleryPhotosContainer.innerHTML = ""; // Clear previous content
                gallery.forEach((photo, index) => {
                    const img = document.createElement("img");
                    img.src = photo.thumbnailSrc; // Use thumbnail for preview
                    img.alt = photo.title;
                    img.classList.add("gallery-photo");
                    img.dataset.index = index;
                    img.dataset.bikeId = bikeId; // Store bike ID for later use
                    img.loading = "lazy"; // Enable lazy loading
                    galleryPhotosContainer.appendChild(img);
                });

                // Show the first photo's details (but load the full-size image)
                showPhotoDetails(gallery[0]);

                // Show the modal
                galleryModal.style.display = "flex";

                // Disable scrolling on the main page
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Close the modal when clicking outside the modal content
    galleryModal.addEventListener("click", (event) => {
        if (event.target === galleryModal) {
            galleryModal.style.display = "none";

            // Re-enable scrolling on the main page
            document.body.style.overflow = "auto";
        }
    });

    
    // Close the modal
    closeBtn.addEventListener("click", () => {
        galleryModal.style.display = "none";

        // Re-enable scrolling on the main page
        document.body.style.overflow = "auto";
    });

    // Show photo details when a thumbnail is clicked
    galleryPhotosContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("gallery-photo")) {
            const index = event.target.dataset.index;
            const bikeId = event.target.dataset.bikeId;
            const gallery = bikeGalleries[bikeId];
            showPhotoDetails(gallery[index]); // Load the full-size image
        }
    });

    // Function to show photo details
    function showPhotoDetails(photo) {
        const fullImage = document.getElementById("full-image");
        fullImage.src = photo.src; // Load the full-size image
        fullImage.alt = photo.title;

        const photoTitle = document.getElementById("photo-title");
        const photoDescription = document.getElementById("photo-description");

        photoTitle.textContent = photo.title; // Set the title
        photoDescription.textContent = photo.description; // Set the description
    }
});
