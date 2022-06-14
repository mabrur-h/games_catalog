import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/Header";
import GameCardComponent from "../components/GameCard";
import {Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../redux/store";
import {useEffect} from "react";
import {getGamesApi, reset} from "../redux/services/games/gameSlice";
import Spinner from "../components/Spinner";


export default function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  let {user} = useSelector((state: any) => state.auth)
  user = JSON.parse(user)

  const {games, isLoading, isError, message} = useSelector(
    (state: any) => state.games
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/auth')
    }

    dispatch(getGamesApi())

    return () => {
      dispatch(reset())
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <NavbarComponent/>
      <HeaderComponent/>
      <div className="container-fluid">
        <Row>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
          <GameCardComponent/>
        </Row>
      </div>
    </div>
  )
}