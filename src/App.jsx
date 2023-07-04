import { useDispatch, useSelector } from 'react-redux'
import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
import socket from './config/socket-config'
import { useEffect } from 'react'
import Loading from './components/Loading'
import {
    getMyProfile,
    getProvince,
} from './features/profile/slice/profile-slice'
import { useState } from 'react'

function App() {
    const initialLoading = useSelector((state) => state.auth?.initialLoading)
    const user = useSelector((state) => state.auth?.user)
    const role = useSelector((state) => state.auth?.role)

    // const [isConnected, setIsConnected] = useState(socket.connected)
    // const [socketId, setSocketId] = useState(0)

    useEffect(() => {
        if (user) {
            // console.log('user detail==>>', user)
            // console.log('role ===>>', role) //role = "doctor", "provider"
            socket.auth = { user, role }
            socket.connect()
            // setSocketId(socket.id)
            // setIsConnected(true)
        }
        return () => {
            socket.disconnect()
        }
    }, [user])

    if (initialLoading) {
        return <Loading />
    }
    return (
        <div>
            <Router />
            <ToastContainer
                position="bottom-center"
                theme="dark"
                autoClose={3000}
            />
        </div>
    )
}

export default App
