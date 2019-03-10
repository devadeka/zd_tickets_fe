import '@zendeskgarden/react-pagination/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

import { Button } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Sidebar } from '@zendeskgarden/react-chrome';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import React from 'react';

const TicketsPanel = ({ tickets }) => {
  return (
    <ThemeProvider>
      <Sidebar style={{ padding: 28 }}>
        <Pagination
          totalPages={5}
          currentPage={1}
        />
        <hr />
        {
          tickets.map((ticket, index) => <div key={index}>
            <Button stretched basic>{ticket.title}</Button>
          </div>)
        }
      </Sidebar>
    </ThemeProvider>
  );
};

export default TicketsPanel;
