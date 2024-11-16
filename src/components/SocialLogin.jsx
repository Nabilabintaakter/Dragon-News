import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
    const {LoginWithGoogle,LoginWithGithub} = useContext(AuthContext);
    return (
        <div className="">
            <h2 className='text-[#403F3F] text-xl font-semibold mb-5'> Login With</h2>
            <div className='w-full space-y-2'>
                <NavLink onClick={LoginWithGoogle} className='flex items-center btn w-full bg-white border-[1px] hover:bg-[#4371BD] hover:text-white border-[#4371BD] text-[#4371BD] text-base md:text-xs lg:text-base'><FaGoogle className="text-base md:text-xs lg:text-base"></FaGoogle>Login with Google</NavLink>
                <NavLink onClick={LoginWithGithub} className='flex items-center btn w-full bg-white border-[1px] hover:bg-black hover:text-white border-gray-500 text-base md:text-xs lg:text-base'><FaGithub className="text-sm md:text-xs lg:text-sm"></FaGithub>Login with Github</NavLink>
            </div>
        </div>
    );
};

export default SocialLogin;