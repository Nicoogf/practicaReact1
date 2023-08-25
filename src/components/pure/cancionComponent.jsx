import React from 'react' ;
import PropTypes from 'prop-types' ;
import { Cancion } from '../../models/cancion.class';



const cancionComponent =  ( { cancion } ) => {
      return (
        <div>
            <h1> Cancion : { cancion.nombre } </h1>
            <h2> Artista : { cancion.artista }</h2>
            <h2> Estado : {cancion.escuchada ? "La cancion fue escuchada" : "La cancion todavia no fue escuchada"} </h2>

            <h3> Calificacion : {cancion.calificacion} </h3>  

        </div>
    )
}

  cancionComponent.propTypes = {
    cancion : PropTypes.instanceOf(Cancion)
  }

export default cancionComponent
