import React from "react";
import { addDoc, serverTimestamp } from "@firebase/firestore";
//context
import { useUserAuth } from "../context/UserAuthContext";

// toastify
import { toast } from "react-toastify";

import Spinner from "./Spinner";

function CommentFrom({ collectionRef, userId, userName, userProfileUrl }) {
  const { user } = useUserAuth();

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");

  const addComment = async (e) => {
    toast.info("Adding comment...");
    e.preventDefault();
    debugger;
    if (!user) {
      toast.warning("Please login to add comment");
      debugger;
      return; // Or some loading state
    }
    debugger;

    if (!text) {
      toast.warning("Please enter comment");
      return;
    }
    try {
      await addDoc(collectionRef, {
        createdAt: serverTimestamp(),
        text: "comment",
        userName,
        userProfileUrl,
        userId: user?.uid,
      });

      toast.success("Comment added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onSubmit = async (e) => {
    window.scroll(0, 0);

    e.preventDefault();

    setLoading(true);
    // document.body.scrollIntoView()
  };

  return (
    // loading show loading
    // else show form

    loading ? (
      <Spinner />
    ) : (
      <form className="mb-6" onSubmit={addComment}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
          <label for="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none   "
            placeholder="Write a comment..."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="">
          Primary
        </button>
      </form>
    )
  );
}

export default CommentFrom;
