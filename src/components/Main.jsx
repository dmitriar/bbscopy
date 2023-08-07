import {Route, Routes} from "react-router-dom";
import {Solutions} from "../pages/Solutions";
import {Directions} from "../pages/Directions";
import {BecomeAPartner} from "../pages/BecomeAPartner";
import {Vocations} from "../pages/Vocations";
import {AboutAs} from "../pages/AboutAs";
import {Home} from "../pages/Home";
import {Coffee} from "../pages/Coffee";
import {Confectionary} from "../pages/Confectionary";
import {Laser} from "./Laser";
import {Chemical} from "../pages/Chemical";

export function Main() {
    return (
        <aside className="main">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/solutions" element={<Solutions/>}/>
                <Route exact path="/directions" element={<Directions/>}/>
                <Route exact path="/become_a_partner" element={<BecomeAPartner/>}/>
                <Route exact path="/vocation" element={<Vocations/>}/>
                <Route exact path="/about_us" element={<AboutAs/>}/>
                <Route exact path="/coffee" element={<Coffee/>}/>
                <Route exact path="/confectionary" element={<Confectionary/>}/>
                <Route exact path="/laser" element={<Laser/>}/>
                <Route exact path="/chemical" element={<Chemical/>}/>
            </Routes>
        </aside>
    )
}