import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { Link} from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Latest = () => {
    const {latest} = useContext(AuthContext);
    console.log(latest);
    return (
        <div className='flex items-center gap-5 bg-[#F3F3F3] p-4 mb-7 pr-6 md:pr-16'>
            <p className='bg-[#D72050] text-white px-6 py-2 text-xl font-medium'>Latest</p>
            <Marquee className='font-semibold text-lg' pauseOnHover={true} speed={100}>
                {
                    latest?.map((news,idx)=> <Link className='mr-10' key={idx} to={`/news/${news._id}`}>{news?.title}</Link>)
                }            
            </Marquee>
        </div>
    );
};

export default Latest;