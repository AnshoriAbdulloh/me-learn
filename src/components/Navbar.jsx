import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ContactUs from "../assets/icon svg/headsetContactUs.svg";
import User from "../assets/icon svg/user.svg";
import Settings from "../assets/icon svg/settings.svg";
import Search from "../assets/icon svg/search.svg";
import NavBurger from "../assets/icon svg/navBurger.svg";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebar(false);
  }, [location.pathname]);

  const NavList = ({ awal, className }) => {
    return (
      <ul className={`${awal} ${className}`}>
        <li className={``}>
          <Link to={`Fakultas`} className={``}>
            Fakultas
          </Link>
        </li>
        <li>
          <Link to={`Jurusan`}>Jurusan</Link>
        </li>
        <li>
          <Link to={`Mahasiswa`}>Mahasiswa</Link>
        </li>
        <li>
          <Link to={`Kelas`}>Kelas</Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className={`fixed w-full flex flex-col bg-transparent z-10`}>
      <div
        className={`bg-white w-auto flex items-center py-2 px-4 font-samsung `}
      >
        <h1
          onClick={() => {
            if (window.innerWidth > 1024) return;
            setSidebar(!sidebar);
            // console.log(sidebar);
          }}
          className={`md:pr-8 md:pl-4 pr-4 text-2xl font-bold flex items-center cursor-pointer lg:cursor-auto`}
        >
          LOREM{" "}
          <img
            src={NavBurger}
            alt='navbar burger'
            className={`lg:hidden flex w-5 h-5 mx-2`}
          />
        </h1>
        <div
          className={`search relative group rounded-full bg-transparent w-[450px] h-[50px] sm:flex hidden items-center border border-transparent transition-all hover:bg-transparent mr-8`}
        >
          <input
            type='text'
            placeholder='What are you looking for?'
            className={`rounded-full w-full h-full pl-5 transition-all bg-gray-200 overflow-visible font-montserrat font-bold text-black text-sm outline-none border border-transparent group-hover:bg-transparent group-hover:border-amber-300 focus:bg-transparent focus:border-amber-300 placeholder-black`}
          />
          <img
            src={Search}
            alt='search'
            className={`absolute right-0 mr-[5px] w-10 h-10 rounded-full bg-amber-300 p-2 overflow-visible cursor-pointer`}
          />
        </div>
        <NavList
          awal={`hidden ml-auto shrink-1 lg:flex justify-between w-[400px] text-sm *:hover:opacity-40 `}
        />
        <div
          className={`services flex shrink-0 pl-8 ml-auto items-center gap-6 over *:cursor-pointer *:hover:opacity-40`}
        >
          <img src={ContactUs} alt='contact us' className={`w-5 h-5`} />
          <img src={Settings} alt='settings' className={`w-5 h-5`} />
          <img
            src={User}
            alt='user'
            className={`w-10 h-10 overflow-visible bg-amber-300 shrink-0 p-2.5 rounded-full`}
          />
        </div>
      </div>
      <div className={`relative`}>
        {" "}
        <div
          className={`${sidebar ? `h-screen` : `h-0`} absolute z-10 w-full transition-all duration-300 overflow-hidden bg-transparent `}
        >
          <div className={`bg-white border-t border-gray-300 pt-2`}>
            <NavList
              awal={``}
              className={`font-samsung text-sm px-3 pb-2 flex flex-col *:hover:bg-gray-300 *:rounded-md [&_li_a]:block [&_li_a]: *: *:py-1 *:pl-2`}
            />
          </div>
          <div
            onClick={() => setSidebar(false)}
            className={`bg-black w-full h-full opacity-35`}
          ></div>
        </div>
        <div className={`bg-white absolute w-full`}>
          {" "}
          <div
            className={`search relative group rounded-full bg-transparent w-auto h-[46px] sm:hidden flex items-center border border-transparent transition-all hover:bg-transparent mx-3 mb-2`}
          >
            <input
              type='text'
              placeholder='What are you looking for?'
              className={`rounded-full w-full h-full pl-5 transition-all bg-gray-200 overflow-visible font-montserrat font-bold text-black text-xs outline-none border border-transparent group-hover:bg-transparent group-hover:border-amber-300 focus:bg-transparent focus:border-amber-300`}
            />
            <img
              src={Search}
              alt='search'
              className={`absolute right-0 mr-1 w-9 h-9 rounded-full bg-amber-300 p-2 overflow-visible cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
