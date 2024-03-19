import React from "react";
import { Scheduler } from "../Calendar";
function sched() {
  return (
    <div>
      <div className="flex grid-col items-center justify-center">
        <div className="border border-black w-full h-full m-4 flex grid-row">
          <div className="flex mx-auto p-12">
            <img src="../images/img2.png" className="h-10 "></img>
            <img src="../images/img3.png" className="h-10 pt-2 " />
          </div>
          
        </div>
        <div className="border border-black w-full h-full m-4">
          <Scheduler />
        </div>
      </div>
    </div>
  );
}
export default sched;
