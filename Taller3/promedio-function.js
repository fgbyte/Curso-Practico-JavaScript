
//Media aritmetica
function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];
// } 

//el for funciona, vamos a ver otro metodo.

    //Metodo reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { //funcion anonima que mientras se va reduciendo el array con .reduce, va sumando el valor acumulado + el otro parametro
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

