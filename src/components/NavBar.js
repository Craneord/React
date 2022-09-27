import CartWidget from "./CartWidget";
const NavBar = () => {
    return(
        <nav className="NavDecorations">
            <ul className="NavListado">
                <li><a href="#" className="NavDecorations">Inicio</a></li>
                <li><a href="#" className="NavDecorations">Productos</a></li>
                <li><a href="#" className="NavDecorations">Carrito</a></li>
                <li><a href="#"className="NavDecorations">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
        );
}
export default NavBar;