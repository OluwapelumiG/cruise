import React from 'react';
import { NavLink} from "react-router-dom";
import Logo from '../assets/images/cruise.png';

export function Landing(props) {
 return (
    <div>
        <div className={`text-center p-10`}>
            <div className={`relative mx-auto bg-gradient-to-b from-[#569085] rounded-full w-20 h-20 mt-10`}>
                <img src={Logo} alt={`Cruise Logo`}/>
            </div>
            <h2 className={`text-5xl py-1 text-[#569085] font-medium`}>
                <NavLink to={'/'} >
                    CRUISE
                </NavLink>

            </h2>
            <h3 className={`text-2xl py-1`}>Always have fun, you deserve it</h3>
            <p className={`text-md py-2 leading-8 text-gray-800`}>Something about catching cruise...</p>
        </div>
        <div className="flex justify-center">
            <NavLink to='/login' className={`bg-[#eab86e] text-[#faf3ea] p-2 rounded-md hover:bg-[#faf3ea] hover:text-[#eab86e] focus:outline-none focus:ring focus:ring-[#eab86e]`}>
                Get Started
            </NavLink>
        </div>


    </div>
 );}