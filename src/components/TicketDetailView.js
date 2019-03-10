import { Main } from '@zendeskgarden/react-chrome';
import React from 'react';

const TicketDetailView = ({ title, content }) => {
  return (
    <Main style={{ padding: 28 }}>
      <h2 style={{ marginTop: 0 }}>{ title }</h2>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </Main>
  );
};

export default TicketDetailView;
