import { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {

	const [credentials, setCredentials] = useState({ email: "", password: "" });


	const handleInput = (e) => {
		setCredentials({
			...credentials, [e.target.name]: e.target.value
		})
	}


	const handleLogin = (e) => {
		e.preventDefault();
	}

	return (
		<div className="w-4/5 mt-20 mb-5 mx-auto py-5 flex items-center justify-center space-x-2 bg-white rounded-md" style={{height: "80vh"}}>

			<div className='basis-2/5'>

				<h2 className='text-3xl font-bold px-4 mb-4 text-center' >Sign In</h2>

				<form className='flex flex-col space-y-1 px-5' onSubmit={handleLogin}>

					<div className='flex flex-col my-2'>
						<label htmlFor="email">Email</label>
						<input className='px-2 py-1 ' type="email" name="email" value={credentials.email} onChange={handleInput} />
					</div>


					<div className='flex flex-col my-2'>
						<label htmlFor="password">Password</label>
						<input className='px-2 py-1 ' type="password" name="password" value={credentials.password} onChange={handleInput} />
					</div>


					<div className='flex flex-col my-2'>
						<input className='mt-3 p-1 bg-black opacity-90 text-white font-bold cursor-pointer' type="submit" value="Login"/>
					</div>

					<div className='py-3'>
						<span>Don't have an account? <Link to="/register" className='text-blue-500 font-bold cursor-pointer'> Create One </Link> </span> 
					</div>

				</form>
			</div>

			<div>
				<img
					className="object-contain h-96"
					src="https://res.cloudinary.com/dmgvpfnfa/image/upload/v1653732928/Woman_characters_having_business_conversation_or_meeting_eahmo3.jpg"
					alt="" />
			</div>
		</div>
	)
}

export default Login