import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to={'/SoundHaven-JoaquinFichter/'}><Navbar.Brand><Logo /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Shop by Brand" id="basic-nav-dropdown">
              <NavLink to={'/SoundHaven-JoaquinFichter/brand/FirstBrand'}>First Brand</NavLink>
              <NavLink to={'/SoundHaven-JoaquinFichter/brand/SecondBrand'}>Second Brand</NavLink>
              <NavLink to={'/SoundHaven-JoaquinFichter/brand/ThirdBrand'}>Third Brand</NavLink>
            </NavDropdown>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavLink to={'/SoundHaven-JoaquinFichter/category/Aerophones'}>Aerophones</NavLink>
              <NavLink to={'/SoundHaven-JoaquinFichter/category/Chordophones'}>Chordophones</NavLink>
              <NavLink to={'/SoundHaven-JoaquinFichter/category/Idiophones'}>Idiophones</NavLink>
              <NavLink to={'/SoundHaven-JoaquinFichter/category/Membranophones'}>Membranophones</NavLink>
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