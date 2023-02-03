/* Objetivo: realizar calculos matemáticos (SOMA< Multiplicação, Divisão)
 *Data: 03/02/2023
 *Autor: Guilherme Rufino
 *versão 1.0
 */

//impoetando uma bibliotexca ou arquivo

//objeto chamado matematica que recebe required 
//como famos importar uma biblioteca nossa colocamos "." da raiz
var matematica = require('./modulo/calculadora.js');

//import da biblioteca para entrada de dados
var readline = require('readline');

//criar objeto para receber dados via teclado

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout


});

//pesuisar 

entradaDados.question('Valor1: \n', function(numero1) {
    //replace é um método pra string
    //permite trocar um counteúdo da string por outra
    //virgula é string
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('Valor2: \n', function(numero2) {

        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha umaoperação [SOMAR |SUBTRAIR | MULTIPLICAR | DIVIDIR]: \n', function(tipoCalculo) {


            // se o usuario errar uma letra maiscula ou minuscula
            // toUpperCase -> converte uma string para maiúsculo
            //toowerCase -> converte uma string para minusculo
            let operacao = tipoCalculo.toUpperCase();

            let resultado;


            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRo: Não é possivel calcular sem preencher todos osd dados');
                entradaDados.close();
                // Validadção para verificar se os dados digitados são números
                //Podemos utilizar (inNAN ou typeof)
                //se usar o typeoff preceisa garantir que o tipo de daos não é genéricos(string)
            } //else if (typeof(valor1) != 'number' || isNaN(valor2) != 'number') {
            else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO Não é possivel calcular sem a entrada de valores numericos')
                entradaDados.close();

            } else {

                // Na programação existe uma regra que toda vez que abrimos uma condicional e abribos um bloco e o bloco é composto por uma linha de resposta, as chaves são opcionais
                //a não ser que tenha mais linhas de respostas

                //chamando
                resultado = matematica.calcular(valor1, valor2, operacao);
                console.log(resultado);



            }



        })
    });


});