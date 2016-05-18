// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'ngCordova', 'jett.ionic.filter.bar']) //, 'ionicLazyLoad', 'ui.thumbnail'

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            if (cordova.plugins.Keyboard.hideKeyboardAccessoryBar) {
                // iOS only
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($compileProvider, $stateProvider, $urlRouterProvider, $cordovaAppRateProvider) { // ThumbnailServiceProvider, $sceProvider

    //$sceProvider.enabled(false);

    // otherwise both defaults to 100
    //ThumbnailServiceProvider.defaults.width = 30;
    //ThumbnailServiceProvider.defaults.height = 30;

    //---------------------------------------------------------------------------
    document.addEventListener("deviceready", function () {

        var prefs = {
            language: 'en',
            appName: 'Slipscan',
            //iosURL: '<my_app_id>',
            androidURL: 'market://details?id=slipscan.driekwartappel'
            //windowsURL: 'ms-windows-store:Review?name=<...>'
        };
        $cordovaAppRateProvider.setPreferences(prefs);
    }, false);

    //---------------------------------------------------------------------------
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|ms-appx-web|x-wmapp0):/);

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|ms-appx-web|x-wmapp0):|data:image\//);

    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html'
      })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })

    //.state('app.browse', {
    //    url: '/browse',
    //    views: {
    //      'menuContent': {
    //        templateUrl: 'templates/browse.html'
    //      }
    //    }
    //  })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }
        }
    })
    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'contactCtrl'
            }
        }
    })
    .state('app.history', {
        url: '/history',
        views: {
            'menuContent': {
                templateUrl: 'templates/history.html',
                controller: 'historyCtrl'
            }
        }
    })
    .state('app.detail', {
        url: '/detail/:filename/:fromPage',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail.html',
                controller: 'detailCtrl'
            }
        }
    })

    .state('app.rateapp', {
        url: '/rateApp',
        views: {
            'menuContent': {
                templateUrl: 'templates/rateApp.html',
                controller: 'rateAppCtrl'
            }
        }
    })


     .state('app.newItem', {
         cache: false,
         url: '/new/:imageFrom',
         views: {
             'menuContent': {
                 templateUrl: 'templates/newItem.html',
                 controller: 'newItemCtrl'
             }
         }
     });



    //.state('app.single', {
    //  url: '/playlists/:playlistId',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/playlist.html',
    //      controller: 'PlaylistCtrl'
    //    }
    //  }
    //});
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

});
