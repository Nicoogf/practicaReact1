 /* import React , { useState , useContext }from 'react'

const miContexto = React.createContext( null )


export default function  MiComponenteConContexto() {

    const estadoInicial = {
     token : "12345677", 
     sesion : 1
    }
 
    const [sesiondata, setSesionData] = useState(estadoInicial)
 
    function actualizarSesion(){
     setSesionData({
         token : "JQOWEJ", 
         sesion : 2
        })
    }
     
 
     return (
       <miContexto.Provider value = {sesiondata}>
         <Componente1></Componente1>
         <button onClick={ actualizarSesion }> Actualizar </button>
       </miContexto.Provider>
     )
   }
   

  const  Componente1= () => {  

    const estado = useContext(miContexto)
       
     return (
       <div>
   
           <h1>El token es : { estado.token } </h1>
   
          <Componente2> </Componente2>
   
       </div>
     )
   }
   

   
const  Componente2= () => {

    const estado = useContext(miContexto)

    return (
      <div>
        <h2> La sesion es : { estado.sesion }</h2>
      </div>
    )
  }

  */


