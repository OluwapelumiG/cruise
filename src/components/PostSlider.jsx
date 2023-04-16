import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight, BsEmojiLaughing, BsShare} from "react-icons/bs";

import Logo from "../assets/images/cruise.png";
import Logo2 from "../assets/images/280.jpg";
import Logo3 from "../assets/images/2020.jpg";
import Logo4 from "../assets/images/23.jpeg";
export function PostSlider() {
    const postelements = [
        Logo,
        Logo2,
        Logo3,
        Logo4,
    ]

    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ?  postelements.length - 1 :  curr - 1))

    const next = () =>
        setCurr((curr) => (curr === postelements.length -1 ?  0 : curr + 1))

    const goToSlide = (index) => {
        setCurr(index)
    }

    return (
        <>

            <div className=" m-auto py-4 px-4 relative group">
                <div style={{backgroundImage: `url(${postelements[curr]})`}} className={`w-auto h-[400px] rounded-2xl bg-center bg-cover duration-500`}></div>

                <div className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                    <BsChevronCompactLeft onClick={prev} size={30} />
                </div>
                <div className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                    <BsChevronCompactRight onClick={next} size={30} />
                </div>
                <div className={`absolute bottom-1 right-0 left-0`}>
                    <div className="flex items-center justify-center gap-2">
                        {postelements.map((index, i) => (
                            <div key={index} onClick={() => goToSlide(i)} className={`transition-all w-3 h-3 bg-green-300 rounded-full ${curr === i ? 'p4' : 'bg-opacity-50'} cursor-pointer`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-2 m-1">
                <button onClick={prev} className={`p-1 m-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white `}>
                    <BsEmojiLaughing size={20} />
                </button>
                <button onClick={next} className={`p-1 m-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white`}>
                    <BsShare size={20} />
                </button>
            </div>
        </>
    );
}