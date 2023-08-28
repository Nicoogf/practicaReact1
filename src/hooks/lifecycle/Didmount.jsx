/** 
 * Ejemplo de uso del ciclo de vida del metodo en componente clase y el hook de diclo de vida en componnente funcional
 */

import React, { Component  ,  useEffect } from 'react'

export class Didmount extends Component {
    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM (antes de que se rederice) ")
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidmountHook = () =>{

    useEffect(() => {
      console.log("Comportamiento antes de que el componente sea añadido al Dom")
    }, [])
    
    
    return(
        <div>
            <h1>DidMount</h1>
        </div>
    )

}

