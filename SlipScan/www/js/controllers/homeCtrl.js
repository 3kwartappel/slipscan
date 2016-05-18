angular.module('starter.controllers').controller('homeCtrl', function ($scope, $state, $ionicHistory) {

    $scope.$on('$ionicView.loaded', function () {
        ionic.Platform.ready(function () {
            if (navigator && navigator.splashscreen) navigator.splashscreen.hide();
        });
    });

    $scope.newReceiptClicked = false;
    $scope.newReceiptClick = function() {
        $scope.newReceiptClicked = true;
    }
    $scope.cameraClick = function() {
        $state.transitionTo("app.newItem", { imageFrom: "camera" });
    }
    $scope.galleryClick = function () {
        $state.transitionTo("app.newItem", { imageFrom: "gallery" });
    }
});
