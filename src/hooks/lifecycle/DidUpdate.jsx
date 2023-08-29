 /** 
  * Ejemplo de uso de metodo component update componente clasey uso de hook en componete funcional
  */

 export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Cuando recibe cambios en su etado o props nuevas ")
    }


  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () =>{

    useEffect(() => {
      console.log("Comportamiento cuando recibe cambios en su estado o props nuevas")
    }, [])
    
    
    return(
      <div>
        <h1>DidUpdate</h1>
      </div>
    )

}

