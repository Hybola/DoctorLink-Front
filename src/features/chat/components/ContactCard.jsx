import React from 'react'

export default function ContactCard() {
    return (
        <>
           
                <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border  hover:bg-blue-300 cursor-pointer">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                            alt="My profile"
                            className="w-16 h-16 rounded-full"
                        />
                    </div>
                    <div className="flex-grow p-3">
                        <div className="font-semibold text-gray-700">
                            Antério Vieira da Silva Lima
                        </div>
                        <div className="text-sm text-gray-500">
                            You: Thanks, sounds good! . 8hr
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-xs text-grey-darkest ">12:45 pm</p>
                        <img
                            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                            alt="My profile"
                            className="w-4 h-4 rounded-full order-1 mt-3"
                        />
                    </div>
                </div>
                <div className="bg-info w-full flex items-center p-2 rounded-xl shadow border  hover:bg-blue-300 cursor-pointer">
                    <div className="relative flex items-center space-x-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5"
                            alt="My profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white" />
                    </div>
                    <div className="flex-grow p-3">
                        <div className="font-semibold text-gray-700">
                            Antério Vieira da Silva Lima
                        </div>
                        <div className="text-sm text-gray-500">
                            @ktquez sent a image . 2hr
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-xs text-grey-darkest ">12:45 pm</p>
                        <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0 mt-3" />
                    </div>
                </div>
                <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border  hover:bg-blue-300 cursor-pointer">
                    <div className="relative flex items-center space-x-4">
                        <img
                            src="https://picsum.photos/200/300"
                            alt="My profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white" />
                    </div>
                    <div className="flex-grow p-3">
                        <div className="font-semibold text-gray-700">
                            Antério Vieira da Silva Lima
                        </div>
                        <div className="text-sm text-gray-500">
                            @ktquez sent a image . 2hr
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-xs text-grey-darkest ">12:45 pm</p>
                        <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0 mt-3" />
                    </div>
                </div>
                <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border  hover:bg-blue-300 cursor-pointer">
                    <div className="relative flex items-center space-x-4">
                        <img
                            src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                            alt="My profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white" />
                    </div>
                    <div className="flex-grow p-3">
                        <div className="font-semibold text-gray-700">
                            Antério Vieira da Silva Lima
                        </div>
                        <div className="text-sm text-gray-500">
                            @ktquez sent a image . 2hr
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-xs text-grey-darkest ">12:45 pm</p>
                        <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0 mt-3" />
                    </div>
                </div>
            
        </>
    )
}
