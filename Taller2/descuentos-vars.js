// vars

const precio = 120;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


console.log({
    precio,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); //de esta forma puedo imprimir todas las vars en un modelo objeto.


