import React, {useState} from "react";
import "./itemDetail.css"
import ItemContador from "../ItemContador";
import { Link } from "react-router-dom";



export const ItemDetail = ({ data }) =>{
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = (cantidad) => {
        setGoToCart(true)
    }

    return(
        <div className="contenedor">
            <div className="detail">
                <img className="detailImage" src={data.image} alt=""/>
                <div className="contenido">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to="/cart">Ir al carrito</Link>
                        :<ItemContador inicial ={1} stock= {10} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;