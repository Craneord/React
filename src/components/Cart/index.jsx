import React from "react";
import "./cart.css"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext()
    
    if (cart.length === 0){
    
        return(
        <>
            <p>Carrito vacio</p>
            <Link to="/">Volver a compras</Link>
        </>
    )
}

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/> )
            }
            <p>
                TOTAL: {totalPrice()}
            </p>
        </>
    )
}
export default Cart