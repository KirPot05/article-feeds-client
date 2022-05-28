import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddArticle() {

	const { id } = useParams();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	const handleAddArticle = (e) => {
		e.preventDefault();
	}

	return (
		<div className='bg-white w-5/6 mx-auto my-5 p-5'>
			<h1 className='text-5xl font-bold my-5 text-center'>Edit article</h1>

			<form className='w-3/5 m-auto' onSubmit={handleAddArticle}>
				<div className='mx-auto my-5 h-60 bg-gray-500'>

				</div>

				<div className='flex flex-col my-5'>
					<label htmlFor="title" className='text-lg font-bold'>Title</label>
					<input
						type="text"
						name="title"
						placeholder='Enter Title here'
						className='px-2 py-1'
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
					/>
				</div>

				<div className='flex flex-col my-5'>
					<label htmlFor="description" className='text-lg font-bold'>Description</label>
					<select className='px-2 py-1 cursor-pointer'>
						<option value="Select a category">Select a category</option>
						<option value="Sports">Sports</option>
						<option value="Technology">Technology</option>
						<option value="Politics">Politics</option>
					</select>
				</div>

				<div className='flex justify-center'>
					<input
						type="submit"
						className='py-3 px-20 cursor-pointer font-bold border-0 bg-black text-white hover:bg-gray-300 hover:text-black'
						value="Save Changes"
					/>
				</div>

			</form>

		</div>
	)
}

export default AddArticle