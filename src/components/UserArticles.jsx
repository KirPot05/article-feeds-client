import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUserArticles } from '../services';
import Article from './Article'
import ArticleCard from './ArticleCard'

function UserArticles() {

	const [articles, setArticles] = useState([]);

	const fetchArticles = async () => {

        try{
            const {data} = await getUserArticles();

            if(data.success){
                setArticles(data.response);
            }
        }
        catch(err){
			console.error(err);
		}

    }

	useEffect(() => {
		fetchArticles();
	}, []);


	return (
		<div className='my-10 mx-10'>

			<Link to="/settings" className='p-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black font-bold'>Edit Personal Info</Link>
			<div className='w-5/6 flex flex-wrap items-center gap-8 justify-center mx-auto '>

				{articles.map(({ title, description, category, _id }, idx) => {
					return <ArticleCard
						key={idx}
						id={_id}
						title={title}
						description={description}
						category={category}
					/>
				})}


				<Article />

			</div>
		</div>
	)
}

export default UserArticles