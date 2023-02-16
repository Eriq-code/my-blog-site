import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path='/AboutPage' element = {<AboutPage />} />
      <Route path='/articles' element = { <ArticleListPage /> } />
      <Route path='/articles/:articleId' element = {<ArticlesPage />} />
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
