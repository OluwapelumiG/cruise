import React from 'react';
import {Post} from "../components/Post";

export function Home(props) {

 return (
     <div>

         <div className={`max-w-[440px] h-auto mx-auto`}>
             <Post type={`slider`} />
             <Post type={`slider`} />
             {/*<Post />*/}
             {/*<Post />*/}

         </div>
         <div className="pb-20">

         </div>
     </div>



 );}