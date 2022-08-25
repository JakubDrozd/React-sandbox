import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profile } from "./Profile";
import { ProfileView } from "./ProfileView";
import { NotFound } from "./NotFound";

export function Nav(){
    return(
        <nav>
            <h3>Logo</h3>
            <ul>
                <li>About</li>
                <li>Shop</li>
            </ul>
        </nav>
    )
}