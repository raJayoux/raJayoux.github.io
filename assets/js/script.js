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
        // bike section
        bike1_title: "B'TWIN 500",
        bike1_description: "I got my first bicycle on September 11, just two days after arriving in Rouen, France. I really appreciated the man who sold me this bike—he even helped fix some issues with it after the sale. My story with this bike ended at midnight on September 20 after a school night party. When I returned to Rue Jeanne d'Arc, where I had locked my bike near the bar Le Môme, I found the spot empty. Thankfully, the thief left my Chinese lock on the ground.",
        bike2_title: "VTT B'TWIN 500",
        bike2_description: "Shocked by the loss of my first bike, I thought it was a one-time incident. So, on September 21, I bought this one from a young boy whose goal was to join the army. I was so happy to have a bike again! This one was a mountain bike, and I used it to explore the city. Unfortunately, I lost this bike on October 3, just a week after I started going to the gym. When I finished my workout, I found the same thing had happened again.",
        bike3_title: "Scott Aspect 740 L",
            bike3_description: "I couldn’t live without a bike, so the very next day, on October 4, I got this one. Honestly, I have a deep emotional connection with this bike. In the first few days of owning it, I rode it around my place every night just for the joy of riding. Later, I spent many enjoyable times on it and started exploring places outside of Rouen. I lost this bike on November 28, the night before I moved into my second apartment.",
        bike4_title: "Scott CR1 20 Road Bike",
            bike4_description: "I started doubting everything around me and rethinking everything that happened. Why is it always me? It was the first time I felt desperate in France, not because of homesickness or social relationships, but because of my circumstances. However, I had already immersed myself in cycling, and those tragic days couldn't stop me from continuing! Due to the uncomfortable living environment, which was far from the city, I needed a bicycle desperately. I had a strong desire to break free. After a couple of days of healing and resting, on Dec 10, I purchased this road bicycle from a gentleman who brought the bike to my apartment. It was a really advanced, fancy one. The original price was €1899, full carbon, with Shimano 105 5800 groupset and 22 speeds. I was determined to take cycling to a sport level, not just for pleasure. This time, I took great care of it. I was truly a cyclist, never leaving it alone. I kept it in my room, took it to Carrefour stores, and started riding it very far—from Rouen to Dieppe, to Château Gaillard. I even took it to a bike shop to learn how to repair bicycles and joined the Rushclub Rouen group. This bike was truly amazing. I never stressed it or tested its durability, only riding it on roads. I bought accessories, maintenance tools, oils, and kits for it. This was the bicycle I truly cared about. The end: I still regret selling it (on Mar 15), but I had to. I sold it for €790 to a father and son. I saw the son was very satisfied with it on his first try. Of course, I had taken great care of it. After we made the deal, I gave them all the bike kits, including the shoes. I sold it because I had bought a motorcycle and moved to a new apartment. At that time, I really didn’t have the money to maintain and keep four bikes at the same time. Also, I no longer kept it inside my room and rode the motorcycle more often. At one point, I even thought I would bring it back to China. I still loved that bike, but not as much as before. It was no longer the only one.",
        bike5_title: "VTT Rockrider XC 120",
        bike5_description: "While I had a bike for roads, I was still passionate about mountain riding. With my road bike, it was impossible to go on mountains. So, on December 13, I bought this one in Louviers. That night, Nathan and I went there by bus and met the seller (Nathan lost his phone on the bus, but we found it later). The seller was a nice and friendly person, about the same age as me. The bike was also advanced and impressive, with SRAM NX Eagle 12 speeds, tubeless-ready tires, and a great RockShox RECON GOLD RL fork with BOOST format. It looked new and gorgeous. Both its service history and technical features were pretty decent. This is the bike I still keep at home. Though I now only ride it on weekends, it’s purely for pleasure on Sundays.",
        bike6_title: "VTT Nakamura",
        bike6_description: "After losing three bicycles, I never left my super road bike or mountain bike outside alone. However, this caused inconvenience, and I still felt the need for a bike for daily commuting. Though my friends said I was crazy, I decided to get my sixth bike. By now, I could even say I was experienced in buying bicycles. I even tried negotiating the price during the meeting. But the excitement of buying a bicycle and the feelings after having it started to fade and became less fresh. I couldn’t love this one like the others, and I even lent it to others to use. On January 11, I bought this bike with Namit. We went to Elbeuf in front of the Hôtel de Ville. The seller showed up in a car and asked me to get in, driving me to another place. I wasn’t cautious enough and just accepted it. Luckily, everything went fine. He showed me this bike, and I was interested in it because it had road tires and an air fork. On March 8, I sold this bike to one of my Indian classmates, Kishan. When he tried it, I saw the same happy smile I had when I got my first bike in France. That was sweet.",
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
        bike1_title: "B'TWIN 500",
        bike1_description: "9月11日，我到达法国鲁昂两天后买了我的第一辆自行车。我非常感谢卖给我这辆自行车的那位先生，他甚至在售后帮我修复了一些问题。我的这辆自行车的故事在9月20日午夜结束，那天晚上我参加了一个学校派对。当我回到Rue Jeanne d'Arc并发现自行车锁在Le Môme酒吧附近时，发现自行车已经不见了。幸运的是，小偷把我的中国锁留在了地上。",
        bike2_title: "VTT B'TWIN 500",
        bike2_description: "失去第一辆自行车让我震惊，我以为这是一次性的事件。所以在9月21日，我从一个想参军的年轻人那里买了这辆车。我非常高兴又有了一辆自行车！这是一辆山地车，我用它探索了这座城市。不幸的是，10月3日，我刚开始去健身房一周后，这辆车也丢了。当我结束锻炼时，发现同样的事情再次发生了。",
        bike3_title: "Scott Aspect 740 L",
        bike3_description: "我无法忍受没有自行车的生活，所以第二天10月4日，我买了这辆车。老实说，我对这辆自行车有很深的感情。在拥有它的最初几天里，我每天晚上都骑着它在家附近兜风，只是为了骑行的乐趣。后来，我在这辆车上度过了许多愉快的时光，并开始探索鲁昂以外的地方。11月28日，在我搬进第二套公寓的前一天晚上，我失去了这辆自行车。",
        bike4_title: "Scott CR1 20 公路自行车",
        bike4_description: "我开始怀疑周围的一切，并重新思考发生的一切。为什么总是我？这是我第一次在法国感到绝望，不是因为想家或社交关系，而是因为我的处境。然而，我已经沉浸在骑行中，那些悲惨的日子并没有阻止我继续！由于居住环境不舒适，离市区很远，我迫切需要一辆自行车。我有一种强烈的渴望想要摆脱困境。经过几天的恢复和休息后，12月10日，我从一位绅士那里购买了这辆公路自行车，他把自行车送到了我的公寓。这是一辆非常先进、豪华的自行车。原价为1899欧元，全碳纤维，配备Shimano 105 5800套件和22速。我下定决心将骑行提升到运动水平，而不仅仅是为了娱乐。这次，我非常小心地照顾它。我是真正的骑行者，从不让它单独待着。我把它放在我的房间里，带它去家乐福超市，并开始骑得很远——从鲁昂到迪耶普，再到加亚尔城堡。我甚至把它带到一家自行车店学习如何修理自行车，并加入了鲁昂Rushclub俱乐部。这辆自行车真的很棒。我从未让它承受压力或测试其耐用性，只在公路上骑行。我为它购买了配件、维护工具、润滑油和套件。这是我真正关心的自行车。结局：我仍然后悔卖掉它（3月15日），但我不得不这样做。我以790欧元的价格卖给了一对父子。我看到儿子第一次试骑时非常满意。当然，我对它照顾得很好。交易完成后，我把所有的自行车套件，包括鞋子，都给了他们。我卖掉它是因为我买了一辆摩托车并搬到了一个新公寓。当时，我真的没有钱同时维护和保留四辆自行车。此外，我不再把它放在我的房间里，而是更经常骑摩托车。有一段时间，我甚至想把它带回中国。我仍然爱这辆自行车，但不像以前那样多了。它不再是唯一的了。",
        bike5_title: "VTT Rockrider XC 120",
        bike5_description: "虽然我有一辆公路自行车，但我仍然热衷于山地骑行。用我的公路自行车是不可能上山的。所以，在12月13日，我在Louviers买了这辆车。那天晚上，Nathan和我坐公交车去了那里，见到了卖家（Nathan在公交车上丢了手机，但后来找到了）。卖家是一个友好且和我年龄相仿的人。这辆自行车也很先进且令人印象深刻，配备了SRAM NX Eagle 12速、无内胎轮胎，以及一款出色的RockShox RECON GOLD RL前叉，采用BOOST格式。它看起来崭新而华丽。它的维护记录和技术特点都相当不错。这是我现在仍然保留在家中的自行车。虽然我现在只在周末骑它，但它纯粹是为了周日的乐趣。",
        bike6_title: "VTT Nakamura",
        bike6_description: "在丢了三辆自行车后，我再也没有把我的超级公路车或山地车单独留在外面。然而，这带来了不便，我仍然觉得需要一辆用于日常通勤的自行车。虽然我的朋友们说我疯了，但我决定买我的第六辆自行车。到现在，我甚至可以说我在买自行车方面很有经验了。我甚至在见面时尝试讨价还价。但买自行车的兴奋感和拥有它后的感觉开始消退，变得不再新鲜。我无法像爱其他自行车那样爱这辆车，甚至把它借给别人使用。1月11日，我和Namit一起买了这辆自行车。我们去了Elbeuf，在市政厅前。卖家开车出现，叫我上车，把我带到另一个地方。我当时不够谨慎，就接受了。幸运的是，一切都很顺利。他向我展示了这辆自行车，我对它很感兴趣，因为它有公路轮胎和空气前叉。3月8日，我把这辆自行车卖给了我的一位印度同学Kishan。当他试骑时，我看到了他脸上和我在法国买第一辆自行车时一样的幸福笑容。那真是甜蜜的时刻。",
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
        bike1_title: "B'TWIN 500",
        bike1_description: "J'ai acheté mon premier vélo le 11 septembre, deux jours seulement après mon arrivée à Rouen, en France. J'ai vraiment apprécié l'homme qui m'a vendu ce vélo—il m'a même aidé à résoudre quelques problèmes après la vente. Mon histoire avec ce vélo s'est terminée à minuit le 20 septembre après une soirée scolaire. Quand je suis retourné à la Rue Jeanne d'Arc, où j'avais verrouillé mon vélo près du bar Le Môme, j'ai trouvé l'endroit vide. Heureusement, le voleur a laissé mon cadenas chinois par terre.",
        bike2_title: "VTT B'TWIN 500",
        bike2_description: "Choqué par la perte de mon premier vélo, je pensais que c'était un incident isolé. Alors, le 21 septembre, j'ai acheté celui-ci à un jeune garçon dont le but était de rejoindre l'armée. J'étais tellement heureux d'avoir à nouveau un vélo ! Celui-ci était un VTT, et je l'ai utilisé pour explorer la ville. Malheureusement, j'ai perdu ce vélo le 3 octobre, une semaine seulement après avoir commencé à aller à la salle de sport. Quand j'ai terminé mon entraînement, j'ai découvert que la même chose s'était reproduite.",
        bike3_title: "Scott Aspect 740 L",
        bike3_description: "Je ne pouvais pas vivre sans vélo, alors dès le lendemain, le 4 octobre, j'ai acheté celui-ci. Honnêtement, j'ai un lien émotionnel profond avec ce vélo. Dans les premiers jours où je l'avais, je le montais autour de chez moi tous les soirs juste pour le plaisir de rouler. Plus tard, j'ai passé de nombreux moments agréables dessus et j'ai commencé à explorer des endroits en dehors de Rouen. J'ai perdu ce vélo le 28 novembre, la veille de mon déménagement dans mon deuxième appartement.",
        bike4_title: "Vélo de Route Scott CR1 20",
        bike4_description: "J'ai commencé à douter de tout ce qui m'entourait et à repenser tout ce qui s'était passé. Pourquoi cela m'arrive-t-il toujours ? C'était la première fois que je me sentais désespéré en France, non pas à cause du mal du pays ou des relations sociales, mais à cause de ma situation. Cependant, je m'étais déjà plongé dans le cyclisme, et ces jours tragiques ne pouvaient pas m'arrêter ! En raison de l'environnement de vie inconfortable, qui était loin de la ville, j'avais désespérément besoin d'un vélo. J'avais un fort désir de m'évader. Après quelques jours de guérison et de repos, le 10 décembre, j'ai acheté ce vélo de route à un monsieur qui l'a apporté à mon appartement. C'était un vélo vraiment avancé et élégant. Le prix d'origine était de 1899 €, tout en carbone, avec un groupe Shimano 105 5800 et 22 vitesses. J'étais déterminé à faire du cyclisme un sport, pas seulement un plaisir. Cette fois, j'en ai pris grand soin. J'étais vraiment un cycliste, ne le laissant jamais seul. Je l'ai gardé dans ma chambre, je l'ai emmené dans les magasins Carrefour et j'ai commencé à rouler très loin—de Rouen à Dieppe, jusqu'à Château Gaillard. Je l'ai même emmené dans un magasin de vélos pour apprendre à réparer des vélos et j'ai rejoint le groupe Rushclub Rouen. Ce vélo était vraiment incroyable. Je ne l'ai jamais stressé ni testé sa durabilité, je l'ai seulement utilisé sur les routes. J'ai acheté des accessoires, des outils d'entretien, des huiles et des kits pour lui. C'était le vélo auquel je tenais vraiment. La fin : je regrette encore de l'avoir vendu (le 15 mars), mais je devais le faire. Je l'ai vendu pour 790 € à un père et son fils. J'ai vu que le fils était très satisfait dès son premier essai. Bien sûr, j'en avais pris grand soin. Après avoir conclu l'affaire, je leur ai donné tous les kits de vélo, y compris les chaussures. Je l'ai vendu parce que j'avais acheté une moto et déménagé dans un nouvel appartement. À ce moment-là, je n'avais vraiment pas les moyens de maintenir et de garder quatre vélos en même temps. De plus, je ne le gardais plus dans ma chambre et je roulais plus souvent en moto. À un moment donné, j'ai même pensé à le ramener en Chine. J'aimais toujours ce vélo, mais pas autant qu'avant. Ce n'était plus le seul.",
        bike5_title: "VTT Rockrider XC 120",
        bike5_description: "Bien que j'avais un vélo pour les routes, j'étais toujours passionné par le VTT. Avec mon vélo de route, il était impossible d'aller en montagne. Alors, le 13 décembre, j'ai acheté celui-ci à Louviers. Ce soir-là, Nathan et moi y sommes allés en bus et avons rencontré le vendeur (Nathan a perdu son téléphone dans le bus, mais nous l'avons retrouvé plus tard). Le vendeur était une personne gentille et amicale, à peu près du même âge que moi. Le vélo était également avancé et impressionnant, avec SRAM NX Eagle 12 vitesses, des pneus tubeless-ready et une excellente fourche RockShox RECON GOLD RL au format BOOST. Il avait l'air neuf et magnifique. Son historique d'entretien et ses caractéristiques techniques étaient plutôt corrects. C'est le vélo que je garde encore chez moi. Bien que je ne le monte que le week-end maintenant, c'est purement pour le plaisir du dimanche.",
        bike6_title: "VTT Nakamura",
        bike6_description: "Après avoir perdu trois vélos, je n'ai jamais laissé mon super vélo de route ou VTT seul dehors. Cependant, cela a causé des inconvénients, et j'ai toujours ressenti le besoin d'un vélo pour les trajets quotidiens. Bien que mes amis aient dit que j'étais fou, j'ai décidé d'acheter mon sixième vélo. À ce stade, je pourrais même dire que j'avais de l'expérience dans l'achat de vélos. J'ai même essayé de négocier le prix lors de la rencontre. Mais l'excitation d'acheter un vélo et les sensations après l'avoir eu ont commencé à s'estomper et à devenir moins fraîches. Je ne pouvais pas aimer celui-ci comme les autres, et je l'ai même prêté à d'autres pour l'utiliser. Le 11 janvier, j'ai acheté ce vélo avec Namit. Nous sommes allés à Elbeuf devant l'Hôtel de Ville. Le vendeur est arrivé en voiture et m'a demandé de monter, me conduisant à un autre endroit. Je n'étais pas assez prudent et j'ai simplement accepté. Heureusement, tout s'est bien passé. Il m'a montré ce vélo, et j'étais intéressé parce qu'il avait des pneus de route et une fourche à air. Le 8 mars, j'ai vendu ce vélo à l'un de mes camarades de classe indiens, Kishan. Quand il l'a essayé, j'ai vu le même sourire heureux que j'avais lorsque j'ai eu mon premier vélo en France. C'était doux.",
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

    // Function to show photo details with preloading
    function showPhotoDetails(photo) {
        const fullImage = document.getElementById("full-image");
        const photoTitle = document.getElementById("photo-title");
        const photoDescription = document.getElementById("photo-description");

        // Add a loading animation
        fullImage.style.opacity = "0"; // Hide the current image
        fullImage.src = ""; // Clear the current image source
        const loadingSpinner = document.createElement("div");
        loadingSpinner.classList.add("loading-spinner");
        fullImage.parentElement.appendChild(loadingSpinner); // Add spinner to the image container

        // Preload the new image
        const tempImage = new Image();
        tempImage.src = `${photo.src}?cache-control=max-age=31536000`; // Add cache-control query parameter
        tempImage.onload = () => {
            // Once the image is loaded, update the full image
            fullImage.src = tempImage.src;
            fullImage.alt = photo.title;

            // Remove the loading spinner
            loadingSpinner.remove();

            // Fade in the new image
            fullImage.style.opacity = "1";
        };

        // Update the text details immediately
        photoTitle.textContent = photo.title;
        photoDescription.textContent = photo.description;
    }
});
