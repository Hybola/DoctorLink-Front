import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import store from './store'
import { Provider } from 'react-redux'
import { getToken } from './utils/localStorage.js'
import { docFetchMe, provFetchMe } from './features/auth/slice/auth-slice.js'
import { getProvince } from './features/profile/slice/profile-slice.js'
import jwt_decode from 'jwt-decode'

if (getToken()) {
    const decoded = jwt_decode(getToken())

    if (decoded.role == 'doctor') {
        store.dispatch(docFetchMe())
    }
    if (decoded.role == 'provider') {
        store.dispatch(provFetchMe())
    }
    store.dispatch(getProvince())


}
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>,
)
