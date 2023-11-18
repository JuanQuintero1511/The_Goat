import './App.css';
import { Barra } from './componets/Barra/Barra';
import { Header } from './componets/Header/Header';
import { Home } from './componets/Home/Home';
import { Info } from './componets/Home/Info';
import { Catalogo } from './componets/Catalogo/Catalogo';
import { Footer } from './componets/Footer/Footer';
import { Contacto } from './componets/Contacto/Contacto';
import { Final } from './componets/Final/Final';

function App() {
  return (
    <div className="App">
        <header>
            <Barra />
            <Header />
        </header>    

        <main className='main'>
          <Home />
          <Info/>
          <Catalogo />
          <Footer />
          <Contacto />
          <Final />
        </main>  
    </div>
  );
}

export default App;
