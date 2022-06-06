import {useState} from "react";
import { Container, Row, Col, Button, Collapse, Form, ButtonGroup } from "react-bootstrap"
import "./style.css"

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);

    return (
        <div className="shadow">
            <Container fluid>
                <Row className="py-3 px-2 justify-content-between">
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
                            <i className={open ? 'fa fa-angle-down collapse-symbol' : 'fa fa-angle-up collapse-symbol'}/>
                        </Button>
                    </Col>
                </Row>
                <Row className="px-3">
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            <Form className="py-4">
                                <Form.Group>
                                    <Row className="d-flex align-items-center">
                                        <Col md={9}>
                                            <Row>
                                                <Col md="2" className="text-start position-relative">
                                                    <label htmlFor="datePicker" className="form-label position-absolute bottom-100">Release date</label>
                                                    <input type="date"
                                                           id="datePicker"
                                                           value="2018-07-22"
                                                           min="2018-01-01"
                                                           max="2022-12-31"
                                                           className="form-control"
                                                    />
                                                </Col>
                                                <Col md="2">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </Col>
                                                <Col md="2">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </Col>
                                                <Col md="2">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </Col>
                                                <Col md="2">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </Col>
                                                <Col md="2">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={3}>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Label className="m-0">Rating</Form.Label>
                                                    <Form.Range />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <div className="d-flex justify-content-end p-3 mb-3">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary" type="reset">Cancel</Button>
                                        <Button variant="primary" type="submit">Search</Button>
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