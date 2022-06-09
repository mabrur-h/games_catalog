import {Button, ButtonGroup} from "react-bootstrap";
import "./style.css"

export default function SocialLinksComponent() {
    return (
        <div className="auth_social">
            <p className="auth_social_text">Register With</p>
            <ButtonGroup aria-label="Basic example" className="w-100">
                <Button variant="primary">Facebook</Button>
                <Button variant="danger">Google+</Button>
                <Button variant="info" className="text-white">Twitter</Button>
            </ButtonGroup>
        </div>
    )
}