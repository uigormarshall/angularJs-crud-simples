angular.module('angularCrudSimples').controller('usuariosController', usuariosController);

usuariosController.$inject = ['$scope', 'usuariosService'];

function usuariosController($scope, usuariosService) {
    $scope.screenName = usuariosService.getTitulo()
}