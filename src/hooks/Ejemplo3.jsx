import React , { useState , useContext } from 'react'



const miContexto = new React.createContext()

const Componente1 = () => {

const state = useContext(miContexto)

  return (
    <div>
        <h1> El Token es  : { state.token } </h1>
        <Componente2 > </Componente2>
    </div>
  )
}


const Componente2 = () => {

    const state = useContext(miContexto)
    return (
      <div>
          <h2> ID de la sesion es : {state.sesion} </h2>
      </div>
    )
  }

  
export default function MiComponenteConContexto () {

    const estadoInicial = {
        token : "123123",
        sesion : 1
    }

    const [sesionData , setSessionData ] = useState(estadoInicial)


    function ActualizarSesion(){
        setSessionData ({
            token : "APFINS",
            sesion : sesionData.sesion + 1
        })
    }


    return (
    
         <miContexto.Provider value= {sesionData}>
            <Componente1></Componente1>
            <button onClick={ActualizarSesion}>Actualizar Sesion</button>
         </miContexto.Provider>
    )
  }