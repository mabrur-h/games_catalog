import {Row, Col, Tabs, Form, Button, ButtonGroup, Tab} from "react-bootstrap"
import LoginComponent from "../components/Auth/Login";
import SignupComponent from "../components/Auth/Signup";
import SocialLinksComponent from "../components/Auth/SocialLinks";
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {login, reset} from "../services/auth/authSlice";
import Spinner from "../components/Spinner";

export default function AuthComponent() {
   /* const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(e)

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

        if (isLoading) {
            return <Spinner />
        }
    }*/

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