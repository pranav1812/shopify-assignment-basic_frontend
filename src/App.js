import './App.css';
import {useEffect, useState} from 'react';
import {Navbar, Container, Nav, Link} from 'react-bootstrap'
import Home from './components/Home';
import Items from './components/Items';
import Deleted from './components/Deleted';

function App() {
  var [page, setPage]= useState('Inventory');
  useEffect(() => {}, []);
  return (
    <div className="App">

      {/* -------------------------------------Navbar-------------------------------- */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> setPage('home')}>Home</Nav.Link>
              <Nav.Link onClick={()=> setPage('deleted')}>Deleted Inventory</Nav.Link>
              <Nav.Link onClick={()=> setPage('items')}>All Items</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ------------------------------------Navbar------------------------------------------ */}

      {/* ------------------------------------Page------------------------------------------ */}
      {
        page === 'home' ? <Home /> :
        page === 'items' ? <Items /> :
        page === 'deleted' ? <Deleted /> : <h1>No Sub Component Selected</h1>
      }
      {/* ------------------------------------Page------------------------------------------ */}

    </div>
  );
}

export default App;
