import {Row, Col, Tabs, Form, Button, ButtonGroup, Tab} from "react-bootstrap"
import LoginComponent from "../components/Auth/Login";
import SignupComponent from "../components/Auth/Signup";
import SocialLinksComponent from "../components/Auth/SocialLinks";


export default function AuthComponent() {

    return (
        <Row className="justify-content-md-center my-5">
            <Col xs lg="4">
                <div className="auth p-3">
                    <Tabs variant="tabs" defaultActiveKey="login" id="uncontrolled-tab-example" >
                        <Tab eventKey="login" title="Login">
                            <LoginComponent />
                            <SocialLinksComponent />
                        </Tab>
                        <Tab eventKey="join" title="Join us">
                            <SignupComponent />
                            <SocialLinksComponent />
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}