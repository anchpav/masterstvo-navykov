import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ title, img, desc, link }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group flex flex-col"
      onClick={() => navigate(link)}
    >
      {img && (
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {desc}
        </p>
        <button
          className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={(e) => {
            e.stopPropagation();
            navigate(link);
          }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}
