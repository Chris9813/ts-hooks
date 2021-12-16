import React, { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {

    const [miliseg, setmiliseg] = useState(1000)

    return (
        <div>
            <span>Milisegundos {miliseg} </span>
            <Timer miliseg = {miliseg}/>
            <button 
            onClick={() => setmiliseg(1000)}
            className='btn btn-outline-success mb-3'>
                1000
            </button>
            
            <button 
            onClick={() => setmiliseg(2000)}
            className='btn btn-outline-success mb-3'>
                2000
            </button>

        </div>
    )
}
