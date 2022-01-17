const lista1 = [
    100,
    200,
    300,
    500,
];

//calcular la media aritmetica de lista1
//debemos primero sumar todos los numeros.
//Como lo hacemos?

let sumaLista1 = 0; //inicializamos sumaLista1 en 0 para definir q es number y le vamos a ir adicionando los valores de lista1[] en suma ascendente.

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i]; 
    //sumalista1 va a ir incrementando su valor con los elementos de lista1[].
}

//Dividirlo entre la cantidad de elementos del array lista1[]
const promedioLista1 = sumaLista1 / lista1.length;

//Ahora llevarlo a funciones.

