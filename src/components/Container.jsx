import React from 'react'
import Article from './Article'
import ArticleCard from './ArticleCard'

function Container() {
    return (
        <div>

            <div className='flex flex-wrap items-center gap-8 justify-center m-10'>
                {Array.from({ length: 8 }).map((_, idx) => {
                    return <ArticleCard key={idx} />
                })}

                <Article/>

            </div>
        </div>
    )
}

export default Container