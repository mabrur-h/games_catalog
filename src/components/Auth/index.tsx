import {Row, Col, Tabs, Form, Button, ButtonGroup, Tab} from "react-bootstrap"
import "./style.css"

export default function AuthComponent() {
    return (
        <Row className="justify-content-md-center my-5">
            <Col xs lg="4">
                <div className="auth p-3">
                    <Tabs variant="tabs" defaultActiveKey="login" id="uncontrolled-tab-example" >
                        <Tab eventKey="login" title="Sign in">
                            <Form className="text-start my-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Button variant="danger" type="submit" className="px-3">
                                        Sign In
                                    </Button>
                                    <a href="/password" className="text-decoration-none link-primary ps-3">Forgot password?</a>
                                </Form.Group>
                            </Form>
                            <div className="auth_social">
                                <p className="auth_social_text">Sign in with</p>
                                <ButtonGroup aria-label="Basic example" className="w-100">
                                    <Button variant="primary">Facebook</Button>
                                    <Button variant="danger">Google+</Button>
                                    <Button variant="info" className="text-white">Twitter</Button>
                                </ButtonGroup>
                            </div>
                        </Tab>
                        <Tab eventKey="join" title="Join us">
                            <Form className="text-start my-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Button variant="danger" type="submit" className="px-3">
                                        Join now
                                    </Button>
                                </Form.Group>
                            </Form>
                            <div className="auth_social">
                                <p className="auth_social_text">Register With</p>
                                <ButtonGroup aria-label="Basic example" className="w-100">
                                    <Button variant="primary">Facebook</Button>
                                    <Button variant="danger">Google+</Button>
                                    <Button variant="info" className="text-white">Twitter</Button>
                                </ButtonGroup>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}