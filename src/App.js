import React from 'react';
import { 
    Chrome, Body, Content, Sidebar, Main,
    Header, HeaderItemWrapper
  } from '@zendeskgarden/react-chrome'
import '@zendeskgarden/react-chrome/dist/styles.css';

const App = () => {
  return (
      <Chrome className="App">
        <Body>
          <Header>
            <HeaderItemWrapper maxX>
              <h1>Zendesk Ticket View</h1>
            </HeaderItemWrapper>
          </Header>
          <Content>
            <Sidebar style={{ padding: 28 }}>
              <h2>Example Sidebar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Sidebar>
            <Main style={{ padding: 28 }}>
              <h2>Main Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Main>
          </Content>
        </Body>
      </Chrome>
  );
}

export default App;
