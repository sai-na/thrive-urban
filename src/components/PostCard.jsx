import React from "react";
import { ImLocation2 } from "react-icons/im";
import { formatDistanceToNow } from "date-fns";

const PostCard = ({ imgUrl, title, city, jsDate, damageType }) => {
  const stepsName = [
    "Not Started",
    "Review",
    "Under Review",
    "Sanctioned",
    "Work Ongoing",
    "Completed",
  ];
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-56">
        <img src={imgUrl} className="object-cover " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title && title} {damageType && <>- {damageType}</>}{" "}
        </h2>
        <span className="text-left my-1">
          {formatDistanceToNow(jsDate, { addSuffix: true })}
        </span>
        <p className="text-base text-left text-gray-400">
          <div className="badge badge-ghost">
            {" "}
            <ImLocation2 className="mr-2" /> {city && city}
          </div>
        </p>
        <p className="line-clamp-2">
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
