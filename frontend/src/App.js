
//import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
     <Header/>
     <BrowserRouter>
     <Nav/>
     <Routes>

<Route path="/" element={<Inicio/>}/>
<Route path="/" element={<Vapes/>}/>
<Route path="/" element={<Noticias/>}/>
<Route path="/" element={<Contacto/>}/>

</Routes>

</BrowserRouter>
     <Footer/>

    </div>
  );
}

export default App;
