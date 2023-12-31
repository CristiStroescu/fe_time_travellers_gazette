import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ABOUT, CONTACT, HOMEPAGE, SIGNUP, LOGIN } from "./constants/routes";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={LOGIN} element={<Login />} />

          <Route
            path={HOMEPAGE}
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          >
            <Route
              path={HOMEPAGE}
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/:id"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={ABOUT}
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path={CONTACT}
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to={HOMEPAGE} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
