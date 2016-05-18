angular.module('starter.controllers').controller('historyCtrl', function ($scope, $ionicHistory, FileHandling, $cordovaFile, SharedFunctions, $ionicFilterBar, $ionicNavBarDelegate) {
  
    var device = FileHandling.getDeviceName();
    var folderNameRoot = FileHandling.getfoldernameRoot(device);
    var folderNameLowest = "SlipScan";
    //$ionicNavBarDelegate.showBackButton(true);

   function parseFileList(fileList) {
       var items = [], filterBarInstance;

       for (i = 0; i < fileList.length; i++) {
           var item = SharedFunctions.readStringValuesFromFileName(fileList[i].name);
           item.fullPath = fileList[i].fullPath;
           item.nativeURL = fileList[i].nativeURL;
           item.filename = fileList[i].name;
           items.push(item);
       }

       items.sort(function (a, b) {
           if (a.date > b.date) return -1;
           if (a.date < b.date) return 1;
           return 0;
       });

       $scope.items = items;

       $scope.showFilterBar = function () {
           filterBarInstance = $ionicFilterBar.show({
               items: $scope.items,
               update: function (filteredItems) {
                   $scope.items = filteredItems;
               }
           });
       };
   }

   if (device !== "emulated") {
        $cordovaFile.listDir(folderNameRoot, folderNameLowest)    // READ FROM DEVICE FOLDER LIST OF FILES
            .then(function (fileList) {
                var success = "";
                parseFileList(fileList);
            }, function (error) {
                alert("No files could be found");
            });
    } else {
        var fileList = [ //SET DUMMY FILE LIST
            {
                fullPath: "img/ionic.png",
                name: "2012-12-12 12:12:12_asdasd_Google_12_This is awesome1_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12_asdasd_Google_12_This is awesome2_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12_asdasd_Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12_asdasd_Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12_asdasd asd asdasd asd as dasd_Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }, {
                fullPath: "img/test.jpg",
                name: "2012-12-12 12:12:12__Google_12_This is awesome3_Fuel",
                nativeURL: "img/test.jpg"
            }
        ];
        parseFileList(fileList);
    }

});
