import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setShowMenu(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-40" />
      </Link>

      {/* Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />

        {/* Profile */}
        <div className="group relative">
          <img
            onClick={(e) => {
              e.stopPropagation();
              if (token) setShowMenu(!showMenu);
              else navigate("/login");
            }}
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />

          {/* Dropdown Menu */}
          {token && (
            <div
              className={`absolute right-0 pt-4 ${
                showMenu ? "block" : "hidden"
              } group-hover:block`}
            >
              <div className="flex flex-col w-36 gap-2 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => {
                    navigate("/orders");
                    setShowMenu(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center w-4 leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* SideBar Menu for small screen */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 ease-in-out
       ${
         visible
           ? "translate-x-0 w-64 opacity-100"
           : "translate-x-full w-64 opacity-0 pointer-events-none"
       }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="back"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-gray-100"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-gray-100"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-gray-100"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 hover:bg-gray-100"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
