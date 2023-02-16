import React from 'react'
import { Link } from 'react-router-dom';
function ArticlesList({articles}) {
  return (
    <>
    {articles.map(article => (
        
        <Link className='link-items' to={`/articles/${article.name}`}>
        <h3 className='title'>{article.title}</h3>
        <p className='paragraph'>{article.content[0].substring(0, 200)}</p>
        </Link>
    
))}
    </>
  )
}

export default ArticlesList