//1. 
// - Qué es una condicional?
//Una condicional son reglas que van a validar si algo es true o false y podamos generar ciertas acciones con eso.

//- Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//if ()
// si esto es true, entonces...

//else if ()
//ademas si este si es true, entonces...

//else ()
//de no ser true ninguno entonces...

//?, : -> Operador Ternario
//Operacion para resumir el if y el else en ? y : respectivamente. Usado mayormente para pasar vars a las DB.

//switch()
//Itera por varios casos, de cumplirse para, sino sigue hacia el siguiente. De no cumplirse ninguno te manda al default.

//- ¿Puedo combinar funciones y condicionales?
// si, perfectamente.


//2. Replica el comportamiento del siguiente código que usa la sentencia  switch  utilizando  if ,  else  y  else if :


var tipoDesuscripcion = "Basic";

if (tipoDesuscripcion === "Free") {
    console.log("solo puedes tomar los cursos gratis");
}else if (tipoDesuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDesuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDesuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Error");
}