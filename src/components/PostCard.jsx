import React from "react";

const PostCard = ({ title, content }) => {
  return (
    <div className="rounded-md border border-gray-300 shadow-sm overflow-hidden">
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-base">{content}</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Answer
        </button>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m0 0H8"
            />
          </svg>
          <span className="ml-2 text-sm text-gray-500">
            {content.length} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
