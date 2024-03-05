import Navar from "./Navar";
import React from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    label: "HR",
    to: "/login",
  },
  {
    id: 2,
    label: "Ojt",
    to: "/ojt",
  },
];
const firstRoute = data[0].to;
const firstLabel = data[0].label;
const SecondRoute = data[1].to;
const SecondLabel = data[1].label;
function HomePage() {
  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <Navar />
        <header className="h-90 bg-custom-bg-gray">
          <section className="max-w-screen-xl flex mx-auto">
            <div className="w-full pl-5 pt-2">
              <h1 className="font-bold text-custom-text-gray text-4xl">
                We're passionate about <br />
                helping entrepreneurs change <br />
                the world and build a better
                <br />
                tomorrow.
              </h1>
              <p className="pt-2 text-custom-text-gray">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="flex space-x-4 mx-auto my-auto pt-4">
                <button className="border-2 bg-orange-400 rounded-3xl hover:border-2 hover:border-orange-400 hover:text-custom-text-gray hover:bg-transparent text-white w-52 h-10">
                  <Link
                    to={firstRoute}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {firstLabel}
                  </Link>
                </button>
                <button className="border-2 border-orange-400 hover:text-white hover:bg-orange-400 rounded-3xl text-custom-text-gray w-52 h-10">
                  <Link
                    to={SecondRoute}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {SecondLabel}
                  </Link>
                </button>
              </div>
            </div>
            <div className="w-full overflow-hidden md:block hidden items-center justify-start">
              <svg
                className="w-560 h-auto sm:w-full"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="650"
                height="350"
                preserveAspectRatio="none"
                viewBox="0 0 1440 560"
              >
                <g mask='url("#SvgjsMask1004")' fill="none">
                  <path
                    d="M85.09 55.87L150.05 93.37L150.05 168.37L85.09 205.87L20.14 168.37L20.14 93.37zM85.09 505.87L150.05 543.37L150.05 618.37L85.09 655.87L20.14 618.37L20.14 543.37zM215 280.87L279.95 318.37L279.95 393.37L215 430.87L150.05 393.37L150.05 318.37zM344.91 55.87L409.86 93.37L409.86 168.37L344.91 205.87L279.95 168.37L279.95 93.37zM734.63 55.87L799.59 93.37L799.59 168.37L734.63 205.87L669.68 168.37L669.68 93.37zM734.63 505.87L799.59 543.37L799.59 618.37L734.63 655.87L669.68 618.37L669.68 543.37zM929.49 -56.63L994.45 -19.13L994.45 55.87L929.49 93.37L864.54 55.87L864.54 -19.13zM1254.26 55.87L1319.21 93.37L1319.21 168.37L1254.26 205.87L1189.31 168.37L1189.31 93.37zM1189.31 393.37L1254.26 430.87L1254.26 505.87L1189.31 543.37L1124.35 505.87L1124.35 430.87z"
                    stroke="#03305d"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M77.59 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 655.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM207.5 280.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 318.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM207.5 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 318.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM337.41 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM402.36 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM402.36 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM337.41 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 655.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM921.99 -56.63 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM986.95 -19.13 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM986.95 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM921.99 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM857.04 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM857.04 -19.13 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1311.71 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1311.71 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1116.85 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1116.85 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z"
                    fill="#03305d"
                  ></path>
                  <path
                    d="M71.22 385.58L122.31 415.08L122.31 474.08L71.22 503.58L20.12 474.08L20.12 415.08zM173.41 31.58L224.51 61.08L224.51 120.08L173.41 149.58L122.31 120.08L122.31 61.08zM122.31 120.08L173.41 149.58L173.41 208.58L122.31 238.08L71.22 208.58L71.22 149.58zM173.41 208.58L224.51 238.08L224.51 297.08L173.41 326.58L122.31 297.08L122.31 238.08zM173.41 385.58L224.51 415.08L224.51 474.08L173.41 503.58L122.31 474.08L122.31 415.08zM224.51 120.08L275.6 149.58L275.6 208.58L224.51 238.08L173.41 208.58L173.41 149.58zM224.51 297.08L275.6 326.58L275.6 385.58L224.51 415.08L173.41 385.58L173.41 326.58zM326.7 120.08L377.8 149.58L377.8 208.58L326.7 238.08L275.6 208.58L275.6 149.58zM377.8 208.58L428.9 238.08L428.9 297.08L377.8 326.58L326.7 297.08L326.7 238.08zM326.7 297.08L377.8 326.58L377.8 385.58L326.7 415.08L275.6 385.58L275.6 326.58zM377.8 385.58L428.9 415.08L428.9 474.08L377.8 503.58L326.7 474.08L326.7 415.08zM428.9 297.08L479.99 326.58L479.99 385.58L428.9 415.08L377.8 385.58L377.8 326.58zM428.9 474.08L479.99 503.58L479.99 562.58L428.9 592.08L377.8 562.58L377.8 503.58zM531.09 297.08L582.19 326.58L582.19 385.58L531.09 415.08L479.99 385.58L479.99 326.58zM684.38 385.58L735.48 415.08L735.48 474.08L684.38 503.58L633.28 474.08L633.28 415.08zM837.67 297.08L888.77 326.58L888.77 385.58L837.67 415.08L786.57 385.58L786.57 326.58zM888.77 385.58L939.87 415.08L939.87 474.08L888.77 503.58L837.67 474.08L837.67 415.08zM939.87 474.08L990.96 503.58L990.96 562.58L939.87 592.08L888.77 562.58L888.77 503.58zM1093.16 385.58L1144.25 415.08L1144.25 474.08L1093.16 503.58L1042.06 474.08L1042.06 415.08zM1144.25 120.08L1195.35 149.58L1195.35 208.58L1144.25 238.08L1093.16 208.58L1093.16 149.58zM1144.25 297.08L1195.35 326.58L1195.35 385.58L1144.25 415.08L1093.16 385.58L1093.16 326.58zM1348.64 120.08L1399.74 149.58L1399.74 208.58L1348.64 238.08L1297.54 208.58L1297.54 149.58zM1348.64 297.08L1399.74 326.58L1399.74 385.58L1348.64 415.08L1297.54 385.58L1297.54 326.58zM1399.74 385.58L1450.83 415.08L1450.83 474.08L1399.74 503.58L1348.64 474.08L1348.64 415.08zM1501.93 208.58L1553.03 238.08L1553.03 297.08L1501.93 326.58L1450.83 297.08L1450.83 238.08zM1450.83 297.08L1501.93 326.58L1501.93 385.58L1450.83 415.08L1399.74 385.58L1399.74 326.58zM1450.83 474.08L1501.93 503.58L1501.93 562.58L1450.83 592.08L1399.74 562.58L1399.74 503.58z"
                    stroke="rgba(247, 153, 57, 1)"
                    stroke-width="2"
                  ></path>
                </g>
              </svg>
            </div>
          </section>
        </header>
        <body className="h-full relative">
          <section className="max-w-screen-xl mx-auto my-24 h-40 flex items-center justify-center text-center">
            <h2 className="text-3xl font-semibold text-custom-text-black">
              We're ready to <br />
              share our advice and experience
            </h2>
          </section>
          <section className="max-w-screen-xl grid grid-cols-3 gap-x-10 mx-auto justify-center items-center">
            <div className="bg-custom-bg-gray w-full h-full rounded-tr-[50px] rounded-bl-[50px] z-20">
              <img
                src="./images/sub1.png"
                className="h-20 w-20  mx-auto mt-4"
              />
              <h3 className="text-center font-semibold text-3xl text-custom-text-gray py-4">
                Software Development <br />
                Partner
              </h3>
              <p className="text-center text-custom-text-gray px-2">
                We provide a full-service, world-class digital product design
                and development, from validating your hypothesis, building your
                dedicated team, launching an MVP, and right through to
                commercialisation, accelerating growth, and ongoing support.
              </p>
            </div>
            <div className="bg-custom-bg-gray w-full h-full rounded-tr-[50px] rounded-bl-[50px] z-20">
              <img src="./images/sub2.png" className="h-20 w-20 mx-auto mt-4" />
              <h3 className="text-center font-semibold text-3xl text-custom-text-gray py-4">
                Cyber Protect
              </h3>
              <p className="text-center text-custom-text-gray px-2 pt-8">
                It is essential and often overlooked to protect your digital
                product and your customers information in our current world. We
                provide comprehensive cyber-security testing to identify and
                address potential vulnerabilities in your digital product and
                protect your digital business and long-term investment.
              </p>
            </div>
            <div className="bg-custom-bg-gray w-full h-full rounded-tr-[50px] rounded-bl-[50px] z-20">
              <img src="./images/sub3.png" className="h-20 w-20 mx-auto mt-4" />
              <h3 className="text-center font-semibold text-3xl text-custom-text-gray py-4">
                Co-Build & Co-Invest <br />
                Partner
              </h3>
              <p className="text-center text-custom-text-gray px-2 pb-2">
                The TeraVault founding team is comprised of experience
                entrepreneurs who have founded, scaled and exited technology
                companies in Australia, Canada, the US, the UK, Thailand and the
                Philippines. It is critical to have supportive and genuine
                partners around you, providing technical advice to culture and
                business strategy to investments, capital raising, and expansion
                to other countries. We love getting our hands dirty and working
                alongside amazing founders.
              </p>
            </div>
          </section>
          <div className="bg-orange-400 w-full h-80 absolute bottom-0 z-0"></div>
        </body>
        <>
          <div className="my-24">
            <section className="max-w-screen-xl mx-auto my-4 h-40 flex flex-col items-center justify-center text-center">
              <h4 className="text-xl font-medium text-custom-text-orange">
                Popular Job Categories
              </h4>
              <h3 className="text-3xl font-bold text-custom-text-black mt-4">
                Let's help you{" "}
                <span className="text-custom-text-orange underline">
                  choose
                </span>{" "}
                the
                <br />
                category you want.
              </h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </section>
            <section className="flex flex-col mt-24 h-full max-w-screen-xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    IT/Computer
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    Financial Associate
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    Advertising / Media
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    Fullstack Developer
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    UI UX Designer
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    IT Consultant
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    Computer Engineering
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
                <div className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black">
                  <h5 className="font-bold text-custom-text-black">
                    IT Analyst
                  </h5>
                  <span className="text-custom-text-black">
                    1 job available
                  </span>
                </div>
              </div>
            </section>
          </div>
        </>
        <footer className="h-full mt-32 bg-custom-bg-black">
          <div className="py-4 flex flex-col justify-center items-center">
            <img src="./images/footer-logo.png" className="h-32 w-32" />
            <span className="text-gray-50 pt-4">
              Copyright @ 2024 TERAVAULT, INC. dba Teravault Software. All
              rights reversed
            </span>
          </div>
        </footer>
      </>
    </div>
  );
}

export default HomePage;
