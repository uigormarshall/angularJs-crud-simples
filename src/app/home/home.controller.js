angular.module('angularCrudSimples').controller('homeController', homeController);

homeController.$inject = ['$scope', 'homeService'];

function homeController($scope, homeService) {
    $scope.screenName = homeService.getTitulo()
}