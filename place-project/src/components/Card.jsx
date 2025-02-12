import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card({ cardItem,isDetail,toggleVisitedStatus }) {
  const { id, name, image, description, visited } = cardItem;
  const status = visited ? "Not Visited" : "Visited";
  
  return (
    <div className="bg-gray-100 p-2 rounded-md text-center max-w-xs mx-auto">
      <div className="relative overflow-hidden aspect-video">
        <img src={image} className="w-full h-full object-cover" alt="img" />
      </div>
      <div className="text-[#2f4858]  text-lg">
        <h3 className="mt-3 font-bold text-xl">{name}</h3>

        <p>{description}</p>
        <h5 className="my-3 text-[#001CFF] font-bold">{status}</h5>
        {isDetail && (
          <p className="text-gray-600 mt-2 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}
      </div>
      {/* <div className="flex " style={{justifyContent: isDetail ? "center" : "space-between"}}> */}
        <div className={`flex items-center ${
    isDetail ? "justify-center" : "justify-between"
  }`}>
        <Button
          text={"Save as Visited"}
          clickEvent = {() => toggleVisitedStatus(id,visited)}
          startIcon={<FontAwesomeIcon icon={faLocationDot} />}
        />
        
        {
          !isDetail && 
            <Link to={`/${id}`}>
            <Button
              text={"Detail"}
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </Link>
        }
      </div>
    </div>
  );
}

export default Card;
