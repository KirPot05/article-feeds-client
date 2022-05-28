import { useEffect, useState } from 'react';
import Login from './Login';

function Private({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {


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