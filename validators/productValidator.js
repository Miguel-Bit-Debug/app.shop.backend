function Validator(nome, descricao, valor) {
    if(nome == null || descricao == null || valor == null || nome == " " || descricao == " " || valor == " ") {
        return false
    }
}

module.exports = Validator
