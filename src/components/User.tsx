import React, { useState } from 'react'

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'abc32',
    name: 'Invitado'
}



export const User = () => {

    const [user, setuser] = useState<User>(tempUser)

    const login = () => {
        setuser({
            uid: 'abc123',
            name: 'Christian'
        });
    };

    return (
        <div className='container mt-5'>
            <h3>User</h3>
            <button 
            onClick={login}
            className='btn btn-outline-primary mt-2'>
            Login
            </button>
            {
                (!user)
                ? <pre>No hay usuario</pre>
                : <pre>{JSON.stringify( user )}</pre>

            }

        </div>
    )
}
