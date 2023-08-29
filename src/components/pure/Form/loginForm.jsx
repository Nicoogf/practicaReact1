/**
 * Componente del Formulario de Autenticacion de usuarios
 */

import React , { useState } from 'react'

export default function loginForm() {

    const initialCredentials = [
        {
            user : "" ,
            password : ""
        }
    ];

    const [ credencial , setCredencial ] = useState( initialCredentials ) 

  return (
    <div>

    </div>
  )
}
