import '@zendeskgarden/react-pagination/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

import { Button } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Sidebar } from '@zendeskgarden/react-chrome';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import React from 'react';

const ArticlesPanel = ({ articlesData }) => {
  return (
    <ThemeProvider>
      <Sidebar style={{ padding: 28 }}>
        <Pagination
          currentPage={articlesData.page}
          totalPages={articlesData.page_count}
        />
        <hr />
        {
          articlesData.articles.map((article, index) => <div key={index}>
            <Button stretched basic>{article.title}</Button>
          </div>)
        }
      </Sidebar>
    </ThemeProvider>
  );
};

export default ArticlesPanel;
