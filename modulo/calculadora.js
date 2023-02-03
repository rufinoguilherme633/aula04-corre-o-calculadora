/* 
 *********************************************************
 *arquivo de funções para realizar calculos matemáticos 
 *DATA: 03/02/2023
 *Autor: Guilherme
 *Versão: 1.0
 *********************************************************
 */
// função -> fazer processamento de maneira que possa usar esse processamento em outros lugares
//escrevendo funções
//realizar calculo matematico das quators operações (somar, subtrair, multiplicar e dividir)

//toda entrada de dados que a função precisa precisa vir de um argumento -> os dados que podem ser alterados










// precisamso importar 


//criamos 3 argumentos
function calcular(numero1, numero2, tipoCalculo) {

    //let so exise aqui

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2;
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2;
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2;
    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('Erro: não é possivel fazer uma divisão por 0')
            entradaDados.close()
        } else
            resultado = valor1 / valor2;


    } else {
        console.log('ERRO: A operação informada é invalida, Confira sua entrada')
        entradaDados.close();
    }


    //tratando erro de underfind, tratar a variável resultado quando nenhum calculo é realizado

    //boleano
    if (resultado != undefined)
    //console.log(resultado.toFixed());
        return resultado;
    else
        return false; // retorna falso para caso eu saiba o erro
    //recomendado que torna função retorne reultado do processamento e sempre retorne false



}

//função privada

function validarValores() {

}

//prescisamos exportar para que outras pessoas se tenha aceeso em outros arquivo, como se torna-se publica

module.exports = {
    calcular
}