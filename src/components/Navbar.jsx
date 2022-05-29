import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    const [y, setY] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            setY(window.scrollY);
        });

        return () => {window.removeEventListener('scroll', () => {})};
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
    }

    return (
        <div className={`fixed top-0 z-10 w-full flex items-center justify-between flex-wrap flex-col space-y-5 md:space-y-0 md:flex-row py-4 px-6 bg-white ${y > 0 && "shadow-lg"}`}>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <Menu/>
                </IconButton>
                
                <Link to="/">
                    <img
                        className='object-contain h-8 cursor-pointer'
                        src="https://www.freepnglogos.com/uploads/fox-logotype-black-text-png-0.png"
                        alt="" 
                    />
                </Link>
            </div>

            <div className='flex flex-wrap space-x-2 text-sm font-bold'>
                <h3>Call Us: 9053133342</h3>
                <span>/</span>
                <h3>hello@example.com</h3>
            </div>

            <div className='flex items-center flex-col md:flex-row md:space-x-6 font-bold'>
                <Link to="/" className='p-2 hover:bg-gray-300 hover:rounded-md'>Home</Link>
                <Link to="/user" className='p-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black'>Your Articles</Link>
                <Link to="/add" className='p-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black'>Add Articles</Link>
                <Link to="/login" className='p-2 hover:bg-gray-300 hover:rounded-md' onClick={handleLogout}>
                    Logout
                </Link>
            </div>

        </div>
    )
}

export default Navbar