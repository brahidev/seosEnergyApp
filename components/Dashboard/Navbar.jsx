import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCalendarDays, faChartLine, faLock, faAngleRight} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between">
        <div className="container mx-auto flex flex-wrap items-center justify-between bg-white z-10">
          <div className="w-full relative flex justify-between items-center shadow lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-blue-dark-seos cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FontAwesomeIcon className="w-[20px]" icon={(navbarOpen ? faXmark : faBars)}/>
            </button>
            <span
              className="text-sm font-bold leading-relaxed inline-block mx-[auto] py-2 whitespace-nowrap uppercase text-blue-dark-seos"
            >
              En tiempo real
            </span>
            <div className="bg-icon w-[30px] h-[30px] mx-[1rem]"></div>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${(navbarOpen ? " flex" : " hidden")}`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col w-[100%] lg:flex-row list-none lg:ml-auto">
              <li className="nav-item flex justify-center my-[1rem]">
                    <div className="bg-icon w-[70px] h-[70px] mx-[1rem]"></div>
                    <div className="flex flex-col mx-[1rem]">
                        <span className="text-lg font-bold text-blue-dark-seos">Nombre de usuario</span>
                        <span className="text-xs font-bold text-blue-dark-seos italic">Bogotá</span>
                        <span className="text-lg font-bold text-blue-dark-seos">Colombia</span>
                    </div>
              </li>
              <li className="nav-item border-t-[1px] border-t-gray active:bg-blue-seos">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-9 text-blue-dark-seos hover:opacity-75 active:text-white"
                  href="#pablo"
                >
                   <FontAwesomeIcon className="w-[15px] text-blue-seos" icon={(faCalendarDays)}/>
                   <span className="ml-2">En tiempo real</span>
                   <FontAwesomeIcon className="w-[10px] right-0 absolute mr-[1rem] text-blue-dark-seos active:text-white" icon={(faAngleRight)}/>
                </a>
              </li>
              <li className="nav-item border-y-[1px] border-y-gray active:bg-blue-seos">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-9 text-blue-dark-seos hover:opacity-75 active:text-white"
                  href="#pablo"
                >
                  <FontAwesomeIcon className="w-[15px] text-blue-seos" icon={(faChartLine)}/>
                  <span className="ml-2">Consumo</span>
                  <FontAwesomeIcon className="w-[10px] right-0 absolute mr-[1rem] text-blue-dark-seos active:text-white" icon={(faAngleRight)}/>
                </a>
              </li>
              <li className="nav-item border-b-[1px] border-b-gray active:bg-blue-seos">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-9 text-blue-dark-seos hover:opacity-75 active:text-white"
                  href="#pablo"
                >
                  <FontAwesomeIcon className="w-[15px] text-blue-seos" icon={(faLock)}/>
                  <span className="ml-2">Politica de datos</span>
                  <FontAwesomeIcon className="w-[10px] right-0 absolute mr-[1rem] text-blue-dark-seos active:text-white" icon={(faAngleRight)}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;