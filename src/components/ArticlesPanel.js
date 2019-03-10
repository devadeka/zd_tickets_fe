import '@zendeskgarden/react-pagination/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

import { Button, ButtonGroup } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Sidebar } from '@zendeskgarden/react-chrome';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import React, { useState } from 'react';

const ArticlesPanel = ({ articlesData, setArticlesData, setSelectedArticle }) => {
  const [selectedKey, setSelectedKey] = useState('-1');

  const setPageNumber = pageNumber => setArticlesData({
    page: pageNumber,
    page_count: articlesData.page_count,
    articles: articlesData.articles
  });

  const getArticleFromIdString = idString => articlesData
    .articles
    .filter(article => article.id === Number.parseInt(idString, 10))[0];

  const setButtonArticle = articleKey => {
    if (articleKey) {
      setSelectedKey(articleKey);
      setSelectedArticle(getArticleFromIdString(articleKey));
    }
  };

  return (
    <ThemeProvider>
      <Sidebar style={{ padding: 28, minWidth: 450 }}>
        <Pagination
          stretched
          currentPage={articlesData.page}
          totalPages={articlesData.page_count}
          onChange={currentPage => setPageNumber(currentPage)}
          pagePadding={1}
        />
        <hr />
        <ButtonGroup
          selectedKey={selectedKey}
          onStateChange={newState => setButtonArticle(newState.selectedKey)}
          style={{ display: 'flex', flexDirection: 'column'}}
        >
          {articlesData
            .articles
            .map(article => <Button 
              key={ `${article.id}` }
              stretched
              basic>
                {article.title}
              </Button>)}
        </ButtonGroup>
      </Sidebar>
    </ThemeProvider>
  );
};

export default ArticlesPanel;
