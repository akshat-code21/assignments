import React from "react";
import { PiSidebarFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
const SideBar = ({ SideBarOpen,setSideBarOpen }) => {
  if(!SideBarOpen){
    return(
      <div className="bg-grey-300 w-12 text-white p-3">
        <PiSidebarFill className="text-2xl cursor-pointer" onClick={()=>setSideBarOpen((state)=>!state)}/>
      </div>
    )
  }
  return (
    <div className="bg-grey-300 w-80 text-white">
      <div className="heading flex items-center justify-between p-5">
        <h1 className="text-xl font-bold">My Lists</h1>
        <PiSidebarFill className="text-2xl cursor-pointer" onClick={()=>setSideBarOpen((state)=>!state)}/>
      </div>
      <h2 className="px-5 font-semibold">Created By Me</h2>
      <div className="list">
        <div className="listItem flex items-center justify-start gap-2 bg-grey-500 px-5 py-3 mx-1 my-2 rounded-md w-[90%]">
          <div className="image w-5 h-5 bg-white rounded-sm">
            <img src="" alt="" />
          </div>
          <div className="w-[90%]">
            Favorite
          </div>
          <span><FaLock className=""/></span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
