import '@zendeskgarden/react-radios/dist/styles.css';
import '../App.css';

import { Radio, Label } from '@zendeskgarden/react-radios';

import React from 'react';

const SortRadioGroup = ({ articlesData, setArticlesData }) => {
  const setSortOrder = sortOrder => setArticlesData({
    page: articlesData.page,
    page_count: articlesData.page_count,
    order: sortOrder,
    articles: articlesData.articles
  });

  const handleSortOptionClick = event => {
    console.log(event);
  }
  
  //setSortOrder(event.target.value);

  return (
    <div>
      <Radio 
        name="sort-order"
        value="asc"
        onClick={setArticlesData}>
          <Label>Asscending</Label>
      </Radio>
      <Radio  
        name="sort-order"
        value="dsc"
        onClick = { evt => handleSortOptionClick(evt) }>
          <Label>Descending</Label>
      </Radio>
      <input type="radio" id="test" onClick={setArticlesData} />
    </div>
  )
};

export default SortRadioGroup;