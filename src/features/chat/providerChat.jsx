import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import { toast } from 'react-toastify'
import ChatHeader from './components/ChatHeader'
import { EmojiIcon, SendImageIcon, SumbitChatMessageIcon } from '../../icons'
import ChatCard from './components/ChatCard'
import { setChatLists, setDoctorList } from './slice/chat-slice'

export default function ProviderChat() {
    const ref = useRef()

    const providerId = useSelector((state) => state.auth.user.id)
    const provider = useSelector((state) => state.auth.user)

    // const [chatLists, setChatLists] = useState({}) //รายชื่อคนที่คุยด้วย
    const chatLists = useSelector((state) => state.chat.chatLists)
    //const [doctorList, setDoctorList] = useState([]) //เก็บ profile ของ doctor ทุกคน
    const doctorList = useSelector((state) => state.chat.doctorList)

    const dispatch = useDispatch()
    let location = useLocation() //จะได้ value ที่ส่งมาจากตอน click chat button
    // console.log('location.state >>>', location.state) //{id, name, profileImage}
    const [input, setInput] = useState('') // เอาไป binding onChange
    const [currentDoctor, setCurrentDoctor] = useState({}) // หมอคนปัจจุบันที่กำลัง chat คุยอยู่ มีค่า= {id,firstName,lastName,profileImage,...}

    useEffect(() => {
        socket.on('acceptChat', (data) => {
            // console.log('provider acceptChat:Room >>>', data.newRoom) //data={newRoom: '1:1'}
            socket.emit('providerJoinRoom', data.newRoom)
            toast.info(`incomming message`)

            // if a doctor doesn't exit in doctor list, then add the doctor to the state
            const isExistingChat = (element) => element.id === data.doctor.id
            if (!doctorList.some(isExistingChat)) {
                // setChatLists({ ...chatLists, [data.newRoom]: [] }) //เพิ่มอีกหนึ่งชื่อเข้า chatlist , [] คือ allMes หนึ่งตัว
                dispatch(setChatLists({ ...chatLists, [data.newRoom]: [] }))
                //setDoctorList([...doctorList, data.doctor]) //เก็บ Object doctor ไว้ใช้งาน
                dispatch(setDoctorList([...doctorList, data.doctor]))
            }
            setCurrentDoctor(data.doctor)
        })

        socket.on('providerGetMessage', (data) => {
            // if (Object.keys(chatLists)?.length !== 0) {
            //     setChatLists((prev) => {
            //         const clonePrev = structuredClone(prev)
            //         clonePrev[data.room].push(data.conversation)
            //         return clonePrev
            //     })
            // }
            if (Object.keys(chatLists)?.length !== 0) {
                const clonePrev = structuredClone(chatLists)
                clonePrev[data.room].push(data.conversation)
                dispatch(setChatLists(clonePrev))
            }
            /// ***** อะไรที่อยากจะทำ หลังจาก render ui ได้แล้ว ให้เอาไปใส่ใน useEffct ### *****
            // setAllMsg([...allMsg, data.conversation])  // code บรรทัด นี้ทำงานผิดเพี๊ยน เพราะอยุ่ใน useEffect
            //ตามหลักการเรื่อง closure แล้ว การ set state ใหม่ภายใน useEffect นั้น ค่าเริ่มต้นของ allMsg จะอ้างอิงมาจากค่าที่เคยเก็บไว้ก่อนรัน useEffect
            // ดังนั้นจึงควรเลี่ยงไปใช้ setAllMsg((prev) => [...prev, data.conversation]) แทน
        })

        return () => {
            socket.off('acceptChat')
            socket.off('providerGetMessage')
        }
    }, [doctorList, chatLists])
    ////==== When a provider click chat button
    useEffect(() => {
        socket.emit('providerStartChat', {
            doctorId: location?.state?.id,
            provider,
        })
        socket.on('providerGetMessage', (data) => {
            if (Object.keys(chatLists)?.length !== 0) {
                const clonePrev = structuredClone(chatLists)
                clonePrev[data.room].push(data.conversation)
                dispatch(setChatLists(clonePrev))
            }
        })
        setCurrentDoctor({
            id: location?.state?.id,
            name: location?.state?.name,
            profileImage: location?.state?.profileImage,
        })
        return () => {
            socket.off('providerGetMessage')
        }
    }, [])
    ///=========================

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [chatLists[`${currentDoctor?.id}:${providerId}`]?.length])

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')
        const conversation = {
            message: input,
            to: 'doctor',
            from: 'provider',
        }
        const room = `${currentDoctor?.id}:${providerId}`
        socket.emit('providerSendMessage', {
            conversation,
            room,
        }) //อยู่ใน send box

        ////==== below code by useState
        // setChatLists((prev) => {
        //     prev[room].push(conversation)
        //     return prev
        // })
        ////==== above code by useState

        const clonePrev = structuredClone(chatLists)
        clonePrev[room].push(conversation)
        dispatch(setChatLists(clonePrev))
        setInput('')
    }
    const handleSelectChat = (id) => {
        const index = doctorList.findIndex((el) => el.id == id)
        setCurrentDoctor(doctorList[index])
    }
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
                        {/* ===== Online Chat Contacts ===== */}
                        <div className="bg-grey-lighter flex-1 overflow-auto p-2 ">
                            {doctorList?.map((el) => (
                                <div
                                    key={el.id}
                                    onClick={() => {
                                        handleSelectChat(el.id)
                                    }}
                                >
                                    <ChatCard
                                        name={el.name}
                                        profileImage={el?.profileImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right */}
                    <div className="mx-auto grid grid-cols-1 gap-3 w-full border-slate-500 shadow-md ">
                        <div className="container mx-auto ">
                            <div className=" border rounded">
                                <div className="w-full bg-primary text-white">
                                    {/* === Header ===  */}

                                    <ChatHeader
                                        currentDoctor={currentDoctor}
                                        socketId={socket.id}
                                    />
                                </div>

                                {/* ======= Conversation Body ======  */}
                                <div className="relative w-full p-6 overflow-y-auto h-[41.5rem] bg-secondary">
                                    <ul className="space-y-2 ">
                                        {chatLists[
                                            `${currentDoctor?.id}:${providerId}`
                                        ]?.map((el, i) => (
                                            <MsgBody
                                                key={`${i}-${el?.message}`}
                                                conversation={el}
                                                role={'provider'}
                                            />
                                        ))}
                                        <li ref={ref}></li>
                                    </ul>
                                    {/* <div className="text-sm text-purple-500 text-right absolute bottom-1 right-1">
                                        My Socket Id : {socket.id}{' '}
                                    </div> */}
                                </div>
                                {/* ======  Send Message Box ====== */}
                                <form
                                    onSubmit={handleSendMessage}
                                    className="bg-info flex items-center justify-between w-full p-1 border-t border-gray-300 rounded-lg"
                                >
                                    <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 w-full p-3">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >
                                            <SendImageIcon />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >
                                            <EmojiIcon />
                                        </button>
                                        <input
                                            type="text"
                                            autocomplete="off"
                                            className="block mx-4 p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Your message..."
                                            name="message"
                                            value={input}
                                            onChange={(e) =>
                                                setInput(e.target.value)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
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
        </>
    )
}
