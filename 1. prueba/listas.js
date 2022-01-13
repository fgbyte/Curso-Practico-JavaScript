//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var animales = ["perro", "gato", "conejo"];

function print(array){
    console.log(array[0]);
}
print(animales);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function print(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);      
    }
}
print(animales);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

function print(object){
      console.log(object.marca);
      console.log(object.modelo);
      console.log(object.annio);
    }
    
print(miAuto);