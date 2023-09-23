import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMapLocationDot, FaStreetView } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { TbBrandDaysCounter } from "react-icons/tb";
import Comment from "./Comment";
import ShareButtons from "./ShareButtons";

import { db } from "../firebase.config";

import {
  getDoc,
  doc,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import CommentFrom from "./CommentFrom";
import CommentLists from "./CommentLists";

function PostPage() {
  const stepsName = [
    "Not Started",
    "Review",
    "Under Review",
    "Sanctioned",
    "Work Ongoing",
    "Completed",
  ];
  const [data, setData] = useState({});
  const [jsDate, setJsDate] = useState();
  const date2 = new Date();
  // Calculate the time difference
  const timeDifference = Math.abs(date2 - jsDate);

  // Convert time difference to days
  const differenceInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const { id } = useParams();

  const [highlightedSteps, setHighlightedSteps] = useState(1);

  const [count, setCount] = React.useState(0);

  const {
    createdAt,
    damageType,
    description,
    imgUrl,
    location,
    city,
    roadType,
    streetViewUrl,
    userId,
    userName,
    userProfileUrl,
    title,
  } = data;

  const collectionRef = collection(db, `posts/${id}/comments`);

  const fetchCollectionSize = async () => {
    // Get the size of the collection
    const snapshot = await getCountFromServer(collectionRef);

    if (snapshot.data().count) {
      setCount(snapshot.data().count);
    }
  };

  const fetchdata = async (collectionName, docId, stateName) => {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      stateName({ ...docSnap.data(), DocId: docSnap.id });
      console.log("Document data:", docSnap.data());
      setHighlightedSteps(docSnap.data()?.currentStep || 1);

      setJsDate(new Date(docSnap.data()?.createdAt?.seconds * 1000));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    document.body.scrollIntoView();
    fetchdata("posts", id, setData);
  }, []);

  function generateSteps(stepCount, highlightedSteps) {
    const steps = [];
    for (let i = 0; i < stepCount; i++) {
      const isPrimary = i < highlightedSteps;
      steps.push(
        <li className={`step ${isPrimary ? "step-primary" : ""}`} key={i}>
          {stepsName[i]}
        </li>
      );
    }
    return steps;
  }
  const stepCount = stepsName.length; // Total number of steps

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
              src={imgUrl}
              className="absolute rounded-xl left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              {city && (
                <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  {/* city */} <ImLocation2 className="mr-2" /> {city}
                </span>
              )}

              {title && (
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  {/* title */}
                  {title}
                </h2>
              )}
              <div className="flex mt-3">
                <img
                  src={userProfileUrl || "https://i.pravatar.cc/300"}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                {/* author pic or unknown */}
                <div>
                  {userName && (
                    <p className="font-semibold text-gray-200 text-sm">
                      {userName}
                    </p>
                  )}
                  <p className="font-semibold text-gray-400 text-xs">
                    {/* date */} {jsDate?.toDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 absolute bottom-0 right-0 z-20">
              {city && (
                <span className="px-4 py-1 bg-red-500 rounded-xl text-2xl text-gray-200 inline-flex items-center justify-center mb-2">
                  {/* city */} <TbBrandDaysCounter className="mr-2" />{" "}
                  {differenceInDays} Days
                </span>
              )}
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">
              <span className="font-semibold ">Type of Road : </span>
              <span className=" ml-2 font-bold font-lg">primary</span>
            </p>

            <p className="pb-6">
              <span className="font-semibold ">Type Damage : </span>
              <span className=" ml-2 font-bold font-lg">
                {" "}
                {/* damage type */} {damageType}
              </span>
            </p>
            <a
              href={location || "https://maps.app.goo.gl/pg9rgYsMsTwfGuJC6"}
              className="pb-6"
            >
              <div className="badge badge-primary ml-2 font-bold badge-lg">
                <FaMapLocationDot /> <span className="ml-2">Location</span>{" "}
                <FaLink className="ml-2" />
              </div>
            </a>
            <a
              href={
                streetViewUrl || "https://maps.app.goo.gl/UmeqdEYoG3CEzi2M7"
              }
              className="pb-6"
            >
              <div className="badge badge-primary ml-2 font-bold badge-lg">
                <FaStreetView /> <span className="ml-2">Street View</span>{" "}
                <FaLink className="ml-2" />
              </div>
            </a>

            <div className="mt-5">
              <span className="font-bold font-mono text-xl mb-0">
                Working Process
              </span>
              <ul className="steps my-8 w-full over steps-vertical steps-lg xl:steps-horizontal">
                {generateSteps(stepCount, highlightedSteps)}
              </ul>
            </div>

            {title && (
              <ShareButtons
                shareUrl={`http://localhost:3000/post/${id}`}
                title={title}
              />
            )}
            <p className="pb-6 mt-4">{/* description */ description}</p>
          </div>
        </main>
        <div className="flex-col  items-center ">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                Discussion (20)
                {/* comment count */}
              </h2>
            </div>
            <CommentFrom
              collectionRef={collectionRef}
              userId={userId}
              userName={userName}
              userProfileUrl={userProfileUrl}
            />
            <div className="flex mb-10 flex-col items-center">
              <CommentLists collectionRef={collectionRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
