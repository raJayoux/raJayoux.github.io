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

        // update CV download link(s) to language-specific file (fallback to EN)
        try {
            const cvMap = {
                en: "assets/docs/JiePengyu_CV_UnityXR_2025-09_EN.pdf",
                fr: "assets/docs/JiePengyu_CV_UnityXR_2025-09_FR.pdf",
                zh: "assets/docs/JiePengyu_CV_UnityXR_2025-09_ZH.pdf"
            };
            const cvAnchors = document.querySelectorAll('a[data-translatable="heroDownloadCV"]');
            cvAnchors.forEach(a => {
                a.href = cvMap[language] || cvMap.en;
            });
        } catch (e) {
            // non-blocking: if anything goes wrong, leave links as-is
            console.warn('CV language switcher error', e);
        }

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
