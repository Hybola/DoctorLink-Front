import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import { toast } from 'react-toastify'
import ChatHeader from './components/ChatHeader'
import { EmojiIcon, SendImageIcon, SumbitChatMessageIcon } from '../../icons'

export default function ProviderChat() {
    const ref = useRef()
    const providerId = useSelector((state) => state.auth.user.id)

    const [chatLists, setChatLists] = useState({}) //รายชื่อคนที่คุยด้วย

    const [doctorIdList, setDoctorIdList] = useState([]) //เก็บรายชื่อ id ของ doctor ทุกคน
    const [allMsg, setAllMsg] = useState([]) //ข้อความปัจจุบันที่กำลังแสดงใน chat body
    const [input, setInput] = useState('') // เอาไป binding onChange
    const [currentDoctor, setCurrentDoctor] = useState({
        id: 1,
        name: 'หมอไอดี 1',
    }) // หมอคนปัจจุบันที่กำลัง chat คุยอยู่ มีค่า= doctorId

    useEffect(() => {
        socket.on('acceptChat', (data) => {
            console.log('provider acceptChat:Room >>>', data.newRoom) //data={newRoom: '1:1', doctorId: 1}
            socket.emit('providerJoinRoom', data.newRoom)
            toast.info(`incomming message`)
            setChatLists({ ...chatLists, [data.newRoom]: [] }) //เพิ่มอีกหนึ่งชื่อเข้า chatlist , [] คือ allMes หนึ่งตัว
            setDoctorIdList([...doctorIdList, data.doctorId]) //เก็บ id ของ doctor ไว้ใช้งาน
        })
        socket.on('providerGetMessage', (data) => {
            // console.log('providerGetMessage: data =', data)
            if (Object.keys(chatLists)?.length !== 0) {
                setChatLists({
                    ...chatLists,
                    [data.room]: [...chatLists[data.room], data.conversation],
                })
            }
            //เอา chatList อันเดิมมา spreed แล้ว update เฉพาะ room ที่ส่งมา ให้มีค่าเท่ากับ ===> ข้อความเดิมที่มีอยู่ มาบวกเพิ่มข้อความใหม่ที่ส่งเข้ามา

            setAllMsg((prev) => [...prev, data.conversation])
            /// ***** อะไรที่อยากจะทำ หลังจาก render ui ได้แล้ว ให้เอาไปใส่ใน useEffct ### *****
            // setAllMsg([...allMsg, data.conversation])  // code บรรทัด นี้ทำงานผิดเพี๊ยน เพราะอยุ่ใน useEffect
            //ตามหลักการเรื่อง closure แล้ว การ set state ใหม่ภายใน useEffect นั้น ค่าเริ่มต้นของ allMsg จะอ้างอิงมาจากค่าที่เคยเก็บไว้ก่อนรัน useEffect
            // ดังนั้นจึงควรเลี่ยงไปใช้ setAllMsg((prev) => [...prev, data.conversation]) แทน
        })

        return () => {
            socket.off('acceptChat')
            socket.off('providerGetMessage')
        }
    }, [])

    useEffect(() => {
        if (Object.keys(chatLists)?.length !== 0)
            setAllMsg([...[chatLists[`${currentDoctor.id}:${providerId}`]]]) // เอา allMsg ไป render
    }, [currentDoctor])

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [allMsg.length])

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')

        const conversation = {
            message: input,
            to: 'doctor',
            from: 'provider',
        }
        const room = `${currentDoctor.id}:${providerId}`

        socket.emit('providerSendMessage', {
            conversation,
            room,
        }) //อยู่ใน send box

        // console.log("conversation from Provider:==>>",conversation)
        setAllMsg([...allMsg, conversation])
        setInput('')
    }
    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-3 w-full border-slate-500 shadow-md">
                <div className="container mx-auto ">
                    <div className=" border rounded">
                        <div className="w-full bg-primary text-white">
                            {/* === Header ===  */}

                            <ChatHeader
                                currentDoctor={currentDoctor.name}
                                socketId={socket.id}
                            />
                        </div>

                        {/* ======= Conversation Body ======  */}
                        <div className="relative w-full p-6 overflow-y-auto h-[41.5rem] bg-secondary">
                            <ul className="space-y-2 ">
                                {allMsg.map((el, i) => (
                                    <MsgBody
                                        key={`${i}-${el.message}`}
                                        conversation={el}
                                        role={'provider'}
                                    />
                                ))}
                                <li ref={ref}></li>
                            </ul>
                            <div className="text-sm text-purple-500 text-right absolute bottom-1 right-1">
                                My Socket Id : {socket.id}{' '}
                            </div>
                        </div>
                        {/* ======  Send Message Box ====== */}
                        <form
                            onSubmit={handleSendMessage}
                            className="bg-info flex items-center justify-between w-full p-1 border-t border-gray-300 "
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
                                    className="block mx-4 p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."
                                    name="message"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
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
        </>
    )
}
