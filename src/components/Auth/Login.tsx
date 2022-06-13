import {Button, ButtonGroup, Form, Tab} from "react-bootstrap";
import "./style.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {login, reset} from "../../services/auth/authSlice";
import Spinner from "../Spinner";
import UserType from "../../types/user.type";
import {AppDispatch} from "../../app/store";

export default function LoginComponent() {
    const [formData, setFormData] = useState<UserType>({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state: any) => state.auth
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

    const onChange = (e: any) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onLoginSubmit = (e: any) => {
        e.preventDefault()

        console.log(e)

        const userData: UserType = {
            email,
            password
        }

        dispatch(login(userData))

        if (isLoading) {
            return <Spinner />
        }
    }

    return (
        <Form className="text-start my-3" onSubmit={onLoginSubmit}>
            <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="danger" type="submit" className="px-3">
                    Sign In
                </Button>
                <Link to="/password" className="text-decoration-none link-primary ps-3">Forgot password?</Link>
            </Form.Group>
        </Form>
    )
}