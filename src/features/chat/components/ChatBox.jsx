import { useState } from 'react'
import MsgBody from './MsgBody'
import MsgSendBox from './MsgSendBox'
import socket from '../../../config/socket-config'

export default function ChatBox(props) {
    const { username, allMsg, socketId, room } = props
    const [input, setInput] = useState('')
    const hdlSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')
        socket.emit('sendMessage', { username, msg: input, room })
        setInput('')
    }
    return (
        <div className="container mx-auto">
            <div className="max-w-2xl border rounded">
                <div>
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                            <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://www.svgrepo.com/show/508199/user-square.svg"
                                alt="username"
                            />
                            <span className="block ml-2 font-bold text-gray-600">
                                Provider Id: {username}
                            </span>
                            <span
                                className={
                                    'absolute w-3 h-3 rounded-full left-10 top-3' +
                                    ` ${
                                        socketId ? 'bg-green-600' : 'bg-red-500'
                                    }`
                                }
                            ></span>
                        </div>
                        <div className="relative w-full p-6 overflow-y-auto h-[29rem]">
                            <ul className="space-y-2">
                                {allMsg.map((el, i) => (
                                    <MsgBody
                                        key={i}
                                        msg={el.msg}
                                        chatuser={el.username}
                                        isMe={el.username === username}
                                    />
                                ))}
                            </ul>
                        </div>
                        {/* <MsgSendBox username={username} hdlSubmit={hdlSubmit}/> */}
                        <form
                            onSubmit={hdlSubmit}
                            className="flex items-center justify-between w-full p-3 border-t border-gray-300"
                        >
                            <input
                                type="text"
                                placeholder="Message"
                                className="flex-1 py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit">
                                <svg
                                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
