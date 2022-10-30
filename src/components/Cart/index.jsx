import React from "react";
import "./cart.css"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext()

    const order ={
        comprador:{
            name: "pablo",
            email:"pallaspablo@gmail",
            phone:343423434,
            address:"lituania"
        },
        items: cart.map(product => ({id : product.id, title: product.title, price : product.price, quantity: product.quantity})),
        total: totalPrice() ,
    }
    const handleClick = () => {
        const db= getFirestore();
        const ordersCollection = collection (db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }
    
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
            <><button onClick={handleClick}>Comprar</button></>
        </>
    )
}
export default Cart