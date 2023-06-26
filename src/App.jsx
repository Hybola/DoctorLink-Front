import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'

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
