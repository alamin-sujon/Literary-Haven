import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar bg-base-100 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Listed Books</NavLink>
            <NavLink to="/read">Pages to Read</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Literary Haven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 items-center">
          <NavLink className={"text-lg"} to="/">
            Home
          </NavLink>
          <NavLink className={"text-lg"} to="/list">
            Listed Books
          </NavLink>
          <NavLink className={"text-lg"} to="/read">
            Pages to Read
          </NavLink>
          <NavLink className={"text-lg"} to="/blog">
            Blog
          </NavLink>
          <NavLink className={"text-lg"} to="/about">
            About Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-[#23BE0A] text-white text-lg font-semibold">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] text-white text-lg font-semibold">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Nav;
