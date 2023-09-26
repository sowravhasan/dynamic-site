import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
    return (
      <div>
        <nav className='flex justify-between items-center py-[40px]'>
          <Logo></Logo>
          <ul className='flex gap-6 text-xl'>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium underline" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium underline" : ""
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