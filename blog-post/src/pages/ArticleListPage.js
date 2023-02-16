import React from 'react'
import articles from './Articles-content'
import ArticlesList from '../components/ArticlesList';
import './articles.css';
function ArticleListPage() {
  return (
    <>
    <div className='body'>
    <h2 className='main-title'>Articles</h2>
     < ArticlesList articles={articles} />
    </div>
    </>
  )
}

export default ArticleListPage