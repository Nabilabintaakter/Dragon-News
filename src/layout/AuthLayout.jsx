import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
    return (
        <div className=' bg-[#F3F3F3]'>
            <section className='container mx-auto'>
            <Toaster />
                <header className='pt-4 pb-10'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;