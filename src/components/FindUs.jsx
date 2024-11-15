import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className='mt-8 mb-5'>
            <h2 className='text-[#403F3F] text-xl font-semibold mb-5'> Find Us On</h2>
            <div className="join join-vertical w-full *:bg-base-100 border-[1px] border-gray-100 rounded-[5px]">
                <button className="btn join-item justify-start pl-6 text-[#706F6F] font-medium"><div className="bg-gray-200 p-2 rounded-full"><TfiFacebook className="text-blue-500 text-xs" /></div>Facebook</button>
                <button className="btn join-item justify-start pl-6 text-[#706F6F] font-medium"><div className="bg-gray-200 p-2 rounded-full"><FaTwitter className="text-blue-500 text-xs"></FaTwitter></div>Twitter</button>
                <button className="btn join-item justify-start pl-6 text-[#706F6F] font-medium"><div className="bg-gray-200 p-2 rounded-full"><img width="16" height="16" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></div>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;