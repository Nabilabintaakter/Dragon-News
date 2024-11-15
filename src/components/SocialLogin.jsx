import { FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SocialLogin = () => {
    return (
        <div className="">
            <h2 className='text-[#403F3F] text-xl font-semibold mb-5'> Login With</h2>
            <div className='w-full space-y-2'>
                <NavLink className='flex btn w-full bg-white border-[1px] hover:bg-[#4371BD] hover:text-white border-[#4371BD] text-[#4371BD]'><FaGoogle></FaGoogle>Login with Google</NavLink>
                <NavLink className='flex btn w-full bg-white border-[1px] hover:bg-black hover:text-white border-gray-500'><FaGithub></FaGithub>Login with Github</NavLink>
            </div>
        </div>
    );
};

export default SocialLogin;