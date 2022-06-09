import {Button, ButtonGroup, Form, Tab} from "react-bootstrap";
import "./style.css"

export default function SignupComponent() {
    return (
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
    )
}