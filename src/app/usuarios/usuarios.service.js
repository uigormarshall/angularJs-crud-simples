angular.module('angularCrudSimples').service('usuariosService', usuariosService);

function usuariosService() {
    function getTitulo() {
        return "Usuários ";
    }
    function getUsuarios() {
        return [
            {
                "id":1,
                "nome":"Uigor Marshall",
                "email":"uigor.silva@acad.ifma.edu.br",
                "status":"Ativo"
            },
            {
                "id":2,
                "nome":"Ana Maria",
                "email":"ana@acad.ifma.edu.br",
                "status":"Inativo"
            },
            {
                "id":3,
                "nome":"Marcio Braha Maria",
                "email":"marcio@acad.ifma.edu.br",
                "status":"Ativo"
            }
        ]
    }
    return {getTitulo, getUsuarios}
}