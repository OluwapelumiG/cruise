import React from 'react';
import {PostSlider} from "./PostSlider";

import PostOwner from "../assets/images/280.jpg";

export function Post(props) {

 return (
     <>
         <div className="max-w-lg rounded overflow-hidden shadow-lg">

             <div className="flex m-5">
                 <img className={`w-10 h-10 rounded-full`} src={PostOwner} alt="Post owner"/>
                 <div className={`flex flex-col`}>
                     <h3>Post Owner</h3>
                     <p>Laugh about this</p>
                 </div>
             </div>
             {
                 props.type === 'slider' ? <PostSlider /> : ''
             }
         </div>

     </>

 );}