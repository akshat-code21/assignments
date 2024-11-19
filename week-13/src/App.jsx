import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
function App() {
  const [SideBarOpen,setSideBarOpen] = useState(true)
  return (
    <div className="flex w-full h-screen">
      <SideBar SideBarOpen = {SideBarOpen} setSideBarOpen = {setSideBarOpen}></SideBar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
