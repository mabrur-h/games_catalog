import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"

export default function HeaderComponent() {
    return (
        <div className="shadow">
            <Container fluid>
                <Row className="py-3 px-1">
                    <Col md={4} className="text-start">Filters</Col>
                    <Col md={{ span: 4, offset: 4 }} className="text-end">Smth</Col>
                </Row>
            </Container>
        </div>
    )
}