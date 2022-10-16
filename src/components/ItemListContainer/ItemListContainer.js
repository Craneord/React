import React, {useState, useEffect} from "react"
import ItemContador from "../ItemContador";
import Title from "../Title";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const skins =[
    {id : 1, image:"https://static1-es.millenium.gg/articles/9/48/28/9/@/261649-preludio-al-caos-skins-valorant-article_cover_bd-1.jpg", category:"armas", title:"Chaos"},
    {id:2, image:"https://cdn.oneesports.gg/cdn-data/2022/05/Valorant_Neptune_Skin_Bundle.webp", category:"armas", title:"Neptune"},
    {id:3, image:"https://www.theloadout.com/wp-content/sites/theloadout/2021/08/valorant-skins.jpg", category:"armas", title:"MagePunk"},
    {id : 4, image:"https://earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/valorant-gun-buddies.jpg?mtime=1645126608", category:"amuleto", title:"buddies"},
    {id:5, image:"https://pbs.twimg.com/media/EZa0NNtXQAIbWOM.jpg", category:"amuleto", title:"Rangos"},

];




export const ItemListContainer = ({greeting}) =>{
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=> {
        const getData= new Promise(resolve =>{
            setTimeout(() => {
                resolve(skins);
            }, 1000);
        });
        if (categoriaId){
            getData.then(res => setData (res.filter(objeto=> objeto.category === categoriaId)));
        }
        else {
            getData.then(res => setData(res));
        }

    },[categoriaId])

    const onAdd = (cantidad) => {
        console.log (`Unidades seleccionadas ${cantidad}`)
    }
    
    return (
        <div>
        <Title greeting ={greeting}/>
        <ItemContador inicial ={1} stock= {10} onAdd={onAdd}/>
        <ItemList data={data}/>
        
        </div>
        
    );
}
export default ItemListContainer;