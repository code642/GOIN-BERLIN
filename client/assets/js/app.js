(function () {
    'use strict';

    angular.module('application', [
            'ui.router',
            'ngAnimate',

            //foundation
            'foundation',
            'foundation.dynamicRouting',
            'foundation.dynamicRouting.animations'
        ])
        .config(config)
        .run(run)
    ;

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }

})();

// Calling the function
$(function () {
    $('.toggle-nav').click(function () {
        toggleNavigation();
    });
});


// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}


// SLiding codes
$("#toggle > li > div").click(function () {
    if (false == $(this).next().is(':visible')) {
        $('#toggle ul').slideUp();
    }

    var $currIcon = $(this).find("span.the-btn");

    $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');

    $currIcon.toggleClass('fa-minus fa-plus');

    $(this).next().slideToggle();

    $("#toggle > li > div").removeClass("active");
    $(this).addClass('active');

});