// import Router from "./Router/route";
// function App() {
//   return <Router />;
// }

// export default App;

import './App.css';

function navigate(url: any){
  window.location.href=url
}
async function auth(){
  const response =await fetch('https://localhost:9000/request', {method:'post'});
  const data =await response.json();
  navigate(data.url)
}

function App() {
  return(
    <>
    <div className="">
              <form className="m-8 w-[341px] rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px] bg-darkorange-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start py-[100px] px-[55px] box-border gap-[29px] min-w-[341px] max-w-full mq750:min-w-full mq450:pt-[90px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq1050:flex-1">
                <div className="w-[341px] h-[455px] relative rounded-tl-none rounded-tr-31xl rounded-br-none rounded-bl-31xl bg-darkorange-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-2.5 z-[1] border-[1px] border-solid border-gainsboro-200">
                  <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[200px] [border:none] [outline:none]  font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block whitespace-nowrap z-[2]"
                    placeholder="Email@gmail.com"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[14px_0px]">
                  <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-[15px] z-[1] border-[1px] border-solid border-gainsboro-200">
                    <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[200px] [border:none] [outline:none] font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block z-[2]"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <button className="cursor-pointer pt-2 pb-[9px] pr-3.5 pl-[15px] bg-darkorange-200 w-[89px] rounded-[6px] box-border flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-chocolate hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                    <div className="h-9 w-[89px] relative rounded-3xs bg-darkorange-200 box-border hidden border-[1px] border-solid border-white" />
                    <b className="relative text-base font-inter text-whitesmoke text-left z-[2]">
                      Sign in
                    </b>
                  </button>
                  <div className="w-[204px] flex items-center justify-center py-0 px-2 box-border">
                    <b className="text-3xs font-inter text-left z-[1]">
                      <span className="text-white">OR</span>
                    </b>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center bg-white rounded-xl p-2.5 w-full m-[2px]"

                  onClick={()=> auth()}
                >
                  <img
                    src="../images/Gmail.png"
                    alt=""
                    className="w-[20px] mr-[20px] inline "
                  />
                  <span className="text-xs">Log in with Google</span>
                </button>
                <div className="w-[204px] flex flex-row items-start justify-start py-0 px-2 box-border">
                  <b className="flex-1 relative text-3xs font-inter text-left z-[1]">
                    <span className="text-white">Don’t have account?</span>
                    <span className="text-mediumslateblue"> Sign up here!</span>
                  </b>
                </div>
              </form>
            </div>
    </>
  );

}
export default App;