import React from 'react';
import Searchbar from "../components/Searchbar";
import {NavLink} from "react-router-dom";

export function Search() {
 return (
     <>
         <div className={`mx-auto mt-2`}>
             <Searchbar />
             {/*Search Page*/}

             <aside className={`w-full`}>
                 <h2 className="py-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

                 <div className=" space-y-4 md:flex md:flex-wrap">
                     <div className={`w-full bg-white rounded-lg shadow p-1 md:w-80`}>
                         <div
                             className="flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2  focus:outline-none md:flex-col">
                             <img className="object-cover w-8 h-8 rounded-full md:w-16 md:h-16"
                                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                                  alt="" />

                             <div className="text-left rtl:text-right">
                                 <div className="flex md:flex-col">
                                     <div className={``}>
                                         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white p-1 md:text-center">Mia
                                             John
                                         </h1>
                                         <p className="text-xs  text-gray-500 dark:text-gray-400 p-1 md:text-center">Short stupid story about me</p>
                                     </div>

                                     <div className={`right-1 md:mx-auto`}>
                                         <NavLink to='#' className={`bg-[#eab86e] text-[#faf3ea] p-2 rounded-full hover:bg-[#faf3ea] hover:text-[#eab86e] text-xs font-semibold focus:outline-none focus:ring focus:ring-[#eab86e]`}>
                                             View Profile
                                         </NavLink>
                                     </div>

                                 </div>

                                 {/*<p className="text-xs text-center text-gray-500 dark:text-gray-400">11.2 Followers</p>*/}
                             </div>
                         </div>

                     </div>







                 </div>
             </aside>
         </div>
     </>

 );}