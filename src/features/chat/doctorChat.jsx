import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from '../chat/components/ChatBox'
import { useSelector } from 'react-redux'

export default function doctorChat() {
    const doctorId = useSelector((state) => state.auth.user.id)
    socket.connect()
    useEffect(() => {
        socket.emit('startChat', { doctorId, providerId })
        return () => {}
    }, [])
    return <div>doctorChat</div>
}
