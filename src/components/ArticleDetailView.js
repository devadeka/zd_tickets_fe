import { Main } from '@zendeskgarden/react-chrome';
import React from 'react';

const ArticleDetailView = ({ selectedArticle }) => {
  return (
    <Main style={{ padding: 28 }}>
      <h2 style={{ marginTop: 0 }}>{ selectedArticle.title }</h2>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: selectedArticle.body }}></p>
    </Main>
  );
};

export default ArticleDetailView;
