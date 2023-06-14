import React from 'react';
import PostOwner from "../assets/images/280.jpg";
import {NavLink} from "react-router-dom";

export default function ProfileView() {
 return (
    <>
        <div className="relative flex flex-col break-words bg-white max-w-lg mx-auto mb-6 shadow-xl rounded-lg mt-16">

            <div className="flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2  focus:outline-none flex-col">
                <img className="object-cover rounded-full w-16 h-16"
                     src={PostOwner}
                     alt="" />
                        <span className="inline-flex items-center justify-center w-4 h-4 ml-8 right-2 -bottom-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full my-auto">
                            2
                        </span>

                <div className="text-left rtl:text-right">
                    <div className="flex-col text-center">
                        <div className={``}>
                            <h1 className="text-sm font-medium text-gray-700 capitalize text-center">Mia
                                John
                            </h1>
                            <p className="text-xs  text-gray-500 p-1 text-center">Short stupid story about me</p>
                        </div>

                        <NavLink to='#' className={`bg-[#eab86e] text-[#faf3ea] p-2 rounded-full hover:bg-[#faf3ea] hover:text-[#eab86e] text-xs font-semibold focus:outline-none focus:ring focus:ring-[#eab86e]`}>
                            Edit Profile
                        </NavLink>


                        {/*<div className="w-full px-4 text-center mt-20">*/}
                            <div className="flex justify-center py-2 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        22
                                    </span>
                                    <span className="text-sm text-blueGray-400">Friends</span>
                                </div>
                            </div>
                        {/*</div>*/}

                    </div>

                    {/*<p className="text-xs text-center text-gray-500 dark:text-gray-400">11.2 Followers</p>*/}
                </div>
            </div>


        </div>
    </>
 );}