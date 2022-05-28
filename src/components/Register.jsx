import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

	const [credentials, setCredentials] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		date: "",
		password: "",
		confirmPassword: ""
	});

	const [preferences, setPreferences] = useState([]);

	const handleInput = (e) => {
		setCredentials({
			...credentials, [e.target.name]: e.target.value
		})
	}

	const handlePreferences = (e) => {

		if (e.target.checked) {
			switch (e.target.name) {
				case "Sports":
					setPreferences([...preferences, "Sports"])
					break;

				case "Politics":
					setPreferences([...preferences, "Politics"])
					break;

				case "Technology":
					setPreferences([...preferences, "Technology"])
					break;
				default:
					break;
			}
		}
	}


	const handleLogin = (e) => {
		e.preventDefault();
	}

	return (
		<div className="w-4/5 mt-20 mb-5 mx-auto py-10 flex items-center space-x-2 bg-white rounded-md">
			<div className='flex flex-col items-center'>
				<img
					className="object-contain h-96"
					src="https://res.cloudinary.com/dmgvpfnfa/image/upload/v1653732928/Woman_characters_having_business_conversation_or_meeting_eahmo3.jpg"
					alt="" />

				<p> Already have an account? <Link to="/login" className='font-bold text-blue-500'> Login </Link> </p>
			</div>

			<div className='basis-2/5'>

				<h2 className='text-3xl font-bold px-4 mb-4'>Register</h2>

				<form className='flex flex-col space-y-1 px-5' onSubmit={handleLogin}>
					<div className='flex flex-col my-2'>
						<label htmlFor="firstName">First Name</label>
						<input className='px-2 py-1 ' type="text" value={credentials.firstName} name="firstName" onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="lastName">Last Name</label>
						<input className='px-2 py-1 ' type="text" name='lastName' value={credentials.lastName} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="phone">Contact Number</label>
						<input className='px-2 py-1 ' type="tel" name="phone" value={credentials.phone} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="email">Email</label>
						<input className='px-2 py-1 ' type="email" name="email" value={credentials.email} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="date">Date</label>
						<input className='px-2 py-1 ' type="date" name="date" value={credentials.date} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="password">Password</label>
						<input className='px-2 py-1 ' type="password" name="password" value={credentials.password} onChange={handleInput} />
					</div>

					<div className='flex flex-col my-2'>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input className='p-2 ' type="password" name="confirmPassword" value={credentials.confirmPassword} onChange={handleInput} />
					</div>

					<div className='flex items-center space-x-4 my-2'>
						<div className='flex items-center space-x-1'>
							<label htmlFor="Sports">Sports</label>
							<input className='p-1' type="checkbox" name='Sports' onChange={handlePreferences} />
						</div>

						<div className='flex items-center space-x-1'>
							<label htmlFor="Politics">Politics</label>
							<input className='p-1' type="checkbox" name='Politics' onChange={handlePreferences} />
						</div>

						<div className='flex items-center space-x-1'>
							<label htmlFor="Technology">Technology</label>
							<input className='p-1' type="checkbox" name="Technology" onChange={handlePreferences} />
						</div>
					</div>

					<div className='flex flex-col my-2'>
						<input className='mt-3 p-1 bg-black opacity-90 text-white font-bold cursor-pointer' type="submit" value="Submit" />
					</div>

				</form>
			</div>
		</div>
	)
}

export default Login