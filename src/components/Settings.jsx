import React, { useEffect, useState } from 'react'
import { editUserDetails, getUserInfo } from '../services';

function Settings() {

    const [userData, setUserData] = useState(null);

    const [firstName, setFirstName] = useState( "")
    const [email, setEmail] = useState( "")
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const fetchUserDetails = async () => {

        const { data } = await getUserInfo();
        if(data.success){
            setUserData(data?.response);
            console.log(data.response)
            setFirstName(data?.response.firstName)
            setLastName(data?.response.lastName)
            setEmail(data?.response.email)
            setPhone(data?.response.phone)
            setBirthDate(data?.response.birthDate)
        }

    }

    const handleUpdateInfo = async () => {
        const req = {
            firstName,
            lastName,
            email,
            phone,
            birthDate
        };

        const {data} = await editUserDetails(req);

        if(data.success){
            console.log(data.response);
        }

    }

    useEffect(() => {
        fetchUserDetails();
    }, [])

    return (
        <div className='w-5/6 mx-auto my-5 p-5 bg-white'>
            <div className=''>
                <div className='flex items-center space-x-5 mx-44 my-4'>
                    <img
                        className='object-contain h-32 rounded-lg'
                        src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517" 
                        alt="" 
                    />
                    <h2 className='text-4xl font-bold'> {userData?.firstName + " " + userData?.lastName} </h2>
                </div>
                    
                <div className='flex space-x-10 justify-center'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Your email</label>
                        <input type="text" className='p-2 w-full' disabled value={userData?.email || ""} />
                    </div>  

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>New User Name</label>
                        <input type="text" className='p-2 w-full' placeholder="example@sample.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                </div>

                <div className='flex justify-center space-x-10'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>First Name</label>
                        <input type="text" className='p-2 w-full' placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>  

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Last Name</label>
                        <input type="text" className='p-2 w-full' placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                </div>

                <div className='flex justify-center space-x-10'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Phone Number</label>
                        <input type="text" className='p-2 w-full' minLength={10} maxLength={10} placeholder='+91XXXXXXXXXX' value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>  

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Date of Birth</label>
                        <input type="date" className='p-2 w-full' />
                    </div>

                </div>

                <div className='flex justify-center mt-10'>
                    <button
                        onClick={handleUpdateInfo}
                        className='bg-black px-10 py-3 rounded-md text-white font-bold shadow-md hover:bg-gray-300 hover:text-black'
                    > Save Changes </button>
                </div>  
            </div>
        </div>
    )
}

export default Settings