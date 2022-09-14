import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import RetailplusLogo from './app/assets/img/retailpluslogo.png';
import EventsList from './features/specialevents/EventsList';

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
      <EventsList />
    </div>
  );
}

export default App;