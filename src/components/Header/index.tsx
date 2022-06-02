import { Container, Row, Col } from "react-bootstrap"
import "./style.css"

export default function HeaderComponent() {
    return (
        <div className="shadow">
            <Container fluid>
                <Row className="py-3 px-1 justify-content-between">
                    <Col md={4} className="text-start">Filters</Col>
                    <Col md={2}>
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control header-search" aria-label="Sizing example input" placeholder="Search Games..." />
                        </div>
                    </Col>
                    <Col md={4} className="text-end">Smth</Col>
                </Row>
            </Container>
        </div>
    )
}