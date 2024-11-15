import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className=' bg-[#F3F3F3]'>
            <section className='container mx-auto'>
                <header className='pt-4 pb-10'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;