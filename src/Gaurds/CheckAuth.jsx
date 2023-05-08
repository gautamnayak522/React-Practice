import { Navigate } from "react-router-dom";

export function CheckAuth({ children }) {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    //LoginService.logout();
    return <Navigate to="/"></Navigate>;
  }
}