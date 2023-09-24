import React from "react";
import {
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  query,
  onSnapshot,
  where,
  orderBy,
} from "@firebase/firestore";
//context
import { useUserAuth } from "../context/UserAuthContext";

import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function PostList() {
  const { user } = useUserAuth();
  const [data, setData] = React.useState([]);

  const collectionRef = collection(db, "posts");

  const q = query(collectionRef, where("postPublicly", "==", true));

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(q);
      const documents = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        DocId: doc.id,
      }));
      setData(documents);
    } catch (e) {
      toast.error("sss");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full  md:mt-10 px-4">
          <div className="text-center mx-auto md:mb-[60px] lg:mb-20 max-w-[510px]">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              Road Damages
            </h2>

            <div className="flex mb-10 justify-center items-center">
              {data.map((item, index) => (
                <Link to={`/post/${item.DocId}`}>
                  <PostCard
                    key={index}
                    city={item.city}
                    jsDate={new Date(item?.createdAt?.seconds * 1000)}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    currentStep={item.currentStep}
                    DocId={item.DocId}
                    upVotes={item.upVotes}
                    damageType={item.damageType}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
