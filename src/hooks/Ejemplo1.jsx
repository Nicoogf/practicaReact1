/* Ejemplo de useState */ 

import React , { useState } from 'react'

const Ejemplo1  =  () =>{


    //Valor Inicial para contador
    const valorInicial = 0
    
    // Valor inicial para persona
    const personaInicial = {
        nombres : "Martin",
        email: "martin@gmail.com"
    }


    const [ contador, setContador] = useState(valorInicial) ;
    const [ persona , setPersona] =  useState(personaInicial) ;

   
    /* Funcion para actualizar el estado privado */ 
    function incrementarContador(){
        setContador(contador + 1 )
    }

    function actualizarPersona(){
        setPersona({
            nombres : "NuevoUsuario",
            email: "NuevoUsuario@gmail.com"
        })
    }




    return(

        <div>

                <h1> *** Ejemplo de UseState() ***</h1>
                <h2> contador : { contador } </h2>
                <h2> Persona : </h2>

                <h3> Nombre :{persona.nombres} </h3>
                <h3> Correo :{persona.email} </h3>

                <div>
                    <button onClick={incrementarContador}> Aumentar</button>
                    <button onClick={actualizarPersona}> Actualizar</button>
                </div>

        </div>
    )
}

export default Ejemplo1 ; 