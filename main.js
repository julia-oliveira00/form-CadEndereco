'use strict'; //Strict mode
// https://viacep.com.br/

//Função para limpar formulário
//Arrow function
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}