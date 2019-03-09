import { Header, HeaderItemWrapper } from '@zendeskgarden/react-chrome';
import React from 'react';

const TitleBar = () => {
  return (
    <Header>
      <HeaderItemWrapper maxX>
        <h1>Zendesk Ticket View</h1>
      </HeaderItemWrapper>
    </Header>
  );
};

export default TitleBar;
