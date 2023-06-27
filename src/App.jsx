import { useSelector } from 'react-redux'
import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
import socket from './config/socket-config'
import { useEffect } from 'react'

function App() {
    const user = useSelector((state) => state.auth.user)
    const role = useSelector((state) => state.auth.role)

    useEffect(() => {
        console.log('user before =====>>', user)
        if (user) {
            console.log('user=====>>', user)
            console.log('role =====>>', role)
            socket.auth = { user, role }
            socket.connect()
        }
        return () => {
            socket.disconnect()
        }
    }, [user])
    return (
        <div>
            <Router />
            <ToastContainer
                position="top-center"
                theme="dark"
                autoClose={3000}
            />
        </div>
    )
}

export default App
