import { IoIosArrowBack } from "react-icons/io";
import Header from '../components/Header';
import RightNavbar from '../components/layoutComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const {data} = useLoaderData();
    const news = data[0]
    const {thumbnail_url,title,details } = news || {}

    return (
        <div className='container mx-auto font-poppins'>
            <header className='mb-10'>
                <Header></Header>
            </header>
            <main className='grid md:grid-cols-12 gap-5 px-4 md:px-0'>
                <section className='md:col-span-9'>
                <h2 className='text-[#403F3F] text-xl font-semibold mb-3 px-4 md:px-0'>Dragon News Home</h2>
                <div className='p-4 md:p-7 border-[1px] border-[#E7E7E7] rounded-[5px]'>
                    <div ><img className='w-full h-auto md:h-[600px] object-contain mb-4' src={thumbnail_url} alt="thumbnail" /></div>
                    <h1 className='text-[#403F3F] font-bold text-2xl mb-2'>{title}</h1>
                    <p className='text-[#706F6F] mb-10'>{details}</p>
                    <Link to={`/category/${news?.category_id}`} className="w-fit flex gap-2 bg-[#D72050] btn rounded-none text-white"><IoIosArrowBack />All news in this category</Link>
                </div>
                </section>
                <section className='md:col-span-3'>
                    <RightNavbar></RightNavbar>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;