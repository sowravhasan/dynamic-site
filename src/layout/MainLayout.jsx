import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
             <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;