import { EmojiIcon } from '../../icons'
import ProviderChat from './providerChat'

export default function ChatConsole() {
    return (
        <>
            {/* component */}
            <div className="container mx-auto">
                <div className="flex border border-grey rounded shadow-lg h-full">
                    {/* Left */}
                    <div className="w-1/2 border flex flex-col">
                        {/* Header */}
                        <div className="py-2 px-4 bg-grey-lighter flex flex-row justify-between items-center ">
                            <div className="avatar">Chats</div>

                            <div className="flex">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                    >
                                        <path
                                            fill="#727A7E"
                                            d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                    >
                                        <path
                                            opacity=".55"
                                            fill="#263238"
                                            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                    >
                                        <path
                                            fill="#263238"
                                            fillOpacity=".6"
                                            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Search */}
                        <input
                            type="search"
                            className="bg-[color:var(--slate-100)] border border-[color:var(--slate-300)] w-[90%] rounded text-sm pr-8 px-4 py-2 border-solid outline: none mx-3 mb-4"
                            placeholder="Search..."
                        />
                        {/* ===== Contacts ===== */}
                        <div className="bg-grey-lighter flex-1 overflow-auto p-2 ">
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
                                    <p className="text-xs text-grey-darkest ">
                                        12:45 pm
                                    </p>
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
                                    <p className="text-xs text-grey-darkest ">
                                        12:45 pm
                                    </p>
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
                                    <p className="text-xs text-grey-darkest ">
                                        12:45 pm
                                    </p>
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
                                    <p className="text-xs text-grey-darkest ">
                                        12:45 pm
                                    </p>
                                    <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0 mt-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <ProviderChat />
                </div>
            </div>
        </>
    )
}
