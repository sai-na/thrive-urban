import React from "react";
import { FaHeart } from "react-icons/fa6";

function Comment({
  userName,
  userProfileUrl,
  jsDate,
  text,
  likes,
  docId,
  // handleLikes,
}) {
  return (
    <article className="p-6 text-base mb-2  mx-4 max-w-4xl md:max-w-4xl rounded-xl  bg-gray-200 ">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
            <img
              className="mr-2 w-8 h-8 rounded-full"
              src={
                userProfileUrl ||
                "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              }
              alt="Michael Gough"
            />
            {userName && userName}
          </p>
          <p className="text-sm text-gray-900 ">
            <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
              {jsDate && jsDate?.toDateString()}
            </time>
          </p>
        </div>
      </footer>
      <p className="text-gray-900 ">
        {text && text}
        {/* <span className="text-xs text-gray-900 ml-2">Read more</span> */}
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          //onClick={handleLikes(docId)}
          className="flex items-center text-sm text-gray-900 hover:underline  font-medium"
        >
          <FaHeart className="mr-2" /> {likes && likes} Likes
        </button>
        <button
          type="button"
          className="flex items-center text-sm text-gray-900 hover:underline  font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}

export default Comment;
