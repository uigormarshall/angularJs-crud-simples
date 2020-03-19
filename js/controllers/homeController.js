angular.module('angularCrudSimples').controller('HomeController', homeController);
homeController.$inject = ['$scope', 'homeService'];
function homeController($scope, homeService) {
    $scope.screenName = homeService.getTitulo()
}