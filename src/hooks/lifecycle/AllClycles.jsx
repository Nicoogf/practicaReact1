import React ,{ useEffect }from 'react'

const llClycles= ()=> {

    useEffect(()=>{
        console.log(`Componente actualizado`)

        const intervalID = setInterval( ()=>{
            document.title = `${new Date()}`
            console.log(`Actualizacion del componente`)
        } , 1000)

            return()=>{
                console.log(`Componente va a desapareces`)
                document.title = "El tiempo de detuvo"
                clearInterval(intervalID)
            }
    },[])


  return (
    <div>

    </div>
  )
}


export default llClycles ;