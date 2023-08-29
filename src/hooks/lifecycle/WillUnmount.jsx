/**
 * Ejemplo de uso del metedo component will para componente de clase
 * y jemplo de uso de hooks para componentes funcionales 
 * (Cuando desaparece el componente)
 */

import React, { Component , useEffect} from 'react'

export default class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparesca ")
    }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
    </div>
    )
  }
}



export const WillUnmountHook = () => {

    useEffect (()=>{
        return()=>{
        console.log("Comportamiento antes de que desaparezca ")
        }, []}
     )
    
    
  return (
    <div>
        <h1>WillUnmount</h1>
    </div>
  )
}
