import React from 'react';
import PropTypes from 'prop-types';
import { Cancion } from "../../models/song.class" ; 



const SongComponent = ( {song} ) => {
    return (
        <div>
            <h2>Nombre</h2>
            <h6>{song.name}</h6>
            <h2>Artista</h2>
            <h6>{song.artist}</h6>
            <h2>Escuchada :</h2>
            <h6>{song.listen ? "La cancion ya fue escuchada" : "La cancion todavia no fue escuchada"}</h6>
            <h2>Su calificacion es :</h2>
            <h6>{song.qualification}</h6>
        </div>
    );
};


SongComponent.propTypes = {
    song : PropTypes.instanceOf(Cancion)
};


export default SongComponent;
