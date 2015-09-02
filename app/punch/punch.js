angular.module('PunchApp',[]).controller("PunchController",
function($scope) {
    var punches = [];
    $scope.date = '';
    $scope.time = '';
    
    $scope.addPunch = function() {
        punches.push({date: $scope.date, time: $scope.time});
    };
    
    $scope.getAll = function() {
        return punches;
    };
    
    $scope.getPunchesByDay = function(date) {
        return punches.filter(function(element){
            return element.date == date;
        });
    };
    
    $scope.getPunchesBetween = function(startDate, endDate) {
        //TODO
    };
});

