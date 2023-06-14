import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {axios, axiosCSRF} from "../utils/axios";

import Logo from "../assets/images/cruise.png";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineGoogle
} from "react-icons/ai";

import { GrConnect } from 'react-icons/gr'

export function Login() {
    // const login = (e,p, r=false) => {
    //     axiosCSRF(async ()=> axios.post('/login', {email: e, password: p, remember: r}).then((res)=>{
    //         console.log(res);
    //     }));
    // }
    //
    // login("test@test.com", "pass", false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) =>{
        event.preventDefault();
        try {
            await axiosCSRF(async ()=> axios.post('/login', {email: email, password: password}).then((res)=>{
                console.log(res);
            }));
        }
        catch (e){

        }
    }

     return (
         <div>
             <section className="">
                 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                     <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                         <img className="w-8 h-8 mr-2" src={Logo} alt={`Cruise Logo`} />
                         Cruise
                     </Link>
                     <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                 Sign in to your account
                             </h1>
                             <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} action="#">
                                 <div>
                                     <label htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                         Your email
                                     </label>
                                     <input type="email" name="email" id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required="" />
                                     <div className="flex">
                                         <span className="text-red-400 text-sm p-2">
                                             Hello
                                         </span>
                                     </div>
                                 </div>
                                 <div>
                                     <label htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                     <input type="password" name="password" id="password" placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required="" />
                                 </div>
                                 <p className="text-sm font-light text-gray-500 text-right dark:text-gray-400">
                                     <Link to={`/signup`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                         Forgot Password
                                     </Link>
                                 </p>
                                 <button type="submit"
                                         className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                     Sign up
                                 </button>
                                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                     No account? <Link to={`/signup`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                         up</Link>
                                 </p>
                             </form>
                             <button type="submit"
                                     className="hidden w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                 <div className={`flex justify-center`}>
                                     <div className={`text-xl text-red-500`}>
                                         <GrConnect />
                                     </div>
                                     <div className={` px-2 text-blue-400`}>
                                         |
                                     </div>
                                     Connect your social media accounts

                                 </div>
                             </button>
                         </div>
                     </div>
                     <div className="hidden p-2 space-y-2 md:space-y-2 sm:p-2">
                         <h3>Connect your social Media Accounts</h3>
                         <div className={`text-5xl flex justify-center gap-16 py-2 text-[#569085]`}>
                             <AiFillTwitterSquare />
                             <AiFillFacebook />
                             <AiFillInstagram />
                         </div>
                         <button type="submit"
                                 className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                             <div className={`flex justify-center`}>
                                 <div className={`text-xl text-red-500`}>
                                     <AiOutlineGoogle />
                                 </div>
                                 <div className={` px-2 text-blue-400`}>
                                     |
                                 </div>
                                 Sign up with Google

                             </div>
                         </button>

                     </div>
                 </div>
             </section>
         </div>
     );
}