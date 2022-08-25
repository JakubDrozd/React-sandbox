import App from "./App";
import { Profile } from "./Profile";
import { ProfileView } from "./ProfileView";
import { NotFound } from "./NotFound";
import {Link} from "react-router-dom"

export function Nav(){

    const navStyle = {
        color: "white",
        textDecoration: "none"
    }

    return(
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about"><li>About</li></Link>
                <Link style={navStyle} to="/shop"><li>Shop</li></Link>
            </ul>
        </nav>
    )
}