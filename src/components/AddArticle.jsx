import React, { useState } from 'react'
import { addArticle } from '../services';

function AddArticle() {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [file, setFile] = useState(null);

	const handleAddArticle = async (e) => {
		e.preventDefault();


		try{
			const {data} = await addArticle({
				title, 
				description,
				category,
				file
			});
			
			if(data.sucess){
				console.log(data.message)
			}

		} catch (err){
			console.error(err)

		}
		

	}

	return (
		<div className='bg-white w-5/6 mx-auto my-5 p-5'>
			<h1 className='text-5xl font-bold my-5 text-center'>Add an article</h1>

			<form className='w-3/5 m-auto' onSubmit={handleAddArticle}>
				<div className='my-5 h-60 w-full flex items-center justify-center fileContainer'>
					<input type="file" accept="image/*" multiple={false} className='cursor-pointer' name="img" onChange={(e) => setFile(e.target.files[0])} />
				</div>

				<div className='flex flex-col my-5'>
					<label htmlFor="title" className='text-lg font-bold'>Title</label>
					<input 
						type="text" 
						name="title" 
						placeholder='Enter Title here' 
						className='px-2 py-1'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className='flex flex-col my-5'>
					<label htmlFor="description" className='text-lg font-bold'>Description</label>
					<textarea 
						type="text" 
						name="description" 
						placeholder='Enter Description here' 
						className='px-3 py-2'
						rows={8}
						cols={60}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className='flex flex-col my-5'>
					<label htmlFor="description" className='text-lg font-bold'>Description</label>
					<select className='px-2 py-1 cursor-pointer' value={category} onChange={(e) => setCategory(e.target.value)}>
						<option value="">Select a category</option>
						<option value="Sports">Sports</option>
						<option value="Technology" >Technology</option>
						<option value="Politics" >Politics</option>
					</select>
				</div>

				<div className='flex justify-center'>
					<input 
						type="submit" 
						className='py-3 px-20 cursor-pointer font-bold border-0 bg-black text-white hover:bg-gray-300 hover:text-black' 
						value="Add article" 
					/>
				</div>

			</form>

		</div>
	)
}

export default AddArticle