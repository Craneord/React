import {BrowserRouter, Route ,Routes} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <nav className='NavBar'>
          <NavBar />
        </nav>
    </div>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/categorias/:categoriaId" element={<ItemListContainer />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
