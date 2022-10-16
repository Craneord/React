import React from "react";
import "./itemDetail.css"


export const ItemDetail = ({ data }) =>{
    return(
        <div className="contenedor">
            <div className="detail">
                <img className="detailImage" src={data.image} alt=""/>
                <div className="contenido">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;