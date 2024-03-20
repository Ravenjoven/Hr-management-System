import React from "react";
import { Scheduler } from "../Calendar";
function sched() {
  return (
    <div>
      <div className="flex grid-col items-center justify-center">
        <div className="grid grid-rows-4 m-4">
          <div className="border border-black flex w-full h-full mx-16  p-12">
            <img src="../images/img2.png" className="h-10 "></img>
            <img src="../images/img3.png" className="h-10 pt-2 " />
          </div>
          <div className="border border-black flex mx-auto p-12">
            <h1>PEARL</h1>
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
