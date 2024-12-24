import { Link, NavLink } from "react-router-dom";
import { assets } from "./../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link>
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile_icon"
            className="w-5 cursor-pointer"
          />
          <div className="hidden group-hover:block absolute drop-down-menu right-0 pt-4">
            <div className="flex flex-col gap-2 py-3 px-5 w-36 bg-slate-100 text-gray-700 rounded">
              <p className="hover:text-black cursor-pointer">My profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart_icon" className="w-5 min-w-5"/>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">0</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu_icon" className="w-5 cursor-pointer sm:hidden" />
      </div>
      {/* navmenu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} alt="dropdown_icon" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border">HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/collections" className="py-2 pl-6 border">COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/about" className="py-2 pl-6 border">ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-6 border">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
