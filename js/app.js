// Change navigation bar style on scrolling

var myNav = document.getElementById('top-header');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 165) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// Change navigation bar links' color on click

var header = document.getElementById("my-nav");
var links = header.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Create smooth scroll while moving through page sections

var scroll = new SmoothScroll('.nav-link, .navbar-brand, .btn');

// Portfolio gallery magnetic popup

$('.gallery').magnificPopup({

    type: 'image',
    delegate: 'a',
    removalDelay: 300,
    mainClass: 'mfp-with-fade',

    gallery: {
        enabled: true
    }

});