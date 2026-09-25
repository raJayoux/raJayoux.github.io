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
        $("body").css("overflow-y", "auto")
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
    let currentLanguage = localStorage.getItem("currentLanguage") || "en";
    const languageOptions = document.querySelectorAll("[data-lang]"); // Get all language options using data-lang attribute
    const translatableElements = document.querySelectorAll("[data-translatable]");

    // Function to update active language styling
    function updateActiveLanguage(language) {
        languageOptions.forEach((option) => {
            option.classList.remove("active");
            if (option.dataset.lang === language) {
                option.classList.add("active");
            }
        });
    }

    // Function to change language
    function changeLanguage(language) {
        currentLanguage = language;
        updateActiveLanguage(language);
        
        translatableElements.forEach((element) => {
            const key = element.dataset.translatable;
            const translatedValue = translations[language] && translations[language][key];

            if (translatedValue === undefined) {
                return;
            }

            if (element.tagName.toLowerCase() === "input") {
                // If it's an input, update its value
                element.value = translatedValue;
            } else {
                // Otherwise, update its text content
                element.textContent = translatedValue;
            }
        });

        // Update both resume tracks to language-specific files with EN fallback.
        try {
            const fullstackResumeMap = {
                en: "assets/docs/resume-fullstack/resume-fullstack-en.pdf",
                fr: "assets/docs/resume-fullstack/resume-fullstack-fr.pdf",
                zh: "assets/docs/resume-fullstack/resume-fullstack-zh.pdf"
            };
            const xrResumeMap = {
                en: "assets/docs/resume-xr/resume-xr-en.pdf",
                fr: "assets/docs/resume-xr/resume-xr-fr.pdf",
                zh: "assets/docs/resume-xr/resume-xr-zh.pdf"
            };
            ["hero-fullstack-resume", "work-fullstack-resume", "contact-fullstack-resume"].forEach((id) => {
                const anchor = document.getElementById(id);
                if (anchor) {
                    anchor.href = fullstackResumeMap[language] || fullstackResumeMap.en;
                }
            });
            ["hero-xr-resume", "work-xr-resume", "contact-xr-resume"].forEach((id) => {
                const anchor = document.getElementById(id);
                if (anchor) {
                    anchor.href = xrResumeMap[language] || xrResumeMap.en;
                }
            });
        } catch (e) {
            // non-blocking: if anything goes wrong, leave links as-is
            console.warn("Resume language switcher error", e);
        }

        // Optional: Store the selected language in local storage for persistence
        localStorage.setItem("currentLanguage", language);
    }

    // Add event listeners to language options
    languageOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const newLanguage = option.dataset.lang;
            changeLanguage(newLanguage);
        });
    });

    // Initialize the language
    changeLanguage(currentLanguage);
});
