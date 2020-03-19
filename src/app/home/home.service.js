angular.module('angularCrudSimples').service('homeService', homeService);

function homeService() {
    function getTitulo() {
        return "Home";
    }
    return {getTitulo}
}