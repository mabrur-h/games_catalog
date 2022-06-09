import {Button, ButtonGroup, Form, Tab} from "react-bootstrap";
import "./style.css"

export default function LoginComponent() {
    return (
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
    )
}