<h1 align="center">Cadastro de Endereço</h1>
<p align="center">Um site que puxa o endereço pelo cep inserido usando <code>json</code> e <code>strictmode</code></p>

# Introdução
![](img/projetocadendereco.png)

Assim que voce insere o Cep e clica em tab o site deverá retornar preenchendo automaticamente as informações de endereço.

___

<h3>Em que casos o site não retorna as informações esperadas?</h3>

* Caso o usuário clique em cadastrar ou na tecla enter a vizualização das informações previamente não será possivel.
* Caso o cep esteja errado, incompleto ou eceder o numero de caracteres o site emitira um aviso e o site não retornará as informações.
  
<h3>Exemplos:</h3>
<p>Caso o usuário digite um cep de 8 digitos inválido:</p>

![](img/exemplo.png)

<p>Caso o usuário digite um cep incompleto ou com carcteres extras:</p>

![](img/exemplo1.png)

# Códigos
```js
"use strict"; //Strict mode
// https://viacep.com.br/

//Função para limpar formulário
//Arrow function
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
```
```js
//verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Responsável pelo preenchimento do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
```
```js
//Função para o consumo de API da via cep
const pesquisaCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {
        const dados = await fetch(url); //esperar
        const address = await dados.json(); //retornar dados no formato JSON

        if (address.hasOwnProperty("erro")) {
            alert("CEP não encontrado");
        } else {
            preencherFormulario(address);
        }
    } else {
        alert("CEP incorreto");
    }
}
```
```js
//Adiciona um evento DOM no input do CEP
document.getElementById('cep').addEventListener('focusout', pesquisaCep);
```
