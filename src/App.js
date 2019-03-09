import '@zendeskgarden/react-chrome/dist/styles.css';
import './App.css';
import {
  Body,
  Chrome,
  Content
} from '@zendeskgarden/react-chrome';
import React from 'react';
import TicketDetailView from './components/TicketDetailView';
import TicketsPanel from './components/TicketsPanel';
import TitleBar from './components/TitleBar';

const App = () => {
  return (
    <Chrome className="App">
      <Body>
        <TitleBar />
        <Content>
          <TicketsPanel />
          <TicketDetailView />
        </Content>
      </Body>
    </Chrome>
  );
};

export default App;
