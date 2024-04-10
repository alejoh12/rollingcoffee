import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="El logo de nuestra empresa."
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink end to="/" className="nav-link">Inicio</NavLink>
            <NavLink end to="/administrador" className="nav-link">Administrador</NavLink>
            <NavLink end to="/registro" className="nav-link">Registro</NavLink>
            <NavLink end to="/login" className="nav-link">Inicio Sesión</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
