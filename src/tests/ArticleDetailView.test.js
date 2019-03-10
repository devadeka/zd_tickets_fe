import ArticleDetailView from '../components/ArticleDetailView';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ArticleDetailView />', () => {
  let articleDetailView;

  beforeEach( () => {
    articleDetailView = shallow(<ArticleDetailView title='Test' content='test' />).render();
  });

  it('contains a <h1 />', () => {
    expect(articleDetailView.find('h2').length).toBe(1);
  });
  
  it('displays correct title', () => {
    expect(articleDetailView.find('h2').text()).toEqual('Test');
  });

  it('contains a <p />', () => {
    expect(articleDetailView.find('p').length).toBe(1);
  });
  
  it('displays correct content string', () => {
    expect(articleDetailView.find('p').text()).toEqual('test');
  });
});

describe('<ArticleDetailView /> with html-string content', () => {
  let articleDetailView;

  beforeEach( () => {
    articleDetailView = shallow(<ArticleDetailView title='Test' content='<h3>test</h3>' />).render();
  });

  it('contains a <h3 />', () => {
    expect(articleDetailView.find('h3').length).toBe(1);
  });
  
  it('displays correct content html', () => {
    expect(articleDetailView.find('h3').html()).toEqual('test');
  });
});