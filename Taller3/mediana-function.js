function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function (a, b) { return a - b}); //ordenamos lista
    const mitadLista = parseInt(listaOrdenada.length / 2) //redondeamos

    function esPar(lengthLista) {

        if (lengthLista % 2 === 0) { //validamos par
            return true;
        }else{
            return false; //validamos impar
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) { //trabajamos con par
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, elemento2
        ]);
    
        mediana = promedioElemento1y2;
        console.log("La mediana es: " + mediana);
    
    }else{ //trabajamos con impar
    mediana = listaOrdenada[mitadLista];
    console.log("La mediana es: " + mediana);
    }
}


//Inputs de HTML
function onclickCalcularMediana() {
    myLista = 0;
    const InputLista = document.getElementByName("array[]");
    myLista = InputLista.value;

    const myMediana = calcularMediana(myLista);
    const result = ResultP.innerText = "La mediana es: " + myMediana;
    return result;
}

//Hasta aqui funciona la function introduciendo calcularMediana([23, 34, 231, 4]) de forma desordenada igual pincha la function.
//Lo que no pincha son los Inputs del HTML, tengo q haberiguar como es