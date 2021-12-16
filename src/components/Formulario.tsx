import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'


interface formData {
    email: string,
    nombre: string,
    edad: number,
}


export const Formulario = () => {

    const {nombre, email, edad, handleChange, formulario} = useForm<formData>({
        email: "Chris@esteban.com",
        nombre: "Chris",
        edad: 23,
    });

    //const {email, nombre} = formulario;

    return (
        <div className='my-3'>
            <label className='form-label'>Email</label>
            <input type="email"
            className='form-control'
            name="email"
            onChange={handleChange}
            value={email}
            >
            </input>

            <label className='form-label'>Nombre</label>
            <input type="text"
            className='form-control'
            name="nombre"
            onChange={handleChange}
            value={nombre}
            >
            </input>

            <pre> {JSON.stringify(formulario) } </pre>


        </div>
    )
}
