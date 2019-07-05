(function () {
    'use strict';
    angular
        .module('LunchCheck', [])                                           //declare module
        .controller('LunchCheckController', LunchCheckController);          //declare controller
    LunchCheckController.$inject = ['$scope'];                              //inject scope
    function LunchCheckController($scope) {
        $scope.LunchCheckFunction = function () {
            if (typeof ($scope.LunchCheckInput) == 'undefined') {
                $scope.LunchCheckMsg = "Please enter data first!";
                $scope.LunchMsgStyle = {
                    "box-sizing": "border-box",
                    "border": "1px solid red",
                    "color": "red",
                    "padding": "5px",
                    "width": "fit-content"
                }
                return;
            }
            var LunchCheckList = ($scope.LunchCheckInput).split(',');       //split input string into array by separating at comma
            for (var i = 0; i < LunchCheckList.length; i++) {
                LunchCheckList[i] = LunchCheckList[i].trim();               //remove space from before and afer the objects
            }
            LunchCheckList = LunchCheckList.filter(Boolean);                //remove empty strings
            LunchCheckList = LunchCheckList.filter(AlphabetsRequired);      //strings should contain at least one alphabet
            var x = LunchCheckList.length;                                  //get number of items
            if (x==0) {
                $scope.LunchCheckMsg = "Please enter data first!";
                $scope.LunchMsgStyle = {
                    "box-sizing": "border-box",
                    "border": "1px solid red",
                    "color": "red",
                    "padding": "5px",
                    "width": "fit-content"
                }
                $scope.LunchItemsList = "";                                                     //display final list of items
            } else if (x<=3) {
                $scope.LunchCheckMsg = "Enjoy!";
                $scope.LunchMsgStyle = {
                    "box-sizing": "border-box",
                    "border": "1px solid green",
                    "color": "green",
                    "padding": "5px",
                    "width": "fit-content"
                }
                $scope.LunchItemsList = "Your Lunch Items: " + LunchCheckList.toString();         //display final list of items
            } else if (x>3) {
                $scope.LunchCheckMsg = "Too Much!";
                $scope.LunchMsgStyle = {
                    "box-sizing": "border-box",
                    "border": "1px solid green",
                    "color": "green",
                    "padding": "5px",
                    "width": "fit-content"
                }
                $scope.LunchItemsList = "Your Lunch Items: " + LunchCheckList.toString();         //display final list of items
            }
        }
        function AlphabetsRequired(value) {
            return value.match(/[a-zA-Z]+/g);                               //used RegExp matching
        }
    }
})();
