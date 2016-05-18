angular.module('starter.services').factory('FileHandling', function ($cordovaFileTransfer, $ionicHistory, $cordovaFile, $state, $location) {

    function downloadFileContinued(url, externalDirFile, filename) {
        document.addEventListener('deviceready', function () {
            var download = $cordovaFileTransfer.download(url, externalDirFile).then(function (success) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.transitionTo("app.detail", { filename: filename, fromPage: "newItem" });
                //return true;
                //todo change this function to a defer
            }, function (error) {
                alert("Error " + JSON.stringify(error));
                return false;
            }, function (progress) {
            });
        });
    }


    function downloadFile(url, filename, folderNameRoot, folderNameLowest) {
        document.addEventListener('deviceready', function () {
            var externalDirFile = folderNameRoot + folderNameLowest + "/" + filename;
            //Check directory
            $cordovaFile.checkDir(cordova.file.dataDirectory, folderNameLowest)
            .then(function (success) {

                //no problem, folder already exists
                downloadFileContinued(url, externalDirFile, filename);

            }, function (error) {

                //Create directory
                $cordovaFile.createDir(cordova.file.dataDirectory, folderNameLowest, false)
                .then(function (yaysuccess) {
                    downloadFileContinued(url, externalDirFile, filename);
                }, function (error) {
                    alert("Could not create directory:" + +JSON.stringify(error));
                    return false;
                });
            });

        });
    };

    return {
        getDeviceName: function () {
            //todo get ios folder and blackberry and windows
            var device = "";
            if (window.parent && window.parent.ripple) {
                device = "emulated";
            } else {
                device = "device";
            }
            return device;
        },
        getfoldernameRoot: function(device) {
            var folderNameRoot = "";
            //if (device === "windows") {
            //    folderNameRoot = "c:/temp/" + "DCIM/";
            //} else {
                folderNameRoot = cordova.file.externalRootDirectory + "DCIM/";
            //}
            return folderNameRoot;
        },
        saveImageFile: function (url, filename, folderNameRoot, folderNameLowest, device) {
            downloadFile(url, filename, folderNameRoot, folderNameLowest);
        }
    }
});

