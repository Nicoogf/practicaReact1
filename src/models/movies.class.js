import { CALIFICACION } from "./movies.enum";

export class Movie {
    nombre = "";
    anio = 0 ;
    genero = "" ; 
    calificacion =  CALIFICACION.MUY_BUENA ;
    views = 0

    constructor( nombre , anio , genero , calificacion , views) {
        this.nombre =  nombre;
        this.anio =  anio;
        this.genero =  genero;
        this.calificacion =  calificacion;
        this.views = views
    }
}