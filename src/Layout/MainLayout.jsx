import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;