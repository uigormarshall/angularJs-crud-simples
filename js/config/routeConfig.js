app.config( function($routeProvider,  $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/usuarios", {
         templateUrl: "../views/usuarios/list.html",
         controller: "UsuariosController"
     }).otherwise({ redirectTo: '/home' });
});