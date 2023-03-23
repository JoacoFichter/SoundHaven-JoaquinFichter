import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sound Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#shopByBrand">Shop by Brand</Nav.Link>
            <Nav.Link href="#shopByCategory">Shop by category</Nav.Link>
            <NavDropdown title="Software" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cubase 12</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Reaper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FL Studio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;