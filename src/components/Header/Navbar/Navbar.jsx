import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
    return (
      <div className='z-[100]'>
        <nav className='xl:flex justify-between items-center  xl:pt-[40px] xl:w-[1280px] m-auto text-center '>
          <Logo></Logo>
          <ul className='flex justify-center mt-3 gap-8 text-xl z-[10]'>
            <li className='z-[10]'>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium border-b-[3px] border-[#FF444A]" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className='z-[10]'>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] font-medium border-b-[3px] border-[#FF444A]" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            
            <li className='z-[10]'>
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