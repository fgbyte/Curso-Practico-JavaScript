// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden : " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo3 
    + "cm"
    );

console.log("La altura del triangulo es es : " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;

console.log("El perimetro del triangulo es : " + perimetroTriangulo + "cm");

const areatriangulo = (baseTriangulo3 * alturaTriangulo) / 2;

console.log("El area del triangulo es : " + areatriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

//PI
//const PI = 3.1415;
const PI = Math.PI; //Math es una caja de herramientas de matematicas
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Aera
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();