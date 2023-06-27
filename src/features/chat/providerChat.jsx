import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from '../chat/components/ChatBox'

export default function providerChat() {
    const providerId = useSelector((state) => state.auth.user.id)

    socket.connect()
    useEffect(() => {
        socket.on('acceptChat', (data) => {
            data.doctorId
            socket.emit('providerJoinChat')
        })

        return () => {}
    }, [])
    return <div>providerChat</div>
}
