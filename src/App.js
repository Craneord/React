import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <nav className='NavBar'>
        <NavBar/>
      </nav>
      <header className="App-header">
        <ItemListContainer/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
