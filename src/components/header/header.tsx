import { BiSolidUserCircle } from "react-icons/bi";

import logo from "../../img/w4u-logo.png";

export const Header = () => {
  return (
    <header className="">
      <section className="flex justify-between items-center max-w-7xl m-auto py-4">
        <img src={logo} alt="logo" className="w-44" />
        <nav className="flex gap-5 items-center">
          <p>header</p>
          <div className="flex items-center gap-2">
            <BiSolidUserCircle size={30} />
            <p>name</p>
          </div>
        </nav>
      </section>
    </header>
  );
};
