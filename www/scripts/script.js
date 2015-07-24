/**
 * Created by avi on 11/06/2015.
 */

(function(){

    var smsAppModule = angular.module('smsApp', [])
        .controller('MainController', ['$scope', function($scope){
            var fileHandler = function(){
                $scope.tmp = "tmp";
                console.log($scope.tmp)
            };
            fileHandler();
        }]);

     var smsplugin = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");

})();

