import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from './components/ChatBox'

export default function ProviderChat() {
    const providerId = useSelector((state) => state.auth.user.id)

    const [chatLists, setChatLists] = useState({}) //รายชื่อคนที่คุยด้วย
    const [doctorIdList, setDoctorIdList] = useState([]) //เก็บรายชื่อ id ของ doctor ทุกคน
    const [currentDoctor, setCurrentDoctor] = useState(0) // หมอคนปัจจุบันที่กำลัง chat คุยอยู่ มีค่า= doctorId
    const [allMsg, setAllMsg] = useState([]) //ข้อความปัจจุบันที่กำลังแสดงใน chat body

    const inputMessage = 'provider says hello'
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
                [data.room]: [...chatLists[data.room], data.message],
            })
            //เอา chatList เดิมมา spreed แล้ว update เฉพาะ room ที่ส่งมา ให้มีค่าเท่ากับ ===> ข้อความเดิมที่มีอยู่ มาบวกเพิ่มข้อความใหม่ที่ส่งเข้ามา
            setAllMsg([...allMsg, data.message])
        })

        socket.emit('providerSendMessage', {
            message: inputMessage,
            doctorId: doctorIdList[currentDoctor],
            providerId,
        }) //อยู่ใน send box

        return () => {
            socket.off('acceptChat')
            socket.off('providerGetMessage')
        }
    }, [])

    useEffect(() => {
        setAllMsg([...chatLists[`${currentDoctor}:${providerId}`]]) // เอา allMsg ไป render
    }, [currentDoctor])
    return <div>providerChat</div>
}
