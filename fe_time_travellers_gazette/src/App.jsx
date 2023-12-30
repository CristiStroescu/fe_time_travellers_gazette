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
import { ABOUT, CONTACT, HOMEPAGE } from "./constants/routes";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path={HOMEPAGE} element={<Homepage />}>
            <Route path={HOMEPAGE} element={<Home />} />
            <Route path="/:id" element={<Home />} />
          </Route>
          <Route path={ABOUT} element={<About />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path="*" element={<Navigate to={HOMEPAGE} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
