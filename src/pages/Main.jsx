import React from "react";
import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";

export function Main() {
    return (
        <div>
            <div className="h-12">
                <Navbar />
            </div>
            <div className={`p-2 `}>
                <Outlet />

            </div>

        </div>
    )
}