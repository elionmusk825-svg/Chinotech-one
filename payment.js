/*
=====================================================
CHINOTECH ONE MARKETPLACE
PAYSTACK PAYMENT
=====================================================
*/

const CHINOTECH_PAYSTACK_LINK =
"https://paystack.shop/pay/kkof1e1670";


/*
=====================================================
CART CHECKOUT
=====================================================
*/

function checkout(){

    if(typeof cart !== "undefined" && cart.length === 0){

        if(typeof toast === "function"){
            toast("Your cart is empty");
        }else{
            alert("Your cart is empty");
        }

        return;
    }

    /*
    Save the current cart on the device.
    This does NOT process payment.
    It simply remembers the cart before
    the customer goes to Paystack.
    */

    try{
        localStorage.setItem(
            "chinotech_cart",
            JSON.stringify(cart)
        );
    }catch(error){
        console.log("Cart could not be saved.");
    }


    /*
    Open the Paystack payment page.
    */

    window.location.href =
    CHINOTECH_PAYSTACK_LINK;

}


/*
=====================================================
BUY NOW
=====================================================
*/

function buySelected(){

    if(typeof selected === "undefined" || !selected){

        if(typeof toast === "function"){
            toast("Please select a product first");
        }else{
            alert("Please select a product first");
        }

        return;
    }


    /*
    Save selected product.
    */

    try{

        localStorage.setItem(
            "chinotech_buy",
            JSON.stringify(selected)
        );

    }catch(error){

        console.log("Product could not be saved.");

    }


    /*
    Send customer to Paystack.
    */

    window.location.href =
    CHINOTECH_PAYSTACK_LINK;

}
