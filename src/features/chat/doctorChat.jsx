import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import {
    CloseWindowIcon,
    EmojiIcon,
    SendImageIcon,
    SumbitChatMessageIcon,
} from '../../icons'
export default function DoctorChat({ chatUser, handleCloseChat }) {
    const doctorId = useSelector((state) => state.auth?.user.id)
    const doctorProfile = useSelector((state) => state.profile?.myProfile) //={id,firstName,lastName,profileImage,...}
    // console.log(` doctor: ===>>${doctorId}`) //
    // console.log(` doctorProfile: ===>>${doctorProfile?.profileImage}`)
    const ref = useRef()

    const [allMsg, setAllMsg] = useState([]) // เอา allMsg ไป render
    const [input, setInput] = useState('') // เอา setMessage ไป binding onChange
    const [providerId, setProviderId] = useState(chatUser?.id) // onChange
    const [providerName, setProviderName] = useState(chatUser?.name)

    ////Mock data test allMsg.map()
    const converationArray = [
        {
            message: 'hi,iam provider',
            to: 'doctor',
            from: 'provider',
        },
        {
            message: "hi,i'm doctor",
            to: 'provider',
            from: 'doctor',
        },
    ]

    useEffect(() => {
        socket.emit('startChat', { doctorId, providerId, doctorProfile })

        // console.log(
        //     `"startChat", doctor:${doctor}, providerId: ${providerId}`
        // )
        socket.on('doctorGetMessage', (data) => {
            setAllMsg((prev) => [...prev, data.conversation])
        })

        return () => {
            socket.off('doctorGetMessage')
        }
    }, [chatUser.id])
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [allMsg.length])

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')
        const conversation = {
            message: input,
            to: 'provider',
            from: 'doctor',
        }
        const room = `${doctorId}:${providerId}`

        setAllMsg([...allMsg, conversation])
        setInput('')
        socket.emit('doctorSendMessage', { conversation, room })
    }
    return (
        <>
            <div className="fixed right-3 bottom-3 z-10">
                <div className="text-sm text-purple-500 text-right mx-4">
                    My Socket Id : {socket.id}{' '}
                </div>
                {/* ======= Chat Modal  ====== */}
                <div className="flex flex-col w-[400px] border shadow-xl  bg-white ">
                    {/* ======= Chat header ====== */}
                    <div className="flex items-center justify-between rounded-t-lg bg-primary px-3">
                        <div className="relative flex items-center p-2">
                            <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={chatUser.providerImage}
                                alt="username"
                            />

                            <span className="block text-xl font-bold text-white mx-2">
                                {providerName}
                            </span>
                            <span
                                className={
                                    'absolute w-3 h-3 rounded-full left-10 top-3 border-2 border-white' +
                                    ` ${
                                        socket.id
                                            ? 'bg-green-600'
                                            : 'bg-red-500'
                                    }`
                                }
                            ></span>
                        </div>
                        <button
                            onClick={handleCloseChat}
                            className="text-white mx-1"
                        >
                            <CloseWindowIcon />
                        </button>
                    </div>
                    <div className=" max-w-2xl  grid grid-cols-1 gap-3">
                        <div className="container mx-auto">
                            <div className="max-w-2xl">
                                <div className="w-full">
                                    {/* ======  Chat Messages Body ====== */}
                                    <div className="relative w-full p-6 overflow-y-auto h-[29rem] bg-secondary">
                                        <ul className="space-y-2">
                                            {allMsg.map((el, i) => (
                                                <MsgBody
                                                    key={i}
                                                    conversation={el}
                                                    role={'doctor'}
                                                />
                                            ))}
                                            <li ref={ref}></li>
                                        </ul>
                                    </div>
                                    {/* ======  Send Message Box ====== */}
                                    <form
                                        onSubmit={handleSendMessage}
                                        className="bg-info flex items-center justify-between w-full p-1 border-t border-gray-300 rounded-lg"
                                    >
                                        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 w-full p-3">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <SendImageIcon />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <EmojiIcon />
                                            </button>
                                            <input
                                                type="text"
                                                className="block mx-1 p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Your message..."
                                                name="message"
                                                value={input}
                                                onChange={(e) =>
                                                    setInput(e.target.value)
                                                }
                                            />

                                            <button
                                                type="submit"
                                                className="inline-flex justify-center p-1 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                                            >
                                                <SumbitChatMessageIcon />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
