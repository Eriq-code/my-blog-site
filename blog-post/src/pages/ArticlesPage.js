import { useParams } from 'react-router-dom'
import React from 'react'
import articles from './Articles-content';
import './articles.css';

function ArticlesPage() {
    const params = useParams();
    const articleId = params.articleId;
    const article = articles.find(article => article.name === articleId)
  return (
    <>
    <div className='body'>
    <h1>{article.title}</h1>
    {article.content.map(paragraph => (<p>{paragraph}</p>))}
    </div>
    </>
  )
}

export default ArticlesPage