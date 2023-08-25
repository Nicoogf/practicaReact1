/**
 * Ejemplo de uso de 
 * useState()
 * useRef()
 * useEffect()
 */

import React , { useState,  useRef , useEffect} from 'react'

const Ejemplo2 = ()=> {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)


    const miRef = useRef()


    function incrementar1 (){
        setContador1(contador1 + 1 )
    }


    function incrementar2 (){
        setContador2(contador2 + 2 )
    }

    /***
     * Ejemplo de useEfect
     * caso 1 Ejecutar un snippet de codigo
     * cada vez que hay un cambio en el estado del componente se ejectura lo que este dentro del use efect
    */

     /* useEffect(() => {
        console.log("Hubo un cambio en el estado del componente")
        console.log(`El elemento de DOM referenciado es : ${miRef} `)        
    })*/


    /* 
    useEffect(()=>{
        console.log("Hubo cambios en contador 1")
    } , [contador1])
    */

    useEffect(()=>{
        console.log("El contador 1 o el contador 2 sufrieron modificaciones")
    }, [contador1 , contador2])


      return (
      <div>
          <h1> *** Ejemplo de UseState() useRef() useEffect()***</h1>
                <h2> contador 1 : { contador1 } </h2>
                <h2> contador 2 : { contador2 } </h2>

                {/* Se usa la referencia */}

                <h4 ref={miRef}> Ejemplo de referencia </h4>

               

                <div>
                    <button onClick={incrementar1}> Aumentar uno</button>
                    <button onClick={incrementar2}> Aumentar dos</button>
                </div>
      </div>
  )
}

export default Ejemplo2 ;