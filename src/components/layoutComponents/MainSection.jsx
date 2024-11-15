import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const MainSection = () => {
    const {data : news} = useLoaderData()
    return (
        <div>
           <h2 className='text-[#403F3F] text-xl font-semibold mb-3 px-4 md:px-0'>Dragon News Home</h2>
           <h1 className='text-gray-400 text-sm mb-5 px-4 md:px-0'>{news.length} news found on this category</h1>
           <div className='space-y-7 mb-5 px-4 md:px-0'>
            {
                news.map((singleNews,idx) => <NewsCard key={idx} news={singleNews}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default MainSection;