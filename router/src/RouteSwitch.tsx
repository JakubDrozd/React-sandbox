import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profile } from "./Profile";
import { ProfileView } from "./ProfileView";

export function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/viewprofile" element={<ProfileView></ProfileView>}></Route>
        </Routes>
        </BrowserRouter>
    )
}