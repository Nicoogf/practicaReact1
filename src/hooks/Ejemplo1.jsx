import React , { useState } from 'react';


const Ejemplo1 = () => {

    const valorInicial = 0 ; 
    
    const personaInicial = {
        nombre : "Martin" ,
        email : "martingomes@gmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /* Actualizar Estado */


    function incrementarContador(){
        setContador( contador + 1 )
    } 



    function actualizarPersona(){
        setPersona ( {
            nombre : "Pepe",
            email : "pepe@gmail.com"
        } )
    }



    return (
        <div>
            <h1>  Ejemplo de UseState ()  </h1>
            <h2> Contador : {contador} </h2>
            <h2> Datos  de la persona </h2>
            <h3>  Nombre : {persona.nombre }</h3>
            <h3>  Email : {persona.email }</h3>
            <div> 
                <button onClick={incrementarContador}> Aumentar </button>
                <button onClick={actualizarPersona}> Actualizar </button>
            </div>

        </div>
    );
}

export default Ejemplo1;
