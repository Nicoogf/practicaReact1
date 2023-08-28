import React ,  {useState , useContext} from 'react' ; 


const miContexto = React.createContext(null)




function ContenedorUno() {
    const informacion = useContext(miContexto)

    return (

        <div>
            <h1>La sesion es : { informacion.id } </h1>
            <ComponenteDos></ComponenteDos>              
        </div>

       

  )
}

    

    function ComponenteDos() {
     const informacion = useContext(miContexto)
     return (
     <div>
        <h2>La sesion es : { informacion.num } </h2>    
     </div>
  )
}




export default function ContenedorMain() {

    const estadoInicial = {
        id : "KS8S" ,
        num : 1
    }

    const [ data , setData ] = useState(estadoInicial)

    function Actualizar(){
        setData ({
            id : "Nueva Sesion",
            num : data.num + 1
        })
    }
  
  return (
    <miContexto.Provider value = {data} >

        <ContenedorUno></ContenedorUno>
        <button onClick={Actualizar}>Probar</button>



    </miContexto.Provider>
  )
}



