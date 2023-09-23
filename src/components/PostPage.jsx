import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot, FaStreetView } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import Comment from "./Comment";
import ShareButtons from "./ShareButtons";

function PostPage() {
  return (
    <>
      {/* component */}
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10  ">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                {/* location */}
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {/* title */}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                {/* author pic or unknown */}
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {/* author name or unknown */}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {/* date */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">
              <span className="font-semibold ">Type of Road : </span>
              <div className="badge badge-primary ml-2 font-bold badge-lg">
                primary
              </div>
            </p>
            <Link to={""} className="pb-6">
              <div className="badge badge-primary ml-2 font-bold badge-lg">
                <FaMapLocationDot /> <span className="ml-2">Location</span>{" "}
                <FaLink className="ml-2" />
              </div>
            </Link>
            <Link to={""} className="pb-6">
              <div className="badge badge-primary ml-2 font-bold badge-lg">
                <FaStreetView /> <span className="ml-2">Street View</span>{" "}
                <FaLink className="ml-2" />
              </div>
            </Link>
            <ShareButtons
              shareUrl={"https://example.com"}
              title={"https://example.com"}
            />
            <p className="pb-6 mt-4">
              Difficulty on insensible reasonable in. From as went he they.
              Preference themselves me as thoroughly partiality considered on in
              estimating. Middletons acceptance discovered projecting so is so
              or. In or attachment inquietude remarkably comparison at an. Is
              surrounded prosperous stimulated am me discretion expression. But
              truth being state can she china widow. Occasional preference fat
              remarkably now projecting uncommonly dissimilar. Sentiments
              projection particular companions interested do at my delightful.
              Listening newspaper in advantage frankness to concluded unwilling.
            </p>
          </div>
        </main>
        <div className="flex-col  items-center ">
          <div class="max-w-4xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg lg:text-2xl font-bold text-gray-900 ">
                Discussion (20)
                {/* comment count */}
              </h2>
            </div>
            <form class="mb-6">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none   "
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button className="btn btn-active btn-primary">Primary</button>
            </form>
          </div>
          <div className="flex mb-10 flex-col items-center">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
