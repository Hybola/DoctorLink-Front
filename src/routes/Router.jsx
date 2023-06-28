import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from '../features/auth/components/ProtectedRoute'
import Container from '../layouts/Container'
import RegisterDoctorPage from '../pages/RegisterDoctorPage'
import RegisterProviderPage from '../pages/RegisterProviderPage'
import LoginProviderPage from '../pages/LoginProviderPage'
import LoginDoctorPage from '../pages/LoginDoctorPage'
import HomePage from '../pages/HomePage'
import FollowedPage from '../pages/FollowedPage'
import MyJobPage from '../pages/MyJobPage'
import { Outlet } from 'react-router-dom'
import DoctorProfile from '../pages/DoctorProfilePage'
import ProviderProfile from '../pages/ProviderProfilePage'
import RedirectProvider from '../features/auth/components/RedirectProvider'
import RedirectDoctor from '../features/auth/components/RedirectDoctor'
import Addpost from '../pages/Addpost'
import History from '../pages/HistoryPage'
import ChatPage from '../pages/ChatPage'
import ProviderChat from '../features/chat/providerChat'
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
                                path: '/doctor/:id/profile/',
                                element: <DoctorProfile />,
                            },
                            {
                                path: '/doctor/followed/',
                                element: <FollowedPage />,
                            },
                            {
                                path: '/doctor/myjob/',
                                element: <MyJobPage />,
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
                                path: '/provider/:id/profile/',
                                element: <ProviderProfile />,
                            },
                            {
                                path: '/provider/addpost/',
                                element: <Addpost />,
                            },
                            {
                                path: '/provider/history/',
                                element: <History />,
                            },
                            {
                                path: '/provider/chat/',
                                element: <ProviderChat />,
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
