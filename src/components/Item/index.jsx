import "./item.css"
import React from "react"
import ItemContador from "../ItemContador";

const Item= ({info})=>{
    return(
        <a href="" className="skin">
            <p className="title">{info.title}</p>
            <img src={info.image} alt=""></img>

        </a>
    )
}
 export default Item;