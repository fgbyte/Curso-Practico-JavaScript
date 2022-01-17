function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista1 = [
    400000000,
    100,
    500,
    200,
];

const mitadLista1 = parseInt(lista1.length / 2); //parseInt redondea el resultado

const listaOrdenada = lista1.sort(function (a, b) { return a - b}); //ordenar la lista

//Pero si es par, hay q sacar 2 elementos y de estos el promedio

// if (lista1 es par?) { -> debemos averiguarlo
//     necesitamos tomar dos elementos
//     -> y el promedio
//     -> nos da la mediana
// }else{
    // posicion mitalLista1 dentro de lista1
    // -> mediana
//}

//Para saber si es par:
// function esPar(numerito) {
//     if (numerito es par?) {
//         return true;
//     }else{
//         return false;
//     }
// }

//Para saber si numerito es par usamos el modulo, por tanto:
// if (numerito % 2 === 0) {
// //si el modulo no da residuo (resto = 0) es par
//     return true;
// }else{
//     return false;
// }


//Entonces:
function esPar(lengthLista1) {

if (lengthLista1 % 2 === 0) {
    return true;
}else{
    return false;
}
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1]; 
    //se resta -1 a elemento1 xq aunque el paseInt arroja el valor 2, y en el array (que empiezan con 0) la posicion 2 seria la 3, de esta forma el valor no representa la mitad sino el siguiente, restandole -1 si tenemos la mitad 🤷‍♂️. 
    

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, elemento2
    ]);

    mediana = promedioElemento1y2;
    console.log("La mediana es: " + mediana);

}else{
    mediana = lista1[mitadLista1];
    console.log("La mediana es: " + mediana);
}


//Reto: 
//1- Llevar todo a funciones
//2- Ordenar la lista por tamaños, usando el metodo .sort de arrays
//3- Llevar todo a HTML