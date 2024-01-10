import { Outlet } from "react-router-dom";
import Header from "../../common/header/Header";

function Homepage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Homepage;
