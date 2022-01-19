const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {}; //objeto vacio para guardar las veces que se repite un numero en la lista (moda).

//Vamos a llenarlo usando uno de los metodos de recorrido de arrays, en este caso el .map

lista1.map(
    function (elemento){
        if (lista1Count[elemento]) { //si ya existe un elemento
            lista1Count[elemento] += 1; //sumale +1 para la siguiente posicion 
        }else{ //si no existe, ponle el 1
        lista1Count[elemento] = 1;
        }
    }
); //ahora lista1Count tiene un elemento por cada elemento que hay en lista1

//Ahora hay q buscar el elemento de nuestro objeto lista1Count que tenga el valor mas alto.

//Una solucion puede ser convertir este objeto en un array y en este array ver cual es el elemento mas grande.

const lista1Array = Object.entries(lista1Count).sort(function (elementoA, elementoB){return elementoA[1] - elementoB[1];} 
) 

//a Object.entries() le podemos enviar como argumento el objeto que queremos convertir en un array (lista1Count). Pero esto entra los elementos en modo objeto entrando el primer elemento como un string y el 2do (el que nos hace falta para la moda) como number.

//Con .sort podemos ordenar el array y de esta forma obtener la ultima posicion de este 🤓

// debemos poner [1] en los elementos A y B porque como estos elementos no son numeros directos sino arrays, tenemos que decirle a .sort que entre a las posiciones [1] dentro de los arrays (que los arrays tienen 1 sola posicion 😐)

const moda = lista1Array[lista1Array.length - 1]; //nos da la ultima posicion, ya que si bien el .length nos dice cual es la longitud, la posicion va a ser -1 xq los arrays comienzan con 0.

//console.log(moda); // "2", 5


//Reto
//Convertir el codigo a una function calcularModa