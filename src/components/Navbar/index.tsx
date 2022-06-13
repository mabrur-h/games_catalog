import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {AppDispatch} from "../../redux/store";
import {logout, reset} from "../../redux/services/auth/authSlice";

export default function NavbarComponent() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  let {user} = useSelector((state: any) => state.auth)
  user = JSON.parse(user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/auth')
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-uppercase">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" className="text-uppercase text-white">
            Discovery
          </Nav.Link>
          <Nav.Link as={Link} to="/features" className="text-uppercase text-white">
            My Games
          </Nav.Link>
        </Nav>
        {user ? (
          <Nav>
            <Nav.Link as={Link} to="/">{user.name}</Nav.Link>
            <Button className="opacity-50" onClick={onLogout}>logout</Button>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link as={Link} to="/auth">Join</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}