import '@zendeskgarden/react-chrome/dist/styles.css';
import {Body, Chrome, Content} from '@zendeskgarden/react-chrome';
import React, { useState } from 'react';
import ArticleDetailView from './components/ArticleDetailView';
import ArticlesPanel from './components/ArticlesPanel';
import TitleBar from './components/TitleBar';

const App = () => {
  const articles = [1, 2, 3].map(() => ({
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

  return (
    <Chrome className="App">
      <Body>
        <TitleBar />
        <Content>
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
