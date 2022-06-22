import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-white mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center shadow lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-blue-dark-seos cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={ () => setNavbarOpen(!navbarOpen) }
            >
            <FontAwesomeIcon className="w-[20px]" icon={ faBars }/>
            </button>
            <span
              className="text-sm font-bold leading-relaxed inline-block mx-[auto] py-2 whitespace-nowrap uppercase text-blue-dark-seos"
            >
              En tiempo real
            </span>
            <div className="bg-icon w-[30px] h-[30px] mx-[1rem]"></div>
          </div>
          <div
            className={"lg:flex flex-grow items-center" + ( navbarOpen ? "flex" : " hidden" )}
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
              <li className="nav-item border-t-[1px] border-t-gray">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-dark-seos hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-blue-dark-seos opacity-75"></i><span className="ml-2">En tiempo real</span>
                </a>
              </li>
              <li className="nav-item border-y-[1px] border-y-gray">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-dark-seos hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-blue-dark-seos opacity-75"></i><span className="ml-2">Consumo</span>
                </a>
              </li>
              <li className="nav-item border-b-[1px] border-b-gray">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-dark-seos hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-blue-dark-seos opacity-75"></i><span className="ml-2">Politica de datos</span>
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