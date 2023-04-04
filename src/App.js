import React from "react"

import { Routes, Route} from "react-router-dom";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {Main} from "./pages/Main";
import {Landing} from "./pages/Landing";
import {Home} from "./pages/Home";
import {Search} from "./pages/Search";
import {Profile} from "./pages/Profile";
import {Saved} from "./pages/Saved";

import './App.css';

function App() {
    return (
        <div className="h-full w-full justify-center">

            <Routes>
                <Route exact={true} path='welcome' name={`Landing`} element={<Landing />} />
                <Route exact={true} path='/login' name={`Login`} element={<Login />} />
                <Route exact={true} path='/signup' name={`Signup`} element={<Signup />} />
                <Route exact={true} path='/' element={<Main />}>
                    {/* Protected */}
                    <Route exact={true} path='search' name={`Search`} element={<Search />} />
                    <Route exact={true} path='home' name={`Home`} element={<Home />} />
                    <Route exact={true} path='saved' name={`Saved`} element={<Saved />} />
                    <Route exact={true} path='profile' name={`Profile`} element={<Profile />} />
                </Route>

            </Routes>
        </div>
    );
}

export default App;