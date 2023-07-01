import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import MsgSendBox from './components/MsgSendBox'
import { toast } from 'react-toastify'

export default function ProviderChat() {
    const ref = useRef()
    const providerId = useSelector((state) => state.auth.user.id)

    const [chatLists, setChatLists] = useState({}) //รายชื่อคนที่คุยด้วย

    const [doctorIdList, setDoctorIdList] = useState([]) //เก็บรายชื่อ id ของ doctor ทุกคน
    const [allMsg, setAllMsg] = useState([]) //ข้อความปัจจุบันที่กำลังแสดงใน chat body
    const [input, setInput] = useState('') // เอาไป binding onChange
    const [currentDoctor, setCurrentDoctor] = useState(1) // หมอคนปัจจุบันที่กำลัง chat คุยอยู่ มีค่า= doctorId

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
            setAllMsg([...[chatLists[`${currentDoctor}:${providerId}`]]]) // เอา allMsg ไป render
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
        const room = `${currentDoctor}:${providerId}`

        socket.emit('providerSendMessage', {
            conversation,
            room,
        }) //อยู่ใน send box

        // console.log("conversation from Provider:==>>",conversation)
        setAllMsg([...allMsg, conversation])
        setInput('')
    }
    return (
        <div className="pt-2 max-w-2xl mx-auto grid grid-cols-1 gap-3 w-3/4">
            <div className="text-sm text-purple-500 text-right">
                My Socket Id : {socket.id}{' '}
            </div>
            {/* <ChatBox userName={providerId} socketId={socket.id} allMsg={allMsg} room={room}/> */}
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
                                    Chat with doctor Id: {currentDoctor}
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
                            <div className="relative w-full p-6 overflow-y-auto h-[29rem]">
                                <ul className="space-y-2">
                                    {allMsg.map((el, i) => (
                                        <MsgBody
                                            key={`${i}-${el.message}`}
                                            conversation={el}
                                            role={'provider'}
                                        />
                                    ))}
                                    <li ref={ref}></li>
                                </ul>
                            </div>
                            {/* <MsgSendBox hdlSubmit={handleSendMessage} /> */}
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
        </div>
    )
}
