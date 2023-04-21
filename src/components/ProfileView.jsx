import React from 'react';

export default function ProfileView() {
 return (
    <>
        <div className="w-full lg:w-4/12 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">

                <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <img alt="My ProfileView Pic" src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                             className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    </div>
                </div>

            </div>
        </div>
    </>
 );}