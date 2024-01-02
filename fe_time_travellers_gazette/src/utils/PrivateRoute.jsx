import { Navigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";
import { AuthService } from "../services/authService";

const PrivateRoute = ({ children }) => {
  const loggedIn = AuthService.isLoggedIn();
  console.log(loggedIn);
  if (!loggedIn) {
    return <Navigate to={LOGIN} replace />;
  }
  return children;
};

export default PrivateRoute;
