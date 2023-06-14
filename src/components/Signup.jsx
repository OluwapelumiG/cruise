import React, {useEffect, useState} from 'react';
import {Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/cruise.png";
import {axios, axiosCSRF} from "../utils/axios";


export function Signup(props) {

    // Form variables
    let [alias, setAlias] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [password_confirmation, setPassword_confirmation] = useState('');

    // Validations
    const [foundUsers, setFoundUsers] = useState([]);

    // Errors
    let [errors, setErrors] = useState([]);
    let [axiosError, setAxiosError] = useState("");

    // Navigator
    const navigate = useNavigate();

    // Check duplicate aliases
    const  filter = async(e) => {
        const keyword = e.target.value;
        setAlias(keyword);
        if (keyword !== '') {
            // perform check and set founduser;
            await axios(async ()=> axios.get('/check_user/'+alias).then((res)=>{
                alert('loading');
                console.log(alias);
                console.log(res);
                setFoundUsers(keyword);

            }).catch(
                (e) => {
                    console.log(e.response);

                }
            ));
        }
    };

    useEffect((foundUsers) => {
        if (foundUsers && (foundUsers.length > 0)){
            alert('Found a user');
        }
    }, [foundUsers])

    // handle Registration
    const handleRegister = async (event) => {
        event.preventDefault();
            await axiosCSRF(async ()=> axios.post('/register', {alias, email, password, password_confirmation}).then((res)=>{
                console.log(res);
                setAlias("");
                setEmail("");
                setPassword("");
                setPassword_confirmation("");
                navigate("/home")
            }).catch(
                (e) => {
                    console.log(e.response);
                    if (e.response.status === 422){
                        console.log(e.response.data.errors);
                        setErrors(e.response.data.errors);
                    }
                    else {
                        setAxiosError(e.response.statusText);
                    }

                }
            ));
    }

    return (
        <div>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src={Logo} alt={`Cruise Logo`} />
                        Cruise
                    </Link>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up
                            </h1>

                            {axiosError ?
                                <div className="flex">
                                     <span className="text-red-400 text-sm p-2">
                                         {axiosError}
                                     </span>
                                </div>
                                : ''}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="alias"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alias</label>
                                    <input type="text" name="name" id="alias"
                                           className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Cruiser"
                                           value={alias}
                                           onChange={filter}
                                           // onChange={(e) => setAlias(e.target.value)}
                                           required="" />
                                    {errors.alias ?
                                        <div className="flex">
                                             <span className="text-red-400 text-sm p-2">
                                                 {errors.alias[0]}
                                             </span>
                                        </div>
                                    : ''}
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="name@company.com"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           required="" />
                                    {errors.email ?
                                        <div className="flex">
                                             <span className="text-red-400 text-sm p-2">
                                                 {errors.email[0]}
                                             </span>
                                        </div>
                                    : ''}
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           value={password}
                                           onChange={((e) => setPassword(e.target.value))}
                                           required="" />
                                    {errors.password ?
                                        <div className="flex">
                                             <span className="text-red-400 text-sm p-2">
                                                 {errors.password[0]}
                                             </span>
                                        </div>
                                    : ''}
                                </div>
                                <div>
                                    <label htmlFor="password-confirmation"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password confirmation</label>
                                    <input type="password" name="password-confirmation" id="password-confirmation" placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           value={password_confirmation}
                                           onChange={((e) => setPassword_confirmation(e.target.value))}
                                           required="" />
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Sign up
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link to={`/login`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                        in instead</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );}