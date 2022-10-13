import React, {useState, useEffect} from "react"
import ItemContador from "../ItemContador";
import Title from "../Title";
import ItemList from "../ItemList";

const skins =[
    {id : 1, image:"https://static1-es.millenium.gg/articles/9/48/28/9/@/261649-preludio-al-caos-skins-valorant-article_cover_bd-1.jpg", title:"Chaos"},
    {id:2, image:"https://cdn.oneesports.gg/cdn-data/2022/05/Valorant_Neptune_Skin_Bundle.webp", title:"Neptune"},
    {id:3, image:"https://www.theloadout.com/wp-content/sites/theloadout/2021/08/valorant-skins.jpg", title:"MagePunk"},
];




export const ItemListContainer = ({greeting}) =>{
    const [data, setData] = useState([])
    useEffect(()=> {
        const getData= new Promise(resolve =>{
            setTimeout(() => {
                resolve(skins);
            }, 3000);
        });
        getData.then(res => setData(res));

    },[])

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