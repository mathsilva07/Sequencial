// variáveis
let numero1, numero2, resultado1;



//Saída


function somar() {
    // entrada
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    // processamento
    resultado1 = numero1 + numero2;
    // saída
    document.getElementById("resultado1").innerHTML = "Resultado: " + resultado1;
}

// variáveis

let Celsius, F;

function converter() {
    //entrada
    Celsius = parseFloat(document.getElementById("celsius").value);

    //processamento
    F = (Celsius * 9 / 5) + 32;

    // saída
    document.getElementById("resultado2").innerHTML = "F = " + F;


}


//variáveis

let altura, raio, volume;

function mostrarresultado() {
    //entrada
    altura = parseFloat(document.getElementById("altura").value);
    raio = parseFloat(document.getElementById("raio").value);

    //processamento
    volume = (3.14159 * raio ** 2 * altura);

    //saída
    document.getElementById("resultado3").innerHTML = "volume = " + volume;
}
//variáveis

let comprimento, largura, altura2, volume2;

function volumecaixa() {

// entrada
comprimento = parseFloat(document.getElementById("comprimento").value);
largura = parseFloat(document.getElementById("largura").value);
altura2 = parseFloat(document.getElementById("altura2").value);

//processamento
volume2 = (comprimento * largura * altura2);

//saída

document.getElementById("resultado4").innerHTML = "volume2: " + volume2;

}

