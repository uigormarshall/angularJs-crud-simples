app.config( function($routeProvider,  $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/usuarios", {
         templateUrl: "js/views/usuarios/list.html",
         controller: "usuariosController"
     }).otherwise({ redirectTo: '/home' });
});