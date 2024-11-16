import { useContext } from 'react';
import userImage from '../assets/user.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-between items-center font-poppins px-4 md:px-0'>
            <div >
                <p className='font-medium text-lg'>{user?.email}</p>
            </div>
            <div className='space-x-2 text-lg text-[#706F6F]'>
                <NavLink className='nav px-2 md:px-4 py-2 hover:bg-[#E7E7E7] rounded-lg' to='/'>Home</NavLink>
                <NavLink className='nav px-2 md:px-4 py-2 hover:bg-[#E7E7E7] rounded-lg' to='/about'>About</NavLink>
                <NavLink className='nav px-2 md:px-4 py-2 hover:bg-[#E7E7E7] rounded-lg' to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                {
                    user && user.displayName ? 
                    <div>
                        <img className='w-14 h-14 object-cover rounded-full mb-2' src={user?.photoURL} alt="" />
                        <p className='text-lg font-semibold'>{user?.displayName}</p>
                    </div> : 
                    <div><img src={userImage} alt="" /></div>
                }
                {
                    user && user.displayName ? <button onClick={logOut} className='px-4 md:px-10 py-1 btn bg-[#403F3F] text-white text-xl font-semibold rounded-none'>Log Out</button> :
                        <NavLink to='/auth/login' className='px-4 md:px-10 py-1 btn bg-[#403F3F] text-white text-xl font-semibold rounded-none'>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;