
import React, { useEffect, useState } from 'react' ;
import { LEVELS } from '../../models/levels.enum' ;
import { Task } from "../../models/task.class" ;
import TaskComponent from "../pure/task" ;



const TaskListComponent = () => {

    const defaultTask = new Task ( 'Example' , 'Default Description' , false , LEVELS.NORMAL)

   /* Estado de componente */
    const [ task, setTask ] = useState( [defaultTask] )
    const [ loading, setLoading ] = useState( false )

    // Control del Ciclo de vida
    useEffect(()=>{
        console.log(" Modificacion de tareas ")
        setLoading(false)
        return () => {
            console.log("La lista de tareas desaparecio con un didmount")
        }
    } , [ task ])

   
    const changeCompleted = (id) =>{
        console.log("CAMBIAR ESTADO")
    }

    return (
        <div>

            <div>
                Tu tarea :
            </div>

            <TaskComponent task={defaultTask}></TaskComponent>
           
        </div>
    );
};




export default TaskListComponent;
