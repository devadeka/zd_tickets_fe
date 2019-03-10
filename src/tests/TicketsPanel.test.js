import { Button } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { render } from 'enzyme';
import React from 'react';
import TicketsPanel from '../components/TicketsPanel';

describe('<TicketDetailView />', () => {
  let ticketsPanel;

  const tickets = [1, 2, 4].map(ticketNum => ({ title: `Ticket ${ticketNum}` }));

  beforeEach( () => {
    ticketsPanel = render(<TicketsPanel tickets={tickets} />);
  });

  it('contains a <Pagination />', () => {
    expect(ticketsPanel.find(Pagination).length).toBe(1);
  });
  
  it('contains 3 <Button />', () => {
    expect(ticketsPanel.find(Button).length).toBe(3);
  });
  
  it('displays correct ticket information on button', () => {
    expect(ticketsPanel.find(Button).first.text()).toEqual('Ticket 1');
  });
});
