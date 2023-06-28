import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from './components/ChatBox'
import { useSelector } from 'react-redux'

export default function DoctorChat() {
    const doctorId = useSelector((state) => state.auth.user.id)
    const providerId = 1

    useEffect(() => {
        socket.emit('startChat', { doctorId, providerId })

        return () => {}
    }, [])
    return <div>doctorChat</div>
}
