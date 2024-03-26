import React from "react";
import { Scheduler } from "../Calendar";
import OjtNavar from "./OjtNavar";
function sched() {
  return (
    <div className="max-h-screen max-w-screen  font-montserrat font-bold">
      <OjtNavar />
      <div className="flex m-4 h-full">
        <div className="w-1/4 h-[90vh] rounded-tl-[40px] rounded-tr-none rounded-bl-[40px] bg-custom-bg-smooth  border border-black ">
          <div className="absolute  object-cover border-2 border-black m-6">
            <img src="../images/img2.png" className="w-1/4 h-1/2"></img>
            <img src="../images/img3.png" className="w-1/2 h-1/2" />
          </div>
        </div>
        <div className="w-3/4 h-[90vh] rounded-br-[40px] rounded-tr-[40px] bg-custom-text-orange border border-black"></div>
      </div>

     
    </div>
  );
}
export default sched;
