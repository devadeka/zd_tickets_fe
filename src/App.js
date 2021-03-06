import '@zendeskgarden/react-chrome/dist/styles.css';
import {Body, Chrome, Content} from '@zendeskgarden/react-chrome';
import React, { useState, useEffect } from 'react';
import ArticleDetailView from './components/ArticleDetailView';
import ArticlesPanel from './components/ArticlesPanel';
import axios from 'axios';
import TitleBar from './components/TitleBar';

const App = () => {
  const domain = 'http://localhost:3030';
  const path = '/articles';

  const articles = [1, 2, 3].map(elem => ({
    id: elem,
    title: 'Loading...',
    body: '...'
  }));

  const [articlesData, setArticlesData] = useState({
    page: 1,
    page_count: 5,
    articles: articles
  });

  const [selectedArticle, setSelectedArticle] = useState({
    title: 'Select Article',
    body: 'To view the details of a article please click on one from our side menu.'
  });

  useEffect(() => {
    const query = `?per_page=10&page=${articlesData.page}`;

    axios
      .get(`${domain}${path}${query}`)
      .then(response => setArticlesData(response.data))
      .catch(error => console.log(error));
  }, [articlesData.page]);

  return (
    <Chrome className="App">
      <Body>
        <TitleBar />
        <Content className="Content">
          <ArticlesPanel
            articlesData={ articlesData }
            setArticlesData={ setArticlesData }
            setSelectedArticle={ setSelectedArticle }
          />
          <ArticleDetailView selectedArticle={ selectedArticle } />
        </Content>
      </Body>
    </Chrome>
  );
};

export default App;
