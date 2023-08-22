import React from 'react';
import { Task } from "../../models/task.class" ;
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from "../pure/task"



const TaskListComponent = () => {

    const defaultTask = new Task( "Ejemplo" , "Ejemplo por defecto" , false , LEVELS.NORMAL) 


    return (

        <div>
            <div>
               Your Tasks : 
            </div>

            {/* Aplicar un map para renderizar tareas*/ }

            <TaskComponent task={defaultTask} > </TaskComponent>
        </div>

    );
};




export default TaskListComponent;
