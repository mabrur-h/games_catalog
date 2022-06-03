import {useState} from "react";
import { Container, Row, Col, Button, Collapse, Form, ButtonGroup } from "react-bootstrap"
import "./style.css"

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);

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
                    <Col md={4} className="text-end">
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className="collapse-button"
                        >
                            <i className={open ? 'fa fa-angle-down collapse-symbol' : 'fa fa-angle-up collapse-symbol'}></i>
                        </Button>
                    </Col>
                </Row>
                <Row className="px-1">
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            <Form>
                                <Form.Group>

                                    <p className="py-3">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </p>

                                </Form.Group>
                                <div className="d-flex justify-content-end p-3 mb-3">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="primary" type="submit">Submit</Button>
                                        <Button variant="secondary" type="reset">Cancel</Button>
                                    </ButtonGroup>
                                </div>
                            </Form>
                        </div>
                    </Collapse>
                </Row>
            </Container>
        </div>
    )
}