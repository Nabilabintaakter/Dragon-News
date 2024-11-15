
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Latest from '../components/Latest';
import LeftNavbar from '../components/layoutComponents/LeftNavbar';
import RightNavbar from '../components/layoutComponents/RightNavbar';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='container mx-auto font-poppins'>
            <header>
                <Header></Header>
                <Latest></Latest>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='pt-6 grid  md:grid-cols-12 gap-6'>
                <aside className='left md:col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='md:col-span-6'><Outlet></Outlet>
                </section>
                <aside className='md:col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;