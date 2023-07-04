import React from 'react'

export default function ChatCard(props) {
    const {
        name,
        profileImage = 'https://www.svgrepo.com/show/508199/user-square.svg',
        isOnline = true,
    } = props
    return (
        <>
            <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border  hover:bg-blue-300 cursor-pointer">
                <div className="relative flex items-center space-x-4">
                    <img
                        src={profileImage}
                        alt="My profile"
                        className="w-16 h-16 rounded-full"
                    />
                    {isOnline && (
                        <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white" />
                    )}
                </div>
                <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">{name}</div>
                    <div className="text-sm text-gray-500">Thank you.</div>
                </div>
                <div className="p-2">
                    <p className="text-xs text-grey-darkest ">12:45 pm</p>
                    <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0 mt-3" />
                </div>
            </div>
        </>
    )
}
