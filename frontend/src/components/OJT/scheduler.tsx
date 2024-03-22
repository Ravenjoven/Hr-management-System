import React from "react";
import { Scheduler } from "../Calendar";
function sched() {
  return (
    <section>
      <div className="w-screen h-screen flex grid-col-2">
        <div className="w-1/2 h-full ">
          <div className="w-full h-1/4">
            <div className="flex justify-center items-center pt-12">
              <img src="../images/img2.png" className="w-20 h-20"></img>
              <img src="../images/img3.png" className="w-1/2 h-20" />
            </div>
          </div>
          <div className="w-full h-3/4 bg-white border border-black">
          
            <div className="px-8">
              <div>
                <p className="text-5xl">Pearl</p>
              </div>
              <div>
                <p className="text-2xl">Recuitment: Initial Interview</p>
              </div>
              <div>
                <p className="text-2xl">30 Min</p>
              </div>
              <div>
                <p className="text-2xl">Web Conferencing</p>
              </div>
            </div>
            <div className="border border-black">
              <div className="mx-auto w-3/4 ">
                <p className="text-sm m-16" >you dont have a Events or reminder right now</p>
              </div>
              <div className="flex justify-center border border-black mt-12 mx-16">
            <button className="bg-blue-800 p-2">Save</button>
          </div>
            </div>
          </div>
          
        </div>
        <div className="w-full h-full bg-gray-400">
          <div className="w-4/5 m-auto bg-white  rounded-3xl">
            <Scheduler />
          </div>
        </div>
      </div>
    </section>
  );
}
export default sched;
