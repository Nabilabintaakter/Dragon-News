import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='mt-8 mb-4 flex flex-col justify-center items-center font-poppins'>
             <div className='w-[350px] md:w-[470px] mb-3'><img src={logo} alt="" /></div>
             <p className='text-gray-400 text-lg mb-2'>Journalism Without Fear or Favour</p>
             <p className='text-lg font-medium text-gray-500'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;