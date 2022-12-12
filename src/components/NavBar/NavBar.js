import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "../Carrito/Carrito";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="../images/log.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            TIENDA DEPORTIVA FORK
          </Navbar.Brand >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >INICIO</Nav.Link>
            <Nav.Link as={Link} to="/category/Accesorio">ACCESORIOS</Nav.Link>
            <Nav.Link as={Link} to="/category/Colchoneta">COLCHONETAS</Nav.Link>
            <Nav.Link as={Link} to="/category/Zapatillas">ZAPATILLAS</Nav.Link>
          </Nav>
          <Carrito />
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
