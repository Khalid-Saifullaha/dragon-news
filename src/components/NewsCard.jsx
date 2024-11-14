import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-3">
          <h2 className="text-sm font-semibold">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex space-x-3">
          <CiBookmark />

          <FaShareAlt className="text-gray-600"></FaShareAlt>
        </div>
      </div>
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{news.title}</h3>
        <p className="text-xs text-gray-500 mt-2">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States
        </p>
        <p className="text-sm text-gray-700 mt-2">
          {news.details.slice(0, 100)}...
        </p>
        <a href="#" className="text-blue-500 font-semibold mt-3 inline-block">
          Read More
        </a>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-t">
        <div className="flex items-center">
          <AiOutlineStar className="text-yellow-500 mr-1" />
          <span className="text-sm font-semibold">{news.rating.number}</span>
          <span className="text-xs text-gray-500 ml-1">
            {news.rating.badge}
          </span>
        </div>
        <div className="flex items-center">
          <FaRegEye className="text-gray-500 mr-1" />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
