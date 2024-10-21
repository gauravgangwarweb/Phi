import { useState } from "react";

const SwapCard = () => {
  // state variable for selected currency one
  const [selectedOne, setSelectedOne] = useState("USDT");
  // state variable for selected currency two
  const [selectedTwo, setSelectedTwo] = useState("PHI");

  // function to handle change in selected currency one
  const handleChangeOne = (e) => {
    setSelectedOne(e.target.value);
  };

  // function to handle change in selected currency two
  const handleChangeTwo = (e) => {
    setSelectedTwo(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-center px-2 md:px-0">
      <div className="w-full md:w-1/4 bg-lightNav dark:bg-gray-600 p-6 rounded-2xl mt-4">
        <h3 className="text-2xl dark:text-white font-medium">Swap</h3>
        <p className="text-gray-600 dark:text-white text-sm mt-2">
          Trade PHI in an instant
        </p>
        <div className="flex justify-between">
          <div></div>
          <div className="flex items-center gap-4 mt-4">
            {/* coins button  */}
            <button className="cursor-pointer">
              <svg
                fill="#878787"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path>
                </g>
              </svg>
            </button>
            {/* setting button */}
            <button className="cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71958 16.7969 5.72999 16.3099 5.45095C15.8229 5.17192 15.5347 4.65571 15.5137 4.09793C15.4994 3.71845 15.4628 3.45829 15.3694 3.23458C15.1649 2.74453 14.7726 2.35518 14.2788 2.15224ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
                    fill="#878787"
                  ></path>
                </g>
              </svg>
            </button>
            {/* history button */}
            <button className="cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12H0l3.998 4.004L8 12H5.975C5.975 7.589 8.94 4.625 12 4.625c3.06 0 6.025 2.964 6.025 6.625S15.06 17.875 12 17.875c-1.63 0-3.094-.735-4.062-1.899L5.73 17.905C7.064 19.5 9.39 20.75 12 20.75 17.523 20.75 22 16.273 22 10.75S17.523 2 12 2zm-.625 5.25v5.5l4.25 2.55.625-1.025-3.5-2.1v-4.925h-1.375z"
                    fill="#878787"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <hr className="bg-gray-500 mt-4" />
        {/* Selected currency one */}
        <div className="w-full flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            {/* currency icon */}
            {selectedOne === "PHI" ? (
              <img className="w-7" src="logo.png" alt="phi" />
            ) : (
              <img className="w-7" src="usdt.png" alt="usdt" />
            )}
            {/* options */}
            <select
              className="bg-inherit dark:text-white text-base font-bold"
              value={selectedOne}
              onChange={handleChangeOne}
            >
              <option value="USDT">USDT</option>
              <option value="PHI">PHI</option>
            </select>
          </div>
          <p className="dark:text-white">{"0.00"}</p>
        </div>
        {/* price area one */}
        <div className="w-full flex flex-col border bg-priceAreaBg mt-4 p-4 rounded-xl">
          {/* input element for currency one */}
          <input
            className="bg-inherit self-end text-xl text-end outline-none"
            type="number"
            placeholder="0.00"
          />
          <div className="flex justify-around mt-4">
            <button className="text-seaBlueColor font-bold border-2 border-seaBlueColor rounded-full cursor-pointer px-3 py-0.5">
              25%
            </button>
            <button className="text-seaBlueColor font-bold border-2 border-seaBlueColor rounded-full cursor-pointer px-3 py-0.5">
              50%
            </button>
            <button className="text-seaBlueColor font-bold border-2 border-seaBlueColor rounded-full cursor-pointer px-3 py-0.5">
              75%
            </button>
            <button className="text-seaBlueColor font-bold border-2 border-seaBlueColor rounded-full cursor-pointer px-3 py-0.5">
              Max
            </button>
          </div>
        </div>
        {/* middle arrow */}
        <div className="w-full flex items-center justify-center mt-4">
          <span className="bg-white border p-2 rounded-full">
            <svg
              viewBox="0 0 26 26"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={26}
              height={26}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  stroke="#1ec8d4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17l3 3m0 0l3-3m-3 3V4m3 3l-3-3m0 0L9 7"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        {/* Selected currency two */}
        <div className="w-full flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            {/* currency icon */}
            {selectedTwo === "USDT" ? (
              <img className="w-7" src="usdt.png" alt="usdt" />
            ) : (
              <img className="w-7" src="logo.png" alt="phi" />
            )}
            {/* options */}
            <select
              className="bg-inherit text-base dark:text-white font-bold"
              value={selectedTwo}
              onChange={handleChangeTwo}
            >
              <option value="USDT">USDT</option>
              <option value="PHI">PHI</option>
            </select>
          </div>
          <p className="dark:text-white">{"0.00"}</p>
        </div>
        {/* price area two */}
        <div className="w-full flex flex-col border bg-priceAreaBg mt-4 p-4 rounded-xl">
          {/* input element for currency two */}
          <input
            className="bg-inherit self-end text-xl text-end outline-none"
            type="number"
            placeholder="0.00"
          />
        </div>
        {/* swap button */}
        <button className="w-full bg-buttonColor hover:bg-inherit text-white hover:text-buttonColor font-semibold border-2 border-white hover:border-buttonColor active:bg-buttonColor active:text-white rounded-xl cursor-pointer py-3 mt-4 transition-all duration-200">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default SwapCard;
