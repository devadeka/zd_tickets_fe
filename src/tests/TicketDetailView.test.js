import { shallow } from 'enzyme';
import React from 'react';
import TicketDetailView from '../components/TicketDetailView';

describe('<TicketDetailView />', () => {
  let ticketDetailView;

  beforeEach( () => {
    ticketDetailView = shallow(<TicketDetailView title='Test' content='test' />).render();
  });

  it('contains a <h1 />', () => {
    expect(ticketDetailView.find('h2').length).toBe(1);
  });
  
  it('displays correct title', () => {
    expect(ticketDetailView.find('h2').text()).toEqual('Test');
  });

  it('contains a <p />', () => {
    expect(ticketDetailView.find('p').length).toBe(1);
  });
  
  it('displays correct content string', () => {
    expect(ticketDetailView.find('p').text()).toEqual('test');
  });
});

describe('<TicketDetailView /> with html-string content', () => {
  let ticketDetailView;

  beforeEach( () => {
    ticketDetailView = shallow(<TicketDetailView title='Test' content='<h3>test</h3>' />).render();
  });

  it('contains a <h3 />', () => {
    expect(ticketDetailView.find('h3').length).toBe(1);
  });
  
  it('displays correct content html', () => {
    expect(ticketDetailView.find('h3').html()).toEqual('test');
  });
});