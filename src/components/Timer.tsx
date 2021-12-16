import React, { useEffect, useRef, useState } from 'react'



type TimerArgs = {
    miliseg: number,

}


export const Timer = ({miliseg}:TimerArgs) => {

    const [segundos, setsegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>()


    useEffect(() => {
    
    ref.current && clearInterval(ref.current)
    
    ref.current = setInterval(() => setsegundos(s => s + 1), miliseg);
    
    

}, [miliseg])

    return (
        <>
            <h4>timer: <small>{segundos}</small> </h4>
        </>
    )
}
