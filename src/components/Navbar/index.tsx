import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavbarComponent() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" className="text-uppercase">
                    Home
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home" className="text-uppercase text-white">
                        Discovery
                    </Nav.Link>
                    <Nav.Link href="/features" className="text-uppercase text-white">
                        My Games
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/pricing">User 1</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}