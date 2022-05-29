import { useEffect, useState } from 'react';
import Login from './Login';

function Private({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        if(localStorage.getItem('auth-token')){
            setIsAuthenticated(true);
        }

    }, [])

    if(isAuthenticated) {
        return (
            <div className="mt-14 py-3">
                {children}
            </div>
        ) 
    } else{
        return <Login/>

    }

}

export default Private