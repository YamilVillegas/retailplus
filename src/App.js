import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import RetailplusLogo from './app/assets/img/retailpluslogo.png';
import EventCard from './features/specialevents/EventCard';
import { EVENTS } from './app/shared/EVENTS' 

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand>
            <img src={RetailplusLogo} alt='retailplus logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <EventCard event={EVENTS[0]} />
    </div>
  );
}

export default App;