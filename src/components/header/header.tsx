import { BiSolidUserCircle } from "react-icons/bi";
import logo from "../../img/w4u-logo.png";
import { Link } from "react-router-dom";

// const handleLogout = () => {
//   setUser(null);
// };

export const Header = () => {
  return (
    <header className="">
      <section className="flex justify-between items-center max-w-7xl m-auto py-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        <nav className="flex gap-6 items-center text-lg">
          <Link to={"/"}>home</Link>
          <Link to={"/register"}>registro</Link>
          <Link to={"/login"}>login</Link>

          <Link className="flex items-center gap-2" to={"/profile"}>
            <BiSolidUserCircle size={30} />
            <p>name</p>
          </Link>
        </nav>
      </section>
    </header>
  );
};
