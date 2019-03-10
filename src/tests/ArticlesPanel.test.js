import ArticlesPanel from '../components/ArticlesPanel';
import { Button } from '@zendeskgarden/react-buttons';
import { mount } from 'enzyme';
import { Pagination } from '@zendeskgarden/react-pagination';
import React from 'react';

describe('<ArticleDetailView />', () => {
  let articlesPanel;
  const articles = [1, 2, 4].map(articleNum => ({ 
    title: `Article ${articleNum}`
  }));

  beforeEach( () => {
    articlesPanel = mount(<ArticlesPanel articles={articles} />);
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
