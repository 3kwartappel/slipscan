angular.module('starter.controllers').controller('detailCtrl',
    function ($scope, $stateParams, FileHandling, $state, SharedFunctions, $ionicNavBarDelegate, $ionicHistory, $cordovaFileOpener2) {
        if ($stateParams.fromPage === "newItem") {
            //$ionicNavBarDelegate.showBackButton(false);
            $scope.showBackButton = true;
            //$ionicHistory.nextViewOptions({
            //    disableBack: true
            //});
        } else {
            //$ionicNavBarDelegate.showBackButton(true);
            $scope.showBackButton = false;
        }
        var filename = $stateParams.filename;
        var device = FileHandling.getDeviceName();
        var folderNameRoot = FileHandling.getfoldernameRoot(device);
        var folderNameLowest = "SlipScan";
        var fullFolderFileLocation = folderNameRoot + folderNameLowest + "/" + filename;
        if (device === "emulated") {
            fullFolderFileLocation = "img/ReceiptSwiss.jpg";
        }
        $scope.receiptDetail = SharedFunctions.readStringValuesFromFileName(filename);
        $scope.filename = fullFolderFileLocation;

        $scope.openImage = function (url) {
            $cordovaFileOpener2.open(decodeURIComponent(url.substr(7)), 'image/jpeg')
                    .then(function () {
                        console.log('Success');
                    }, function (err) {
                        console.log('An error occurred: ' + JSON.stringify(err));
                    });
        }


        $scope.backHomeClick = function() {
            $state.go('app.home');
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        }
    });
