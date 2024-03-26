import React from "react";
import { Scheduler } from "../Calendar";
import OjtNavar from "./OjtNavar";
// function sched() {
//   return (
//     <div className="max-h-screen max-w-screen  font-montserrat font-bold">
//       <OjtNavar />
//       <div className="flex m-6 mb-8 h-full">
//         <div className="w-1/4 h-[90vh] rounded-tl-[40px] rounded-tr-none rounded-bl-[40px] bg-custom-bg-smooth border border-black ">

//           <div className="flex justify-center items-center object-cover border-b-2 border-black py-8">
//             <img src="../images/img2.png" className="w-[100px] h-1/2"></img>
//             <img src="../images/img3.png" className="w-[200px] h-1/2" />
//           </div>
//           <div>
//             <p>host</p>
//             <p>Ms.Pearl(you)</p>
//           </div>
//           <div>
//             <p>duration</p>
//             <select name="" id="">
//               <option value="">5 Minutes</option>
//               <option value="">10 Minutes</option>
//               <option value="">15 Minutes</option>
//               <option value="">20 Minutes</option>
//               <option value="">25 Minutes</option>
//               <option value="">30 Minutes</option>
//             </select>
//           </div>
//           <div>
//             <p>location</p>
//             <div className="flex flex-row">
//               <div>
//                 <button>team</button>
//               </div>
//               <div>
//                 <button>Phone Call</button>
//               </div>
//               <div>
//                 <button>In person Meeting</button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p>Subject</p>
//             <div>
//               <textarea name="" id=""></textarea>
//             </div>
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </div>
//         <div className="w-3/4 h-[90vh] rounded-br-[40px] rounded-tr-[40px] bg-custom-text-orange border border-black">
//           <Scheduler/>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default sched;

export default function sched() {
  return (
    <div className="max-h-screen max-w-screen  font-montserrat font-bold">
      <OjtNavar />
      <div className="flex m-6 mb-8 h-full">
        <div className="w-1/4 h-[90vh] rounded-tl-[40px] rounded-tr-none rounded-bl-[40px] bg-custom-bg-smooth border border-black ">
          <div className="flex justify-center items-center object-cover border-b-2 border-black py-8">
            <img src="../images/img2.png" className="w-[100px] h-1/2"></img>
            <img src="../images/img3.png" className="w-[200px] h-1/2" />
          </div>
          <div>
            <p>Ms.Pearl</p>
          </div>
          <div>
            <p> 30 Minutes</p>
          </div>
          <div>
            <p>web conference</p>
          </div>
          <div className="w-full h-1/4 bg-white rounded-[20px] border-2 border-black my-8 flex justify-center items-center">
            <p>No shedule set yet</p>
          </div>
          <div>
            <button className="" disabled>Submit</button>
          </div>
        </div>
        <div className="w-3/4 h-[90vh] rounded-br-[40px] rounded-tr-[40px] bg-custom-text-orange border border-black">
          <div>
            <Scheduler />
          </div>
        </div>
      </div>
    </div>
  );
}
