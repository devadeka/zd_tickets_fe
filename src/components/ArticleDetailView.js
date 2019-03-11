import { Main } from '@zendeskgarden/react-chrome';
import React from 'react';
import '../App.css';

const ArticleDetailView = ({ selectedArticle }) => {
  return (
    <Main className='Content-Panel'>
      <h2 className='Detail-Title'>{ selectedArticle.title }</h2>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: selectedArticle.body }}></p>
    </Main>
  );
};

export default ArticleDetailView;
