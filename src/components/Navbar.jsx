import React from "react";
import { Home, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="p-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        
        {/* Logo */}
        <a href="#" className="flex items-center p-2">
          <Home className="w-8 h-8 text-violet-500" />
        </a>

        {/* Menu Links */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a href="/home" className="flex items-center px-4">Home</a>
          </li>
          <li className="flex">
            <a href="/allProducts" className="flex items-center px-4">ALLProducts</a>
          </li>
          <li className="flex">
            <a href="/addProducts" className="flex items-center px-4">AddProducts</a>
          </li>
          <li className="flex">
            <a href="/allUsers" className="flex items-center px-4">AllUser</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          <button className="px-8 py-3 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-100">
            Sign in
          </button>
          <button className="px-8 py-3 rounded bg-violet-600 text-white">
            Sign up
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="p-4 lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
