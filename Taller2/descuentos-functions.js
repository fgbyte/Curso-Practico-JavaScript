function calcularprecioConDescuento (precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularprecioConDescuento(priceValue, discountValue);
    //vamos a mandarle el result en HTML

    const result = ResultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    return result;
}



