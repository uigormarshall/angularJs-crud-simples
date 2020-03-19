angular.module('angularCrudSimples').config( function($routeProvider,  $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/usuarios", {
        templateUrl: "app/usuarios/usuarios.list.html",
        controller: "usuariosController"
    }).otherwise({ redirectTo: '/home' });
});