import { useSelector } from 'react-redux'
import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
import socket from './config/socket-config'
import { useEffect } from 'react'
import Loading from './components/Loading'

function App() {
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
