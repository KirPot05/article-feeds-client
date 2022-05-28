import React from 'react'
import Article from './Article'
import ArticleCard from './ArticleCard'

function UserArticles() {
  return (
        <div className='w-5/6 flex flex-wrap items-center gap-8 justify-center mx-auto my-10'>
            {Array.from({ length: 6 }).map((_, idx) => {
                return <ArticleCard key={idx} />
            })}

            <Article/>

        </div>
  )
}

export default UserArticles