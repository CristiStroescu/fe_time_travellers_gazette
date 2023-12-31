import { Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

const PrivateRoutes = ({ children }) => {
  const loggedIn = true;

  if (!loggedIn) {
    return <Navigate to={LOGIN} replace />;
  }
  return children;
};

export default PrivateRoutes;
