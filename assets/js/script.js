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
    let currentLanguage = "en"; // Set initial language
    const languageSwitcher = document.getElementById("language-switcher");
    const languageOptions = languageSwitcher.querySelectorAll("span");
    const translatableElements = document.querySelectorAll("[data-translatable]");

    // Function to change language
    function changeLanguage(language) {
        currentLanguage = language;
        translatableElements.forEach((element) => {
            const key = element.dataset.translatable;

            if (element.tagName.toLowerCase() === "input") {
                // If it's an input, update its value
                element.value = translations[language][key];
            } else {
                // Otherwise, update its text content
                element.textContent = translations[language][key];
            }
        });

        // Optional: Store the selected language in local storage for persistence
        localStorage.setItem("currentLanguage", language);
    }

    // Add event listeners to language options
    languageOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const newLanguage = option.id;
            changeLanguage(newLanguage);
        });
    });

    // Initialize the language
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
