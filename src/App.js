import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import RetailplusLogo from './app/assets/img/retailpluslogo.png';

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
      Just getting started!
    </div>
  );
}

export default App;
