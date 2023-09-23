import React from "react";
import {
  addDoc,
  serverTimestamp,
  getCountFromServer,
} from "@firebase/firestore";
//context
import { useUserAuth } from "../context/UserAuthContext";

// toastify
import { toast } from "react-toastify";

import Spinner from "./Spinner";

function CommentFrom({ collectionRef, userName, userProfileUrl }) {
  const { user } = useUserAuth();

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");
  const [count, setCount] = React.useState(0);

  const fetchCollectionSize = async () => {
    // Get the size of the collection
    const snapshot = await getCountFromServer(collectionRef);

    if (snapshot.data().count) {
      setCount(snapshot.data().count);
    }
  };

  React.useEffect(() => {}, []);

  const addComment = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!user) {
      toast.warning("Please login to add comment");
      setLoading(false);
      return; // Or some loading state
    }

    if (!text) {
      toast.warning("Please enter comment");
      setLoading(false);
      return;
    }
    try {
      addDoc(collectionRef, {
        createdAt: serverTimestamp(),
        text,
        userName,
        userProfileUrl,
        //userId: user?.uid,
      });
      setText("");

      toast.success("Comment added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <form className="mb-6" onSubmit={(e) => addComment(e)}>
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
          value={text}
        ></textarea>
      </div>

      <button onClick={addComment} className="btn btn-active btn-primary">
        Post
      </button>
    </form>
  );
}

export default CommentFrom;
