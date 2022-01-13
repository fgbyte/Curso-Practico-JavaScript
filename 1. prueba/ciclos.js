// 1. El loop es una manera rapida y sencilla de hacer que una tarea pueda repertirse sin que lo tengas que hacer de forma manual.

//for()
//for of()
//while
//do while

//Un sitio infinito es un problema porque puede jodernos la makina.
//Yes, se pueden mezclar los ciclos con condicionales sin problemas.

//2. Replica el comportamiento de los siguientes ciclos  for  utilizando ciclos  while :

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
    }

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
    }
   
//Respuestas
var i = 0;
while (i < 5){
        console.log("El valor de i es: " + i++);   
}

var i = 10;
while(i >= 2){
    console.log("El valor de i es " + i--);
}

//3.
var result = prompt("Ingresa cuanto es 2 + 2");

for (let i = 0; i < 100; i++) {
    if (result == "4") {
        console.log("Felicidades"); 
    }else{
     result = prompt("Ingresa cuanto es 2 + 2");
    }
}
    

