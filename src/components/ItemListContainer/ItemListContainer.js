import React from "react"
import ItemContador from "../ItemContador";
import Title from "../Title";


const onAdd = (cantidad) => {
    console.log (`Unidades seleccionadas ${cantidad}`)
}

const ItemListContainer = ({greeting}) =>{
    
    return (
        <div>
        <Title greeting ="tutor"/>
        <ItemContador inicial ={1} stock= {10} onAdd={onAdd}/>
        </div>
        
    );
}
export default ItemListContainer;