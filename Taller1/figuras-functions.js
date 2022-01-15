//Cuadrado
function perimetroCuadrado (lado){
    return lado * 4 + " cm";
}
function areaCuadrado (lado){
    return lado * lado + " cm^2";
}


//Triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base + " cm";
}
function areatriangulo(base, altura){
    return (base * altura) / 2 + " cm^2";
}


//Circulo
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //radio * 2
    return diametro * Math.PI; //🤯 el scope de diametro es solo dentro de esta function.
}
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}




// Obteniendo los valores de los inputs del HTML:
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloLado1");
    const ladoA = Number(input.value);

    const inputA = document.getElementById("InputTrianguloLado2");
    const ladoB = Number(inputA.value);

    const inputB = document.getElementById("InputTrianguloBase");
    const base = Number(inputB.value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputB = document.getElementById("InputTrianguloBase");
    const base = Number(inputB.value);

    const inputC = document.getElementById("InputTrianguloAltura");
    const altura = Number(inputC.value);

    const area =areatriangulo(base, altura);
    alert(area);
}

//Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const diametro = diametroCirculo(radio);
    alert(diametro);
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    alert(area);
}