angular.module('starter.services').factory('SharedFunctions', function () {

    function getStringValuesFromFileName(filename) {
        var filenameStringArray = filename.split("_");
        return {
            date: filenameStringArray[0],
            description: filenameStringArray[1],
            amount: filenameStringArray[2],
            company: filenameStringArray[3],
            distance: filenameStringArray[4],
            category: filenameStringArray[5]
        };
    }

    return {
        readStringValuesFromFileName: function (filename) {
            return getStringValuesFromFileName(filename);
        }
    }
});

