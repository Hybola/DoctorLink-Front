import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/auth-components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/auth-components/ProtectedRoute";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //   <ProtectedRoute>
      <Container />
      //   </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
