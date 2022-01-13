//Triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base + " cm";
}
function areatriangulo(base, altura){
    return (base * altura) / 2 + " cm^2";
}

//Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloLado1");
    const lado1 = input.lado1;

    const input = document.getElementById("InputTrianguloLado2");
    const lado2 = input.lado2;

    const input = document.getElementById("InputTrianguloBase");
    const base = input.base;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}