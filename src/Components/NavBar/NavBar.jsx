import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to={'/'}><Navbar.Brand>Sound Haven</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Shop by Brand" id="basic-nav-dropdown">
              <NavLink to={'brand/FirstBrand'}>First Brand</NavLink>
              <NavLink to={'brand/SecondBrand'}>Second Brand</NavLink>
              <NavLink to={'brand/ThirdBrand'}>Third Brand</NavLink>
            </NavDropdown>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavLink to={'/category/Aerophones'}>Aerophones</NavLink>
              <NavLink to={'/category/Chordophones'}>Chordophones</NavLink>
              <NavLink to={'/category/Idiophones'}>Idiophones</NavLink>
              <NavLink to={'/category/Membranophones'}>Membranophones</NavLink>
            </NavDropdown>
            <NavDropdown title="Software" id="basic-nav-dropdown">
              <NavLink>Cubase 12</NavLink>
              <NavLink>Reaper</NavLink>
              <NavLink>FL Studio</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}