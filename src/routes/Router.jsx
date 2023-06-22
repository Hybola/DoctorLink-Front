import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from '../features/auth/components/ProtectedRoute'
import Container from '../layouts/Container'
import RegisterDoctorPage from '../pages/RegisterDoctorPage'
import RegisterProviderPage from '../pages/RegisterProviderPage'
import LoginProviderPage from '../pages/LoginProviderPage'
import LoginDoctorPage from '../pages/LoginDoctorPage'
import HomePage from '../pages/HomePage'
import { Outlet } from 'react-router-dom'
import Profile from '../pages/ProfilePage'
import RedirectProvider from '../features/auth/components/RedirectProvider'
import RedirectDoctor from '../features/auth/components/RedirectDoctor'
import Addpost from '../pages/Addpost'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/doctor/',
                element: <Outlet />,
                children: [
                    {
                        path: '/doctor/login/',
                        element: (
                            <RedirectDoctor>
                                <LoginDoctorPage />
                            </RedirectDoctor>
                        ),
                    },
                    {
                        path: '/doctor/register/',
                        element: (
                            <RedirectDoctor>
                                <RegisterDoctorPage />
                            </RedirectDoctor>
                        ),
                    },
                    {
                        path: '/doctor/',
                        element: (
                            <ProtectedRoute>
                                <Outlet />
                            </ProtectedRoute>
                        ),
                        children: [
                            {
                                path: '/doctor/profile/',
                                element: <Profile />,
                            },
                        ],
                    },
                ],
            },

            {
                path: '/provider/',
                element: <Outlet />,
                children: [
                    {
                        path: '/provider/login/',
                        element: (
                            <RedirectProvider>
                                <LoginProviderPage />
                            </RedirectProvider>
                        ),
                    },
                    {
                        path: '/provider/register/',
                        element: (
                            <RedirectProvider>
                                <RegisterProviderPage />
                            </RedirectProvider>
                        ),
                    },
                    {
                        path: '/provider/',
                        element: (
                            <ProtectedRoute>
                                <Outlet />
                            </ProtectedRoute>
                        ),
                        children: [
                            {
                                path: '/provider/profile/',
                                element: <Profile />,
                            },
                            {
                                path: '/provider/addpost/',
                                element: <Addpost />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
])
export default function Router() {
    return <RouterProvider router={router} />
}
