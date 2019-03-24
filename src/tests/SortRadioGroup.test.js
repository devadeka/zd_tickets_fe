import SortRadioGroup from '../components/SortRadioGroup';
import { Radio, Label } from '@zendeskgarden/react-radios';
import React from 'react';
import { mount } from 'enzyme';


describe('<ArticleDetailView />', () => {
  let sortRadioGroup;

  const setArticlesData = jest.fn();

  beforeEach( () => {
    articlesPanel = mount(
      <SortRadioGroup 
        setArticlesData={ setArticlesData }
      />);
  });

  it('contains an asscending option', () => {
    expect(articlesPanel.find(Radio).first.value).toBe('asc');
    expect(articlesPanel.find(Label).first.text).toBe('Asscending');
  });

  it('contains a descending option', () => {
    expect(articlesPanel.find(Radio).first().value).toBe('dsc');
    expect(articlesPanel.find(Label).first().text).toBe('Descending');
  });

  it('updates selected article when an option is clicked', () => {
    articlesPanel.find(Radio).first().simulate('click');
    expect(setArticlesData.mock.calls.length).toBe(1);
  });
});
