import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600 underline" : ""
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