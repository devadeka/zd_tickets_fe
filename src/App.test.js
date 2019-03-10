import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import ArticleDetailView from './components/ArticleDetailView';
import ArticlesPanel from './components/ArticlesPanel';
import TitleBar from './components/TitleBar';

describe('<App />', () => {
  let app;

  beforeEach( () => {
    app = shallow(<App />);
  });

  it('contains a <TitleBar />', () => {
    expect(app.find(TitleBar).length).toBe(1);
  });
  
  it('contains a <ArticlesPanel />', () => {
    expect(app.find(ArticlesPanel).length).toBe(1);
  });

  it('contains a <ArticleDetailView />', () => {
    expect(app.find(ArticleDetailView).length).toBe(1);
  });
});
