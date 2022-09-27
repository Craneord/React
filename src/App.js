import NavInicio from './components/NavBar';
import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <nav className='NavBar'>
        <NavInicio/>
      </nav>
      <header className="App-header">
        <ItemListContainer txt="Tutor"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
