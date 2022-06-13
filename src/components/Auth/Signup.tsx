import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {register, reset} from "../../redux/services/auth/authSlice";
import UserType from "../../types/user.type";
import Spinner from "../Spinner";
import {AppDispatch} from "../../redux/store";
import "./style.css"

export default function SignupComponent() {
  const [formData, setFormData] = useState<UserType>({
    name: '', email: '', password: ''
  })

  const {name, email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state: any) => state.auth)

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
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const onSignupSubmit = (e: any) => {
    e.preventDefault()

    console.log('REGISTER')
    console.log(e.target)

    const userData: UserType = {
      name, email, password
    }

    dispatch(register(userData))

    if (isLoading) {
      return <Spinner/>
    }
  }

  return (<Form className="text-start my-3" onSubmit={onSignupSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSignupEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
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
          Join now
        </Button>
      </Form.Group>
    </Form>)
}