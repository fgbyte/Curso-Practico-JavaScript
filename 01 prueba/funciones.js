var name = "Juan David";
var lastname = "Castro Gallego";
var nickname = "juandc";



function tcompleteName (myname, myLastname){
    return myname + " " + myLastname;
}

var completeName = tcompleteName(name, lastname);
console.log(completeName);

//Juan David Castro Gallego

console.log("Mi nombre es "
+ completeName
+ ", pero prefiero que me digas "
+ nickname + ".");

//Mi nombre es Juan David Castro Gallego, pero prefiero que me digas juandc.