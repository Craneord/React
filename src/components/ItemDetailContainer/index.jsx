import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";





const skins =[
    {id : 1, image:"https://static1-es.millenium.gg/articles/9/48/28/9/@/261649-preludio-al-caos-skins-valorant-article_cover_bd-1.jpg", category:"armas", title:"Chaos"},
    {id:2, image:"https://cdn.oneesports.gg/cdn-data/2022/05/Valorant_Neptune_Skin_Bundle.webp", category:"armas", title:"Neptune"},
    {id:3, image:"https://www.theloadout.com/wp-content/sites/theloadout/2021/08/valorant-skins.jpg", category:"armas", title:"MagePunk"},
    {id : 4, image:"https://earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/valorant-gun-buddies.jpg?mtime=1645126608", category:"amuleto", title:"buddies"},
    {id:5, image:"https://pbs.twimg.com/media/EZa0NNtXQAIbWOM.jpg", category:"amuleto", title:"Rangos"},


];

export const ItemDetailContainer = () =>{
     const [data, setData] = useState=({});
     const {detalleId} = useParams();
    
     useEffect(() => {
        const getData= new Promise(resolve => {
            setTimeout(() => {
                resolve(skins);
            }, 1000);
        });

        getData.then(res => setData(res.find(skin => skin.id === parseInt(detalleId))))

    },[])

    return(
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;

