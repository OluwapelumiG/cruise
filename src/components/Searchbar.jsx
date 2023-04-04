import React from 'react';
import {FaSearch} from "react-icons/fa";

export default function Searchbar(props) {
 return (
    <>
        <form className="w-full max-w-xl">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="Search Cruiser or Post" aria-label="Search" />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button">
                        <FaSearch />
                    </button>
            </div>
        </form>
    </>
 );}