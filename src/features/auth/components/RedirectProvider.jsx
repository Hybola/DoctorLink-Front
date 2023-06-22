import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectProvider({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) {
    return <Navigate to="/provider/profile/" />;
  }
  return children;
}
