import React from "react";

const Contacto = (props) => {
    return (
        <div className="formulario">
    <form className="form1">
        <label><input type="name" placeholder="NOMBRE" class="fdos" style="color: black;"/></label>
        <label><input type="email" placeholder="E-MAIL" class="fdos" style="color: black;"/></label>
        <label><input  placeholder="ASUNTO" class="fdos" style="color: black;"/></label>
        <label><input type="text"  class="ftres" style="color: black;"/></label>
        <label><input type="submit" style="color: black; border-radius: 30px; cursor: pointer;"/></label>
    </form>
</div>

    )
}

export default Contacto;