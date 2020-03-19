angular.module('angularCrudSimples').controller('usuariosController', usuariosController);

usuariosController.$inject = ['$scope', 'usuariosService'];

function usuariosController($scope, usuariosService) {
    $scope.screenName = usuariosService.getTitulo();
    $scope.tabelaColunas = ['id', 'nome', 'email', 'status'];
    $scope.usuarios = usuariosService.getUsuarios();
}