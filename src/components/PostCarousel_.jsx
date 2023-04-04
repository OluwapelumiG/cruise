import React, {useState} from 'react';
import {BiChevronLeft, BiChevronRight, BiComment} from "react-icons/bi";
import {BsHandThumbsUp} from "react-icons/bs";

export function PostCarousel_({children: postelements}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ?  postelements.length - 1 :  curr - 1))

    const next = () =>
        setCurr((curr) => (curr === postelements.length -1 ?  0 : curr + 1))
 return (
    <div className={`overflow-hidden relative`}>
        <div className={`flex transition-transform ease-out duration-500`} style={{transform: `translateX(-${curr*100}%)`}}>
            {postelements}
        </div>
        <div className={`absolute inset-0 flex items-center justify-between p-4`}>
            <button onClick={prev} className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white `}>
                <BiChevronLeft size={40} />
            </button>
            <button onClick={next} className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white`}>
                <BiChevronRight size={40} />
            </button>
        </div>
        <div className={`inset-0 flex justify-between p-1`}>
            <button onClick={prev} className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white `}>
                <BsHandThumbsUp size={20} />
            </button>
            <button onClick={next} className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white`}>
                <BiComment size={20} />
            </button>
            <div className={`absolute bottom-4 right-0 left-0`}>
                <div className="flex items-center justify-center gap-2">
                    {postelements.map((_, i) => (
                        <div className={`transition-all w-3 h-3 bg-green-300 rounded-full ${curr === i ? 'p4' : 'bg-opacity-50'} cursor-pointer`} />
                    ))}
                </div>
            </div>
        </div>
    </div>
 );}