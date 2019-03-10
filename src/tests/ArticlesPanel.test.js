import ArticlesPanel from '../components/ArticlesPanel';
import { Button } from '@zendeskgarden/react-buttons';
import { mount } from 'enzyme';
import { Pagination } from '@zendeskgarden/react-pagination';
import React from 'react';

describe('<ArticleDetailView />', () => {
  let articlesPanel;

  const setArticlesData = jest.fn();
  const setSelectedArticle = jest.fn();

  const articles = [1, 2, 3].map(elem => ({
    id: elem,
    title: `Article ${elem}`,
    body: '...'
  }));

  const articlesData = {
    page: 1,
    page_count: 5,
    articles: articles
  };


  beforeEach( () => {
    articlesPanel = mount(
      <ArticlesPanel 
        articlesData={ articlesData }
        setArticlesData={ setArticlesData }
        setSelectedArticle={ setSelectedArticle }
      />);
  });

  it('contains a <Pagination />', () => {
    expect(articlesPanel.find(Pagination).length).toBe(1);
  });

  it('contains 3 <Button />', () => {
    expect(articlesPanel.find(Button).length).toBe(3);
  });

  it('displays correct article information on button', () => {
    expect(articlesPanel.find(Button).first().text()).toEqual('Article 1');
  });
});
