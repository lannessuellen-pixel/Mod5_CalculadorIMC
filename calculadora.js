//Quando clicar no botão "Calcular" o código seja executado
function calcularIMC() {

    //Entrada
    let pesoIMC = document.getElementById("peso").value;
    let alturaIMC = document.getElementById("altura").value;

    //Processamento
    let resultadoIMC = pesoIMC / (alturaIMC * alturaIMC)

    if (resultadoIMC < 18.5) {
        Classicacao = "Abaixo do peso";
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
        Classificacao = "Peso normal";
    } else if (resultadoIMC >= 25 && resultadoIMC <= 30) {
        Classificacao = "Sobrepeso";
    } else {
        Classificacao = "Obesidade";
    }

    //Saída
    //Calcular apertando o botão calcular
    document.getElementById("resultadoIMC").textContent = "Valor Final: " + resultadoIMC;
    document.getElementById("classificacaoIMC").textContent = "Classificação do IMC: " + Classificacao;

}   