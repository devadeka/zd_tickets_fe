import '@zendeskgarden/react-chrome/dist/styles.css';
import './App.css';

import {
  Body,
  Chrome,
  Content
} from '@zendeskgarden/react-chrome';

import React, { useState } from 'react';
import TicketDetailView from './components/TicketDetailView';
import TicketsPanel from './components/TicketsPanel';
import TitleBar from './components/TitleBar';

const App = () => {
  const [title, setTitle] = useState('Select Ticket');
  const [content, setContent] = useState('To view the details of a ticket please click on one from our side menu.');

  return (
    <Chrome className="App">
      <Body>
        <TitleBar />
        <Content>
          <TicketsPanel />
          <TicketDetailView title={ title } content ={ content }/>
        </Content>
      </Body>
    </Chrome>
  );
};

export default App;
