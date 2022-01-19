function calcularprecioConDescuento (precio, descuento) {

     const porcentajePrecioConDescuento = 100 - descuento;
     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

     return precioConDescuento;
}

// function onclickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice")
//     const priceValue = inputPrice.value;


    // const inputDiscount = document.getElementById("InputDiscount")
    // const discountValue = inputDiscount.value;


    // const precioConDescuento = calcularprecioConDescuento(priceValue, discountValue);
    //vamos a mandarle el result en HTML

    // const result = ResultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    // return result;
//}


// Reto Cupones 
// Metodo Error First

//array coupons
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
]


function onClickButtonCouponDiscount() {

    //Referencias del HTML
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCoupon");
    const couponValue = inputCupon.value;

    //error first
    if (!coupons.includes(couponValue)) {
    alert("El cupon " + couponValue + "no es valido"); 
    }
    //Validaciones
    else if(couponValue === "JuanDC_es_Batman"){
        descuento = 15;
    }else if(couponValue === "pero_no_le_digas_a_nadie"){
        descuento = 30;
    }else if(couponValue === "es_un_secreto"){
        descuento = 25;
    }
    

    const precioConDescuento = calcularprecioConDescuento(priceValue, descuento);

    const result = ResultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    return result;
    
}


