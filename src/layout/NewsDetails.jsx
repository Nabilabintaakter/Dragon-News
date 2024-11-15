import { IoIosArrowBack } from "react-icons/io";
import Header from '../components/Header';
import RightNavbar from '../components/layoutComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';
// {
//     "_id": "f69a695f037cd9484cecaea37ca71011",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "01",
//     "rating": {
//         "number": 4.8,
//         "badge": "Excellent"
//     },
//     "total_view": 400,
//     "title": "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine",
//     "author": {
//         "name": "Jennifer Wood",
//         "published_date": "2022-08-30 16:38:45",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
//     "image_url": "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png",
//     "details": "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."
// }
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