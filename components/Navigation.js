import { Navbar, Nav, Container } from "react-bootstrap"

export default function Navigation () {
    return (
        <Navbar expand="md" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#slider">Slider</Nav.Link>
          <Nav.Link href="#textBlock">Text Block</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

