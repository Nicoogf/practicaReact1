import React from 'react'
import PropTypes from 'prop-types'
import { Movie } from '../../models/movies.class'
import { CALIFICACION } from '../../models/movies.enum'
import MovieComponent from '../pure/movies'

function MoviesListComponent() {

  const newMovie = new Movie ( "Scary Movie 5" , 2012 , "Comedia" , CALIFICACION.BUENA , 0)

  return (
    <div>

      <MovieComponent movie={ newMovie }> </MovieComponent>

    </div>
  )
}



export default MoviesListComponent
