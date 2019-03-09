import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import TicketDetailView from './components/TicketDetailView';
import TicketsPanel from './components/TicketsPanel';
import TitleBar from './components/TitleBar';

describe('<App />', () => {
  let app;

  beforeEach( () => {
    app = shallow(<App />);
  });

  it('contains a <TitleBar />', () => {
    expect(app.find(TitleBar).length).toBe(1);
  });
  
  it('contains a <TicketsPanel />', () => {
    expect(app.find(TicketsPanel).length).toBe(1);
  });

  it('contains a <TicketDetailView />', () => {
    expect(app.find(TicketDetailView).length).toBe(1);
  });
});
