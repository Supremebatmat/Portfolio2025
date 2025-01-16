import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
