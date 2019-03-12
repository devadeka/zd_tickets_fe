import '@zendeskgarden/react-pagination/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '../App.css';

import { Button, ButtonGroup } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Sidebar } from '@zendeskgarden/react-chrome';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import React, { useState } from 'react';

const ArticlesPanel = ({ articlesData, setArticlesData, setSelectedArticle }) => {
  const [selectedKey, setSelectedKey] = useState(null);

  const setPageNumber = pageNumber => setArticlesData({
    page: pageNumber,
    page_count: articlesData.page_count,
    articles: articlesData.articles
  });

  const getArticleFromIdString = idString => articlesData
    .articles
    .find(article => article.external_id === Number.parseInt(idString, 10));

  const setButtonArticle = articleKey => {
    if (articleKey) {
      setSelectedKey(articleKey);
      setSelectedArticle(getArticleFromIdString(articleKey));
    }
  };

  return (
    <ThemeProvider>
      <Sidebar className='Content-Panel Articles-Panel'>
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
          className='Articles-Button-Group'
        >
          {articlesData
            .articles
            .map(article => {
	      return <Button 
                key={ `${article.external_id}` }
                stretched
                basic>
                  {article.title}
              </Button>
	    })
	  }
        </ButtonGroup>
      </Sidebar>
    </ThemeProvider>
  );
};

export default ArticlesPanel;
