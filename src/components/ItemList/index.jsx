import Item from "../Item";
import React from "react";

const ItemList= ({data =[]})=>{
    return (
        
        data.map(skins => <Item key={skins.id} info={skins}/>)

    );
}
export default ItemList