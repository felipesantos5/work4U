import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
