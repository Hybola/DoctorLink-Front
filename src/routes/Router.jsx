import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import RedirectIfAuthenticated from "../features/auth/auth-components/RedirectIfAuthenticated";
// import ProtectedRoute from "../features/auth/auth-components/ProtectedRoute";
import Container from '../layouts/Container'
// import HomePage from "../pages/HomePage";
import ProfilePage from '../pages/ProfilePage'
import FollowedPage from '../pages/FollowedPage'
import SavedJobPage from '../pages/SavedJobPage'
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            //   <ProtectedRoute>
            <Container />
            //   </ProtectedRoute>
        ),
        children: [
            // {
            //   path: "/",
            //   element: <HomePage />,
            // },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
            {
                path: '/followed',
                element: <FollowedPage />,
            },
            {
                path: '/savedjob',
                element: <SavedJobPage />,
            },
            // {
            //   path: "/addpost",
            //   element: <AddPostPage />,
            // },
            // {
            //   path: "/login",
            //   element: <LogInPage />,
            // },
            // {
            //   path: "/register",
            //   element: <RegisterPage />,
            // },
            // {
            //   path: "/history",
            //   element: <HistoryPage />,
            // },
        ],
    },
])
export default function Router() {
    return <RouterProvider router={router} />
}
