angular.module('starter.controllers').controller('rateAppCtrl', function ($cordovaAppRate) {
    document.addEventListener("deviceready", function () {
        $cordovaAppRate.promptForRating(true).then(function (result) {
            // success
        });
    }, false);
});

//angular.module('starter.controllers').controller('rateAppCtrl', function ($scope, $stateParams, $state) {

//    });

