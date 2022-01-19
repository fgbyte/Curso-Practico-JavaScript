//Helpers
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito){
    return (numerito % 2 === 0);
}


//.map de salarios en un nuevo array
const salariosFormatur = formatur.map( 
    function (formatur) {
        return formatur.salary;
    }
);

//ordenar los salarios con .sort
const salariosOrdenados = salariosFormatur.sort(function (a, b) {return a - b;})
//trabajamos con salariosOrdenados

//Calculadora de Medianas
function calcularMediana(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        const mediana = personitaMitad;
        return mediana;
    }
}

//Resultado Mediana General
const medianaGeneralFormatur = "La mediana de los salarios es: " + calcularMediana(salariosOrdenados); 3


//Mediana del Top 10%
//Debemos sacar de salariosOrdenados el 10% final
//Lo hacemos usando .splice sobre salariosOrdenados

// .splice necesita un punto de partida (spliceStart) y tambien saber cuantos valores a va tomar  partir de este (spliceCount).
const spliceStart = (salariosOrdenados.length * 0.9);; //debe comenzar el .splice en el 90%

const spliceCount = salariosOrdenados.length - spliceStart; //debe ser el resto del array a partir del 90%, o sea el 10% final, para ello le restamos al 100% el 90% (spliceStart).

//ejecutamos el splice
const salariosFormaturTop10 = salariosOrdenados.splice(spliceStart, spliceCount);

//poniendo salariosFormaturTop10 en la calculadora de medianas
const medianaTop10Formatur = "El top 10% gana: " + calcularMediana(salariosFormaturTop10)

//Imprimiendo resultados
console.log(
    medianaGeneralFormatur,
    "|||",
    medianaTop10Formatur,
);

