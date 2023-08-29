import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Movie } from "../../models/movies.class"

const MovieComponent = (  {movie}  ) => {

    const sinVisitas = 0
    const [vistas , setVistas ] = useState(sinVisitas)


    const peliculasDefault = {
      nombre : "Default" ,
      views : 0 ,
      anio : 0 ,
      genero : "Default",
      calificacion : "Default"
    }
    const [pelicula , setPelicula ] = useState(peliculasDefault)



    function Default () {
      setPelicula( pelicula )
      console.log("Se ejecuta boton")

    }
    function SumarVisita () {
      setVistas( vistas+1 )
      console.log("Se ejecuta boton")
    }

  return (


    <div>

        <h1> Nombre de la pelicula : {movie.nombre} </h1>
        <hr />
        <h3> Reproducciones : {movie.views} </h3>
        <hr />
        <h2> Año de estreno : {movie.anio} </h2>
        <hr />
        <h3> Genero : {movie.genero} </h3>
        <hr />
        <h4> Calificacion : {movie.calificacion} </h4>

        <button onClick={ SumarVisita }> Sumar Visita </button>
        <button  onClick={ Default }> Borrar por Default </button>

    </div>

  )
}

MovieComponent.propTypes = {
    movie : PropTypes.instanceOf( Movie )
}

export default MovieComponent
