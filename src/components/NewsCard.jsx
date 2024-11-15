
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const NewsCard = (props = {}) => {

    const { news } = props || {};

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F3F3F3] mb-3">
                <div className="flex items-center space-x-2">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={news.author.img}
                        alt="author"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">{news.author.name}</p>
                        <p className="text-xs text-gray-400">{news.author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaBookmark className="text-gray-500 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-5">
                <h2 className="text-xl font-bold text-[#403F3F] mb-2">
                    {news.title}
                </h2>
            </div>

            {/* Thumbnail */}
            <img
                className="w-full h-[262px] object-cover px-5"
                src={news.thumbnail_url}
                alt="thumbnail"
            />

            {/* Details */}
            <div className="px-5 pt-4">
                <p className="text-sm text-[#888787]">
                    {news.details.slice(0, 150)}...{" "}
                    <span className="text-[#FF8C47] cursor-pointer ml-1 font-semibold">Read More</span>
                </p>
            </div>

            {/* Divider */}
            <div className="divider px-5"></div>

            {/* Footer */}
            <div className="px-5 pb-3 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[#FF8C47]">
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <span className="text-sm font-semibold text-gray-700">{news.rating.number}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
