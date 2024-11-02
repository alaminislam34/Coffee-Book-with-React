import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div className="h-[82px]">
      <div className="w-10/12 mx-auto">
        <div className="navbar fixed top-0 left-0 bg-white/30 backdrop-blur-xl z-50 py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/coffees">Coffees</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className=" text-xl md:text-2xl font-bold pl-6">
              COFFEE_BOOK
            </Link>
          </div>
          <div className="navbar-end pr-6 hidden lg:flex">
            <ul className="flex flex-row gap-6 Active font-semibold menu-horizontal px-1">
              <li className="text-lg">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/coffees">Coffees</NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
