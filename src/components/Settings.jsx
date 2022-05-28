import React from 'react'

function Settings() {

    const handleUpdateInfo = () => {

    }

    return (
        <div className='w-5/6 mx-auto my-5 p-5 bg-white'>
            <div className=''>
                <div className='flex items-center space-x-5 mx-44 my-4'>
                    <img
                        className='object-contain h-32 rounded-lg'
                        src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517" 
                        alt="" 
                    />
                    <h2 className='text-4xl font-bold'> Your Name </h2>
                </div>
                    
                <div className='flex space-x-10 justify-center'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>User Name</label>
                        <input type="text" className='p-2 w-full' disabled value="example@sample.com" />
                    </div>  

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>New User Name</label>
                        <input type="text" className='p-2 w-full' placeholder="example@sample.com" />
                    </div>

                </div>

                <div className='flex justify-center space-x-10'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>First Name</label>
                        <input type="text" className='p-2 w-full' placeholder="Enter first name" />
                    </div>  

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Last Name</label>
                        <input type="text" className='p-2 w-full' placeholder="Enter last name" />
                    </div>

                </div>

                <div className='flex justify-center space-x-10'>

                    <div className='basis-1/3 flex flex-col space-x-4 my-4'>
                        <label htmlFor="displayEmail" className='font-bold ml-4'>Phone Number</label>
                        <input type="text" className='p-2 w-full' placeholder='+91XXXXXXXXXX' />
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