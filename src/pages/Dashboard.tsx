import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/Header";
import GameCardComponent from "../components/GameCard";
import {Row} from "react-bootstrap";


export default function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <HeaderComponent />
            <div className="container-fluid">
                <Row>
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                    <GameCardComponent />
                </Row>
            </div>
        </div>
    )
}