import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuthenticated({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return children
}
