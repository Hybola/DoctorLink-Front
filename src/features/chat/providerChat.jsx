import { useState, useEffect } from 'react'
import { socket } from '../../config/socket-config'
import ChatBox from './components/ChatBox'

export default function ProviderChat() {
    const providerId = useSelector((state) => state.auth.user.id)

    useEffect(() => {
        socket.on('acceptChat', (data) => {
            data.doctorId
            socket.emit('providerJoinChat')
        })

        return () => {}
    }, [])
    return <div>providerChat</div>
}
