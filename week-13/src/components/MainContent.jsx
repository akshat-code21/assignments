import React from "react";
import FavouriteCard from "./FavouriteCard";
import ProblemList from "./ProblemList";
const MainContent = () => {
  return (
    <div className="bg-grey-800 w-full grid grid-cols-12 gap-8 p-8">
      <div className="col-span-5 bg-red-200">
        <FavouriteCard/>
      </div>
      <div className="col-span-7 bg-red-200">
        <ProblemList/>
      </div>
    </div>
  );
};

export default MainContent;
