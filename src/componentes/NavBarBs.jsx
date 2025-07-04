import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function NavBarBs() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Apolo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/Zapatillas">Zapatillas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Calcetines">Calcetines</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Pulseras">Pulseras</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Oferta">Oferta</Nav.Link>
          </Nav>
          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            <CartWidget cantidad={cartQuantity()} />
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarBs;