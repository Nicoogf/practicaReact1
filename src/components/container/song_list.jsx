import React from 'react';
import { Cancion } from "../../models/song.class"
import { QUALIFICATION } from '../../models/qualification.enum';
import SongComponent from '../pure/song';


const SongList = () => {

    const cancionTest = new Cancion("Chau Mohicano" , "FDAA" , true , QUALIFICATION.GOOD )

    return (
        <div>
            <SongComponent song={cancionTest} > </SongComponent>
        </div>
    );
};


SongList.propTypes = {

};


export default SongList;
