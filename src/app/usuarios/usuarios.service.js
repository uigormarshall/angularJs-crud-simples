angular.module('angularCrudSimples').service('usuariosService', usuariosService);

function usuariosService() {
    function getTitulo() {
        return "Usuários ";
    }
    return {getTitulo}
}