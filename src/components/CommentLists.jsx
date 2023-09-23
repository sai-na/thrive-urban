import React from "react";
import {
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
} from "@firebase/firestore";
//context
import { useUserAuth } from "../context/UserAuthContext";

import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";

import Spinner from "./Spinner";
import Comment from "./Comment";

function CommentLists({ collectionRef }) {
  const { user } = useUserAuth();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collectionRef,
      (querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          DocId: doc.id,
        }));
        setData(documents);
      },
      (e) => {
        toast.error("Comment is not loading");
      }
    );
  });

  const handleLikes = (docId) => {
    if (!user) {
      toast.warning("hi");

      return; // Or some loading state
    }
    //  likePost(docId, user?.uid);
  };

  //   // Assuming postID is the unique identifier of the item
  //   const likePost = async (postID, userID) => {
  //     const postRef = doc(db, "posts", postID);
  //     const likesRef = collection(postRef, "likes");

  //     const likesDoc = await getDoc(likesRef);

  //     if (!likesDoc.exists()) {
  //       // User hasn't liked the post, add a new like
  //       await setDoc(doc(likesRef, userID), { liked: true });
  //     } else {
  //       // User has already liked the post
  //       console.log("User already liked this post");
  //     }
  //   };

  return (
    <div className="flex mb-10 flex-col items-center">
      {data.map((item, index) => (
        <Comment
          key={index}
          jsDate={new Date(item?.createdAt?.seconds * 1000)}
          userProfileUrl={item.userProfileUrl}
          DocId={item.DocId}
          likes={item.likes}
          userName={item.userName}
          text={item.text}
          handleLikes={handleLikes}
        />
      ))}
    </div>
  );
}

export default CommentLists;
