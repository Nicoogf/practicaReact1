import { CALIFICACION } from "./calificacion.enum";



export class Cancion {
    nombre = "";
    artista = "";
    escuchada = false ;
    calificacion = CALIFICACION.BUENA;

    constructor (nombre , artista , escuchada , calificacion){
        this.nombre = nombre ;
        this.artista = artista ;
        this.escuchada = escuchada ;
        this.calificacion = calificacion ;
    }
}