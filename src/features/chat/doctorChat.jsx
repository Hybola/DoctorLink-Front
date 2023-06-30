import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import { CloseWindowIcon } from '../../icons'
export default function DoctorChat({ chatUser, handleCloseChat }) {
    const doctorId = useSelector((state) => state.auth.user?.id)
    // console.log(` doctorId: ===>>${doctorId}`)
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
        socket.emit('startChat', { doctorId, providerId })
        // console.log(
        //     `"startChat", doctorId:${doctorId}, providerId: ${providerId}`
        // )
        socket.on('doctorGetMessage', (data) => {
            setAllMsg((prev)=>[...prev, data.conversation])
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
        const room=`${doctorId}:${providerId}`

        setAllMsg([...allMsg, conversation])
        setInput('')
        socket.emit('doctorSendMessage', { conversation, room})
    }
    return (
        <>
            {/* ======= Chat Modal  ====== */}
            <div className="flex flex-col w-[400px] border shadow-xl fixed bg-white right-2 bottom-2">
                {/* ======= Chat title ====== */}
                <div className="flex items-center justify-between rounded-t-lg bg-primary py-4 px-9">
                    <h3 className="text-xl font-bold text-white">
                        Let's chat Online
                    </h3>
                    <button onClick={handleCloseChat} className="text-white">
                        <CloseWindowIcon />
                    </button>
                </div>
                <div className="pt-2 max-w-2xl  grid grid-cols-1 gap-3">
                    <div className="container mx-auto">
                        {/* ======= Chat header ====== */}
                        <div className="text-sm text-purple-500 text-right mx-4">
                            My Socket Id : {socket.id}{' '}
                        </div>
                        <div className="max-w-2xl border rounded">
                            <div className="w-full">
                                <div className="relative flex items-center p-3 border-b border-gray-300">
                                    <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src="https://www.svgrepo.com/show/508199/user-square.svg"
                                        alt="username"
                                    />
                                    <span className="block ml-2 font-bold text-gray-600">
                                        Provider: {providerName}
                                    </span>
                                    <span
                                        className={
                                            'absolute w-3 h-3 rounded-full left-10 top-3' +
                                            ` ${
                                                socket.id
                                                    ? 'bg-green-600'
                                                    : 'bg-red-500'
                                            }`
                                        }
                                    ></span>
                                </div>
                                {/* ======  Chat Messages Body ====== */}
                                <div className="relative w-full p-6 overflow-y-auto h-[29rem]">
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
                                {/* <MsgSendBox username={username} hdlSubmit={hdlSubmit}/> */}
                                <form
                                    onSubmit={handleSendMessage}
                                    className="flex items-center justify-between w-full p-3 border-t border-gray-300"
                                >
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        className="flex-1 py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                        name="message"
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
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
            </div>
        </>
    )
}
