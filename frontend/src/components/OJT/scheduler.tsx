import React from "react";
import { Scheduler } from "../Calendar";
function sched() {
  return (
    <section>
      <div className="w-screen h-screen flex grid-col-2">
        <div className="w-1/2 h-full bg-blue-800">
          <p>Page 1</p>
        </div>
        <div className="w-full h-full bg-blue-400">
          <div className="w-4/5 m-auto">
            <Scheduler />
          </div>
        </div>
      </div>
    </section>
    // <div className="flex  grid-col h-[100vh] w-full border border-black ">
    //   <div className="  grid grid-rows justify-center items-center">
    //     <div className="flex justify-center  w-1/3 h-20 border border-black mx-40">
    //       <img src="../images/img2.png" className="w-20 h-20"></img>
    //       <img src="../images/img3.png" className="w-1/2 h-20" />
    //     </div>
    //     <div className="items-center justify-center grid grid-rows font-bold p-16 text-2xl border border-black h-full mt-0">
    //       <h1>PEARL</h1>
    //       <p>Recuitment: Initial Interview</p>
    //       <p>30 min</p>
    //       <p>web Conferencing Details provided upon confirmation</p>
    //     </div>
    //   </div>
    //   <div className="w-1/2 m-auto">
    //     <Scheduler />
    //   </div>
    // </div>
  );
}
export default sched;
