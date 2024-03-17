import Navbar from "../Component/venderCompononet/nav_bar";
import Sidebar from "../Component/venderCompononet/side_bar";
import Home from "../vendor";
import { useState } from "react";
function VendorLayout() {
  const [option, setOption] = useState("analytics");
  const changeoption = (newoption) => {
    setOption(newoption);
  };
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <div className="h-screen w-screen flex">
          <Sidebar changeoption={changeoption}/>
          <Home option={option}/>
        </div>
      </div>
    </>
  );
}
export default VendorLayout;
