jQuery(document).ready(function($){
    $('.menu-con').on('click',function(){
        $('#mobile-menu-bar').toggleClass('active');
    });
    $('#mobile-menu-bar .category-opener').on('click',function(){
        $(this).next('ul').slideToggle("slow");
    });
    $('#top-bar .menu-meta-activator').on('click',function(){
        $('#top-bar .user-meta').toggleClass('active');
    });
    if ($(window).width() <= 992){
        $('#footer .collapsable').on('click', function(){
            $(this).next('ul').slideToggle("slow");
        });
    }
    /*$('#section-banner-owl').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items:1,
        margin: 0,              
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    if ($(window).width() <= 992){
        $('.widgets-title.collapsable').on('click',function(){
            $(this).next('.footer-menu').slideToggle();
        });
    }*/
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();