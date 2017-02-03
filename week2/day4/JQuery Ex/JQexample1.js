$('document').ready(function() {
        $('.hamburger-menu').on('click', function() {
            $('.menu-bar, .overlay').fadeIn();
        });

        $('.close-menu').on('click', function() {
            $('.menu-bar, .overlay').fadeOut();
        });
    });