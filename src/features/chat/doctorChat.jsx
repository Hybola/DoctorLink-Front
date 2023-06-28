import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from './components/ChatBox'
import { useSelector } from 'react-redux'

export default function DoctorChat(prop) {
    const doctorId = useSelector((state) => state.auth.user.id)
    const [allMsg, setAllMsg] = useState([]) // เอา allMsg ไป render
    const [message, setMessage] = useState('') // เอา setMessage ไป binding onChange
    const [providerId, setProviderId] = useState(null)

    useEffect(() => {
        socket.emit('startChat', { doctorId, providerId })
        socket.emit('doctorSendMessage', { message, doctorId, providerId }) //อยู่ใน send box
        socket.on('doctorGetMessage', (data) => {
            setAllMsg([...allMsg, data])
        })

        return () => {
            socket.off('doctorGetMessage')
        }
    }, [])
    return (
        <div className="pt-2 max-w-2xl mx-auto grid grid-cols-1 gap-3 w-3/4">
            <div className="text-sm text-purple-500 text-right">
                Socket Id : {socket.id}{' '}
            </div>

            <ChatBox
                userName={providerId}
                socketId={socket.id}
                allMsg={allMsg}
                room={room}
            />
        </div>
    )
}
