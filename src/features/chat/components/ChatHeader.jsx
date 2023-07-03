import React from 'react'
import { ClipBoardIcon, MenuIcon, SearchIcon } from '../../../icons'

export default function ChatHeader(prop) {
    const { currentDoctor, socketId } = prop
    return (
        <>
            {/* ==== Header ====== */}
            <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center border-b border-gray-300 ">
          
                <div className="flex items-center">

                    <div className="relative flex items-center p-2">
                        <img
                            className="object-cover w-10 h-10 rounded-full"
                            src="https://www.svgrepo.com/show/508199/user-square.svg"
                            alt="username"
                        />
                        <span className="block ml-2 font-bold ">
                             {`${currentDoctor?.firstName} ${currentDoctor?.lastName}`}
                        </span>
                        <span
                            className={
                                'absolute w-3 h-3 rounded-full left-10 top-3 border-2 border-white' +
                                ` ${socketId ? 'bg-green-600' : 'bg-red-500'}`
                            }
                        ></span>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <SearchIcon />
                    </div>
                    <div className="ml-6">
                        <ClipBoardIcon />
                    </div>
                    <div className="ml-6">
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </>
    )
}
