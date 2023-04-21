import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import Logo from '../assets/images/cruise.png';
import {BiHomeSmile, BiSearchAlt} from "react-icons/bi";
import { BsEmojiHeartEyes, BsFillPatchPlusFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export function Navbar() {
    // {name: "Later", icon: "arrow-redo-outline", dis: "translate-x-48"}, 64
    const Menus = [
        {aid:1, name: "Search", to:"/search", icon: <BiSearchAlt />, mobdis: "translate-x-0", tabdis: "translate-x-0", deskdis: "translate-x-0"},
        {aid:2, name: "Home", to:"/home", icon: <BiHomeSmile />, mobdis: "translate-x-16", tabdis: "translate-x-16", deskdis: "translate-x-[8rem]"},
        {aid:3, name: "", to:"/welcome", icon: <BsFillPatchPlusFill />, mobdis: "translate-x-32", tabdis: "translate-x-32", deskdis: "translate-x-[16rem]"},
        {aid:4, name: "Saved", to:"/saved", icon: <BsEmojiHeartEyes />, mobdis: "translate-x-32", tabdis: "translate-x-32", deskdis: "translate-x-[16rem]"},
        {aid:5, name: "Profile", to:"/profile", icon: <FaUserCircle />, mobdis: "translate-x-48", tabdis: "translate-x-48", deskdis: "translate-x-[24rem]"},
    ];

    const [active, setActive] = useState(1);
    const activate = (isActive, path) => {
        if (isActive) {
            setActive(path)
        }
    }

    return (
        <div>
            {/* bg-gray-900 w-full h-[110px] rounded-b-md*/}
            <div className="">
                {/* Top Navigation */}
                <nav className="bg-white shadow-md w-full top-0 left-0 flex justify-between p-2">
                    <div className="flex h-12 cursor-pointer">
                        <img src={Logo} alt="Logo" className="flex-col h-10 w-10"/>
                        <span className="flex-col text-xl p-2 text-[#569085]">Cruise  </span>
                    </div>
                    {/* Desktop Navigation */}
                    <ul className={"tablet:flex hidden items-center pr-8"}>
                    <span
                        className={`bg-gray-900 duration-500 ${Menus[active].deskdis} border-4 border-gray-900 h-16 w-32 absolute bottom-0 rounded-full`}>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -left-[24px] rounded-br-[15px] shadow-desktopShadow1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -left-1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -right-1"></span>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -right-[24px] rounded-bl-[15px] shadow-desktopShadow2"></span>
                    </span>
                        {
                            Menus.map((menu, i) => (
                                <li key={i} className="w-32">
                                    <NavLink to={menu.to}
                                             className={`transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ${(activeNav) => activate(activeNav.isActive, i)} flex flex-col text-center pt-6 `}
                                             onClick={() => setActive((i))}>
                                    <span className={` text-xl cursor-pointer `}>
                                        <span className={` ${i === active && "-mt-5 text-white"} `}>
                                            {menu.icon}
                                        </span>
                                        {i !== active && <span className=" text-xl pb-2"> {menu.name}</span>}
                                    </span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Tablet Navigation */}
                    <ul className={"mobile:flex tablet:hidden hidden items-center pr-8"}>
                    <span
                        className={`bg-gray-900 duration-500 ${Menus[active].tabdis} border-4 border-gray-900 h-16 w-16 absolute bottom-0 rounded-full`}>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -left-[24px] rounded-br-[15px] shadow-desktopShadow1"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -left-[4px]"></span>
                        <span className="w-8 h-5 bg-gray-900 absolute -bottom-1 -right-[4px]"></span>
                        <span
                            className="w-5 h-8 bg-transparent absolute -bottom-1 -right-[24px] rounded-bl-[15px] shadow-desktopShadow2"></span>
                    </span>

                        {
                            Menus.map((menu, i) => (
                                <li key={i} className="w-16">
                                    <NavLink to={menu.to} className="flex flex-col text-center pt-6"
                                             onClick={() => setActive((i))}>
                                        <span
                                            className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"} `}>
                                            <ion-icon name={menu.icon}></ion-icon>
                                        </span>
                                        <span
                                            className={` ${active === i ? 'translate-y-4 duration-700 opacity-100 text-white' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* Mobile / Bottom Navigation w-[370px] */}
                <div className="fixed z-10 w-full object-bottom bottom-0 mobile:hidden">
                    <div className="bg-[#569085] max-h-[2.4rem] px-6 rounded-t-xl">
                        <ul className="inline-flex relative m-auto justify-center w-full pb-4">
                        {/*<span*/}
                        {/*    className={`bg-rose-600 duration-500 ${Menus[active].mobdis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}>*/}
                        {/*    <span*/}
                        {/*        className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-mobileShadow1"></span>*/}
                        {/*    <span*/}
                        {/*        className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-mobileShadow2"></span>*/}
                        {/*</span>*/}
                            {
                                Menus.map((menu, i) => (
                                    <li key={i} className="mx-auto">
                                        <NavLink to={menu.to} className={`flex flex-col text-center pt-2 text-3xl ${active ===i ? 'border-t-4 border-double border-[#eab86e] rounder-t-lg' : '' }`}
                                                 onClick={() => setActive((i))}>
                                            <span title={menu.name} className={`text-2xl cursor-pointer duration-500 ${active ===i ? 'text-[#eab86e]' : 'text-[#faf3ea]' } ${(menu.aid===3) ? "-mt-5 p-2 rounded-2xl text-2xl text-white bg-red-400" : ''} `}>
                                                {menu.icon}
                                            </span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}