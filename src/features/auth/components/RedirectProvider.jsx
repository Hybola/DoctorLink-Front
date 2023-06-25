import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RedirectProvider({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const id = useSelector((state) => state.auth.user?.id)
    if (isAuthenticated) {
        return <Navigate to={`/provider/${id}/profile/`} />
    }
    return children
}
