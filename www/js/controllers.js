angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CarpetCleaningCtrl', function($scope) {


  $scope.cleaning = [
    {room: 1, price: 10},
    {room: 2, price: 20},
    {room: 3, price: 30},
    {room: 4, price: 40},
    {room: 5, price: 50},
    {room: 6, price: 60},
    {room: 7, price: 70},
    {room: 8, price: 80},
    {room: 9, price: 90},
    {room: 10, price: 100}];
  $scope.selectedRoomCleaning = $scope.cleaning[0].price;  


  $scope.protect = [
    {room: 1, price: 1},
    {room: 2, price: 2},
    {room: 3, price: 4},
    {room: 4, price: 8},
    {room: 5, price: 16},
    {room: 6, price: 32},
    {room: 7, price: 64},
    {room: 8, price: 124},
    {room: 9, price: 256},
    {room: 10, price: 512}];  
  $scope.selectedRoomProtect = $scope.protect[0].price;    

  $scope.deodorize = [
    {room: 1, price: 12},
    {room: 2, price: 13},
    {room: 3, price: 14},
    {room: 4, price: 15},
    {room: 5, price: 16},
    {room: 6, price: 17},
    {room: 7, price: 18},
    {room: 8, price: 19},
    {room: 9, price: 20},
    {room: 10, price: 21}];
  $scope.selectedRoomDeodorize = $scope.deodorize[0].price;  

  $scope.total = function total(a, b, c) {
    return a+b+c;
  };

})

.controller('AreaRugCtrl', function($scope) {


})