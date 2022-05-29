import { useEffect, useState } from 'react';
import { getArticles } from '../services';
import Article from './Article';
import ArticleCard from './ArticleCard';



function Container() {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {

        try{
            const {data} = await getArticles();

            if(data.success){
                setArticles(data.response);
            }
        }
        catch(err){
            console.error(err)
        }

    } 
        


    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div>

            <div className='flex flex-wrap items-center gap-8 justify-center m-10'>
                {articles.map((article) => {
                    return article.map(({title, description, category, _id}, idx) => {
                        return <ArticleCard 
                            key={idx} 
                            id={_id}
                            title={title}
                            description={description}
                            category={category}
                        />
                    })
                })}

                <Article/>

            </div>
        </div>
    )
}

export default Container