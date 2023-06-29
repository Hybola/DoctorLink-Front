import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../config/socket-config'
import MsgBody from './components/MsgBody'
import MsgSendBox from './components/MsgSendBox'

export default function ProviderChat() {
    const ref = useRef()
    const providerId = useSelector((state) => state.auth.user?.id)

    const [chatLists, setChatLists] = useState({}) //รายชื่อคนที่คุยด้วย

    const [doctorIdList, setDoctorIdList] = useState([]) //เก็บรายชื่อ id ของ doctor ทุกคน
    const [currentDoctor, setCurrentDoctor] = useState(0) // หมอคนปัจจุบันที่กำลัง chat คุยอยู่ มีค่า= doctorId
    const [allMsg, setAllMsg] = useState([]) //ข้อความปัจจุบันที่กำลังแสดงใน chat body
    const [input, setInput] = useState('') // เอาไป binding onChange

    useEffect(() => {
        socket.on('acceptChat', (data) => {
            // socket.join(data.newRoom) //provider joins chat
            socket.emit('providerJoinRoom', data.newRoom)
            setChatLists({ ...chatLists, [data.newRoom]: [] }) //เพิ่มอีกหนึ่งชื่อเข้า chatlist , [] คือ allMes หนึ่งตัว
            setDoctorIdList([...doctorIdList, data.doctorId]) //เก็บ id ของ doctor ไว้ใช้งาน
        })
        socket.on('providerGetMessage', (data) => {
            setChatLists({
                ...chatLists,
                [data.room]: [...chatLists[data.room], data.conversation],
            })
            //เอา chatList เดิมมา spreed แล้ว update เฉพาะ room ที่ส่งมา ให้มีค่าเท่ากับ ===> ข้อความเดิมที่มีอยู่ มาบวกเพิ่มข้อความใหม่ที่ส่งเข้ามา
            setAllMsg([...allMsg, data.converation])
        })

        return () => {
            socket.off('acceptChat')
            socket.off('providerGetMessage')
        }
    }, [])

    useEffect(() => {
        if (Object.keys(chatLists).length !== 0)
            setAllMsg([...chatLists[`${currentDoctor}:${providerId}`]]) // เอา allMsg ไป render
    }, [currentDoctor])

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [allMsg.length])

    const hdlSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')
        socket.emit('providerSendMessage', {
            message: input,
            doctorId: doctorIdList[currentDoctor],
            providerId,
        }) //อยู่ใน send box
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
                                            key={i}
                                            msg={el.message}
                                            chatuser={
                                                el.to == 'doctor' ||
                                                el.from == 'doctor'
                                            }
                                            isMe={
                                                el.from == 'provider' ||
                                                el.to == 'provider'
                                            }
                                        />
                                    ))}
                                    <li ref={ref}></li>
                                </ul>
                            </div>
                            <MsgSendBox hdlSubmit={hdlSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
