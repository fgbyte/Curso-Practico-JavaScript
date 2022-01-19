function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function (elemento){
            if (listaCount[elemento]) { //existe
                listaCount[elemento] += 1; //agrega otro que empiece con 2...
            }else{ //no existe
                listaCount[elemento] = 1; //que empiece con 1
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(function (a, b) {
        return a[1] - b[1];
    })

    const moda = listaArray[listaArray.length - 1];
    return moda;
}

//and donde 🤓
//calcularModa([1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,])

//-> (2) ['2', 5]