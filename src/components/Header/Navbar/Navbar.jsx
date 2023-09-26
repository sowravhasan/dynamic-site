import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
    return (
      <div>
        <nav className='flex justify-between items-center pt-[40px] w-[1280px] m-auto'>
          <Logo></Logo>
          <ul className='flex gap-8 text-xl z-30'>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium border-b-[3px] border-[#FF444A]" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium border-b-[3px] border-[#FF444A]" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium border-b-[3px] border-[#FF444A]" : ""
                }
              >
                Statistics
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    );
};

export default Navbar;