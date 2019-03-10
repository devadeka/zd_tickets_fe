import ArticleDetailView from '../components/ArticleDetailView';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ArticleDetailView />', () => {
  let articleDetailView;

  beforeEach( () => {
    const selectedArticle = {
      title: 'Test',
      body: 'test'
    };

    articleDetailView = shallow(<ArticleDetailView selectedArticle={ selectedArticle } />).render();
  });

  it('contains a <h1 />', () => {
    expect(articleDetailView.find('h2').length).toBe(1);
  });
  
  it('displays correct title', () => {
    expect(articleDetailView.find('h2').text()).toEqual('Test');
  });

  it('contains a body test', () => {
    expect(articleDetailView.text()).toContain('test');
  });
});

describe('<ArticleDetailView /> with html-string content', () => {
  let articleDetailView;

  beforeEach( () => {
    const selectedArticle = {
      title: 'Test',
      body: '<h3>test</h3>'
    };

    articleDetailView = shallow(<ArticleDetailView selectedArticle={ selectedArticle } />).render();
  });

  it('contains a <h3 />', () => {
    expect(articleDetailView.find('h3').length).toBe(1);
  });
  
  it('displays correct content html', () => {
    expect(articleDetailView.find('h3').html()).toEqual('test');
  });
});