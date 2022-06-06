import NavbarComponent from "../../components/Navbar";
import HeaderComponent from "../../components/Header";
import GameCardComponent from "../GameCard";


export default function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <HeaderComponent />
            <div className="container-fluid">
                <GameCardComponent />
            </div>
        </div>
    )
}