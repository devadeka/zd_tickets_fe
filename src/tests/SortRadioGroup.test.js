import SortRadioGroup from '../components/SortRadioGroup';
import { Radio, Label } from '@zendeskgarden/react-radios';
import React from 'react';
import { mount } from 'enzyme';


describe('<SortRadioGroup />', () => {
  let sortRadioGroup;

  const setArticlesData = jest.fn();

  const articlesData = {
    page: 1,
    page_count: 5,
    order: 'asc',
    articles: [1, 2, 3].map(elem => ({
      id: elem,
      title: `Article ${elem}`,
      body: '...'
    }))
  };

  beforeEach( () => {
    sortRadioGroup = mount(
      <SortRadioGroup
        articlesData={ articlesData }
        setArticlesData={ setArticlesData }
      />);
  });

  it('contains a <Pagination />', () => {
    expect(sortRadioGroup.find(Radio).length).toBe(2);
  });

  it('contains an asscending option', () => {
    expect(sortRadioGroup.find(Radio).first().props().value).toBe('asc');
    expect(sortRadioGroup.find(Label).first().text()).toBe('Asscending');
  });

  it('contains a descending option', () => {
    expect(sortRadioGroup.find(Radio).last().props().value).toBe('dsc');
    expect(sortRadioGroup.find(Label).last().text()).toBe('Descending');
  });

  it('updates sort order when an option is clicked', () => {
    sortRadioGroup.find(Radio).first().simulate('click');
    expect(setArticlesData.mock.calls.length).toBe(1);
  });
});
