import { QUALIFICATION } from "./qualification.enum";

export class Cancion {
    name = '' ;
    artist = '';
    listen = false ;
    qualification = QUALIFICATION.GOOD;
    
    constructor (name , artist , listen , qualification) {
        this.name = name ;
        this.artist = artist ;
        this.listen = listen ;
        this.qualification = qualification ;
    }
}