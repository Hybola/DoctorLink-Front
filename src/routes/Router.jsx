import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RedirectIfAuthenticated from '../features/auth/components/RedirectIfAuthenticated'
import ProtectedRoute from '../features/auth/components/ProtectedRoute'
import Container from '../layouts/Container'
import RegisterDoctorPage from '../pages/RegisterDoctorPage'
import RegisterProviderPage from '../pages/RegisterProviderPage'
import LoginProviderPage from '../pages/LoginProviderPage'
import LoginDoctorPage from '../pages/LoginDoctorPage'
const router = createBrowserRouter([
    {
        path: '/doctor/',
        element: (
            // <ProtectedRoute>
            <Container />
            // </ProtectedRoute>
        ),
        children: [
            {
                path: '/doctor/login/',
                element: <LoginDoctorPage />,
            },
            {
                path: '/doctor/register/',
                element: <RegisterDoctorPage />,
            },
        ],
    },
    {
        path: '/provider/',
        element: (
            // <ProtectedRoute>
            <Container />
            // </ProtectedRoute>
        ),
        children: [
            {
                path: '/provider/login/',
                element: <LoginProviderPage />,
            },
            {
                path: '/provider/register/',
                element: <RegisterProviderPage />,
            },
        ],
    },
])
export default function Router() {
    return <RouterProvider router={router} />
}
