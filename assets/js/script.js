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



