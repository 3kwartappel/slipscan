angular.module('starter.controllers').controller('newItemCtrl',
    function ($scope, $stateParams, $ionicNavBarDelegate, $state, Camera, FileHandling, $ionicPlatform, $cordovaImagePicker, $ionicHistory) {
        
        $ionicNavBarDelegate.showBackButton(true);
        var device = FileHandling.getDeviceName();

        $scope.collection = {
            selectedImage: ""
        };

        $scope.lastPhoto = "";

        $scope.newItem = {
            company: "",
            amount: "",
            description: "",
            distance: "",
            category: "Uncategorized",
            image: ""
        }

        function redirectToHome() {

            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.home');
        }

        $scope.getImageFromGallery = function () {
            if (device !== "emulated") {
                // Image picker will load images according to these settings
                var options = {
                    maximumImagesCount: 1
                };

                $ionicPlatform.ready(function () {
                    $cordovaImagePicker.getPictures(options).then(function (results) {
                        // Loop through acquired images
                        if (results.length > 0) {
                            //$scope.lastPhoto = results[0];
                            for (var i = 0; i < results.length; i++) {
                                $scope.lastPhoto = decodeURI(results[i]); // We loading only one image so we can use it like this
                       
                                //window.plugins.Base64.encodeFile($scope.lastPhoto, function (base64) {
                                //    $scope.lastPhoto = base64;
                                //});
                            }
                        } else {
                            alert("Process cancelled");
                            redirectToHome();
                        }
                    }, function (error) {
                        alert("could get image / gallery" + JSON.stringify(error));
                        redirectToHome();
                    });
                });
            }
        };

        $scope.getPhoto = function () {
            Camera.getPicture().then(function (imageURI) {
                if (imageURI) {
                    $scope.lastPhoto = imageURI;
                } else {
                    alert("Process cancelled");
                    redirectToHome();
                }
            }, function (err) {
                alert("Process Cancelled: " + JSON.stringify(err));
                redirectToHome();
            }, {
                quality: 75,
                targetWidth: 320,
                targetHeight: 320,
                saveToPhotoAlbum: false
            });
        };

        function getCurrentDate() {
            var currentdate = new Date();
            return currentdate.getFullYear() + "-"
                + ('0' + (currentdate.getMonth() + 1)).slice(-2) + "-"
                + ('0' + currentdate.getDate()).slice(-2) + " "
                + currentdate.getHours() + "-"
                + currentdate.getMinutes() + "-"
                + currentdate.getSeconds();
        }

        function createFileName(newItem) {
            var filename = "";
            if (getCurrentDate()) {
                filename += getCurrentDate();
            }
            filename += "_";

            if (newItem && newItem.description) {
                filename += newItem.description;
            }
            filename += "_";
            if (newItem && newItem.amount) {
                filename += newItem.amount;
            }
            filename += "_";
            if (newItem && newItem.company) {
                filename += newItem.company;
            }
            filename += "_";
            if (newItem && newItem.distance) {
                filename += newItem.distance;
            }
            filename += "_";
            if (newItem && newItem.category) {
                filename += newItem.category;
            }
            filename += "_.jpg";

            return filename;
        }

        $scope.addNewReceipt = function (newItem) {
            var url = $scope.lastPhoto;
            var filename = createFileName(newItem, url);

            var folderNameRoot = FileHandling.getfoldernameRoot(device);
            var folderNameLowest = "SlipScan";


            if (device !== "emulated") {
                FileHandling.saveImageFile(url, filename, folderNameRoot, folderNameLowest, device);
            } else {
                $state.transitionTo("app.detail", { filename: filename, fromPage: "newItem" });
            }
        };

        if ($stateParams.imageFrom === "camera") {
            $scope.getPhoto();
        } else {
            $scope.getImageFromGallery();
        }


    });
