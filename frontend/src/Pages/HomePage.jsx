import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [title, setTitle] = useState("We are always here to serve you.");
  const [showMenu, setShowMenu] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };

  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/body");
  }
  return (
    <div>
      <div className="min-h-screen relative flex flex-col bg-[url('https://www.tailwindtap.com/assets/components/hero/food-delivery/banner.jpg')]  bg-no-repeat w-full bg-cover bg-left-bottom sm:bg-center">
        <div className="bg-black/60 h-full w-full absolute"></div>
        <div className="flex justify-between sm:justify-end gap-3.5 items-center pt-5 sm:pt-5 z-30">
          <div className="flex justify-between sm:justify-end sm:gap-5 items-center w-full px-8">
            <button
              className="w-12 h-12 relative focus:outline-none sm:hidden overscroll-none top-2.5"
              onClick={() => {
                toggleClass();
                setToggle(!toggle);
              }}
            >
              <div className="block w-5 absolute left-5 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <span
                  className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "rotate-45" : "-translate-y-2"}`}
                ></span>
                <span
                  className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle && "opacity-0"}`}
                ></span>
                <span
                  className={`
                    block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
                    ${toggle ? "-rotate-45" : "translate-y-2"}`}
                ></span>
              </div>
            </button>
            <div
              className={`border-[2px] z-30 border-orange-600 bg-[#050C24] rounded-xl absolute top-[70px] left-5 block sm:hidden p-0.5 ${
                toggle ? "visible" : "invisible"
              }`}
            >
              <div className="p-3 rounded-xl min-w-[180px] text-center">
                <div className="text-white z-50 text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer hover:text-orange-600">
                  Home
                </div>
                <div className="mt-4 text-white z-50 text-2xl font-normal font-hindVadodara leading-6 tracking-[0.04] cursor-pointer hover:text-orange-600">
                  Menu
                </div>
                <div className="mt-4 text-white z-[100] text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer hover:text-orange-600">
                  Pricing
                </div>
              </div>
            </div>

            <svg
              className="w-10 h-10 hover:text-orange-600 text-white cursor-pointer hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <button className="block sm:hidden bg-transparent border border-orange-600 py-1.5 px-5 rounded-md h-max text-white hover:bg-orange-600">
              Login
            </button>
          </div>
          <div
            className={`
                  transition-all ease-in-out z-50
                  ${
                    showMenu
                      ? "flex flex-col min-h-screen h-max w-full left-0 top-0 fixed bg-[#2D4263]"
                      : "flex flex-col h-screen w-full top-0 left-full fixed bg-[#2D4263]"
                  }`}
          >
            <div
              className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={"/assets/nft/infytoken/close.svg"}
                alt="close"
                className="h-7 cursor-pointer"
              />
            </div>
            <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] sm:text-lg text-[20px] leading-[29px] font-normal md:gap-[60px]">
              <div className="text-white text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer hover:text-orange-600">
                Home
              </div>
              <div className="text-white text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer hover:text-orange-600">
                Menu
              </div>
              <div className="text-white text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer hover:text-orange-600">
                Pricing
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-10">
          <div className="flex flex-col gap-2.5 pb-3 sm:min-w-[448px] max-w-md">
            <h1 className="text-3xl sm:text-4xl text-orange-600 text-center font-semibold tracking-wider">
              Flavors Of India
            </h1>
            <h1 className="text-xl sm:text-2xl text-white text-center w-fit mx-auto transition-all ease-in-out duration-500 mt-1">
              {title}
            </h1>
            <div className="flex justify-center mt-2 flex-col gap-5 sm:gap-7 items-center">
              <div className="flex items-center gap-4 justify-center w-fit">
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md hover:shadow-orange-600 cursor-pointer group pt-2"
                  onMouseEnter={() =>
                    setTitle("Bringing Your Favorite Food to You")
                  }
                  onMouseLeave={() =>
                    setTitle("We are always here to serve you.")
                  }
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                    width="40"
                    height="40"
                  >
                    <path d="m44.3 5.8c0.6 0 1.1 0.4 1.1 1v27.5c0 2.1-0.9 3.9-2.2 5.2-1.4 1.4-2.2 3.4-2.2 5.4v46.5c0 1.6-1.3 2.8-2.9 2.8-1.5 0-2.8-1.2-2.8-2.8v-46.8c0-1.9-0.7-3.6-2-4.9l-0.3-0.2c-1.3-1.3-2.1-3.1-2.1-5.2v-27.5c0-0.6 0.5-1.1 1.1-1.1 0.6 0 1 0.5 1 1.1v17.9c0 0.5 0.5 1 1 1 0.6 0 1-0.5 1-1v-17.9c0-0.6 0.5-1.1 1.1-1.1 0.6 0 1.1 0.5 1.1 1.1v17.9c0 0.5 0.4 1 0.9 1 0.6 0 1-0.5 1-1v-17.9c0-0.6 0.5-1.1 1.1-1.1 0.6 0 1.1 0.5 1.1 1.1v17.9c0 0.5 0.4 1 0.9 1 0.6 0 1-0.5 1-1v-17.9c0-0.6 0.5-1.1 1.1-1.1z" />
                    <path d="m58.7 27.9c-0.5 7.5 3 14.7 4.3 18.2 0.2 0.7 0.7 1.3 1.4 1.7q0.2 0.1 0.2 0.3l-0.7 43.5c0 1.5 1.2 2.7 2.6 2.7 1.5 0 2.6-1.2 2.6-2.7v-43.3-41.3c0-1.1-1.3-1.7-2.1-0.9-5.6 5.5-7.7 13.9-8.3 21.8z" />
                  </svg>
                </div>
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md hover:shadow-orange-600 cursor-pointer group"
                  onMouseEnter={() =>
                    setTitle("Delivered Drinks for Every Occasion")
                  }
                  onMouseLeave={() =>
                    setTitle("We are always here to serve you.")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="25"
                    height="25"
                    viewBox="0 0 244.247 244.247"
                  >
                    <g>
                      <g>
                        <path
                          d="M0,25.832c0,3.405,2.754,6.167,6.165,6.167h26.972c1.82,0,5.02,1.284,6.334,2.552l15.892,15.267h-17.89
      c-10.207,0-12.411,5.626-4.923,12.563l77.738,71.953c1.841,1.706,3.946,2.955,6.167,3.783v82.247l-36.061,15.671
      c-3.121,1.356-2.892,2.453,0.518,2.453h85.528c3.407,0,3.61-1.062,0.467-2.372l-38.125-15.868v-81.928
      c2.879-0.925,5.602-2.483,7.825-4.814l66.948-70.302c7.043-7.394,4.479-13.391-5.729-13.391H73.146L48.01,25.659
      c-3.611-3.474-9.869-5.995-14.879-5.995H6.159C2.754,19.669,0,22.424,0,25.832z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md hover:shadow-orange-600 cursor-pointer group"
                  onMouseEnter={() => setTitle("Order Your Favorite Food")}
                  onMouseLeave={() =>
                    setTitle("We are always here to serve you.")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="25"
                    height="25"
                  >
                    <path d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center min-w-[100px] sm:min-w-[360px] !max-w-[200px] sm:max-w-[360px]">
                <div className="flex bg-white py-2.5 pl-2 pr-1 rounded-l-lg items-center gap-1.5 w-full max-w-[280px] sm:max-w-xl">
                  <svg
                    class="text-orange-600 min-w-[20px] min-h-[20px] fill-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <input
                    type="text"
                    className="py-1 outline-none max-w-[156px] sm:max-w-none placeholder:text-xs sm:placeholder:text-sm"
                    placeholder="Street Address, City, State"
                  />
                </div>
                <button
                  className="bg-orange-600 px-6 py-1 text-base lg:text-lg font-semibold text-white rounded-r-lg shadow-md "
                  type="submit"
                  onClick={handlenavigate}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
