import React from 'react';
import CancionComponen from "../pure/cancionComponent";
import { Cancion } from '../../models/cancion.class';
import { CALIFICACION } from "../../models/calificacion.enum"
 
function Cancion_lista() {

const cancion1 = new Cancion ("Babas del Diablo" , "Los fundamentalistas", false , CALIFICACION.EXCELENTE)

  return (
    <div>
        <CancionComponen cancion={cancion1}> </CancionComponen>
    </div>
  )
}



export default Cancion_lista
