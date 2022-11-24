
//import './App.css';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Inicio from "./pages/InicioPage";
import Vapes from "./pages/VapesPage";
import Noticias from "./pages/NoticiasPage";
import Contacto from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Nav> </Nav>
     <Inicio></Inicio>
<Vapes></Vapes>
<Noticias></Noticias>
<Contacto></Contacto>
     <Footer></Footer>



    </div>
  );
}

export default App;
