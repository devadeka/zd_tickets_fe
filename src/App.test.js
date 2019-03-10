import App from './App';
import ArticleDetailView from './components/ArticleDetailView';
import ArticlesPanel from './components/ArticlesPanel';
import React from 'react';
import TitleBar from './components/TitleBar';
import { shallow } from 'enzyme';

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
