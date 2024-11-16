import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router-dom';

const Latest = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='flex items-center gap-5 bg-[#F3F3F3] p-4 mb-7 pr-6 md:pr-16'>
            <p className='bg-[#D72050] text-white px-6 py-2 text-xl font-medium'>Latest</p>
            <Marquee className='space-x-16 font-semibold text-lg' pauseOnHover={true} speed={100}>            
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, similique?</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, similique?</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, similique?</Link>
            </Marquee>
        </div>
    );
};

export default Latest;