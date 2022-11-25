import {Link} from "react-router-dom";
import Inicio from "../../pages/InicioPage";

const Nav = (props) => {
    return (
        <nav>
<div>
<ul>
<li><Link to="/Inicio">Inicio</Link></li>
<li><Link to="/Vapes">Vapes</Link></li>
<li><Link to="/Novedades">Noticias</Link></li>
<li><Link to="/Contacto">Contacto</Link></li>
</ul>
</div>
        </nav>
    )
}

export default Nav;