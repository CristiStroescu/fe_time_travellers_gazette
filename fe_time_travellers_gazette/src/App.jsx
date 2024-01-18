import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/footer/Footer";
import Homepage from "./components/pages/homepage/Homepage";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  ABOUT,
  CONTACT,
  HOMEPAGE,
  SIGNUP,
  LOGIN,
  MOST_VIEWED,
} from "./constants/routes";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import PrivateRoute from "./utils/PrivateRoute";
import Article from "./components/pages/article/Article";
import MostViewed from "./components/pages/mostViewed/MostViewed";

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
                  <Article />
                </PrivateRoute>
              }
            />
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
            <Route
              path={MOST_VIEWED}
              element={
                <PrivateRoute>
                  <MostViewed />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to={HOMEPAGE} />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
