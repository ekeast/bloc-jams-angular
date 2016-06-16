(function() {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    function config($stateProvider, $locationProvider) {
    }
    
    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: '/templates/landing.html'
    })
    .state('album', {
        url: '/album',
        templateUrl: '/templates/album.html'
    });
    
    angular 
        .module('blocJams', ['ui.router'])
        .config(config);
})();