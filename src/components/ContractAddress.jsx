const ContractAddress = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 mt-4 mb-6">
      <h4 className="flex gap-1 text-seaBlueColor font-bold">
        Bridge assets to BNB Chain
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
            <g id="Interface / External_Link">
              <path
                id="Vector"
                d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                stroke="#00c0f5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </h4>
      <div className="bg-lightNav dark:bg-gray-600 border border-seaBlueColor rounded-xl p-5 flex flex-col">
        <p className="dark:text-white text-xl font-semibold text-center">Contract Address</p>
        <p className="bg-lightblue mt-4">
            {"0x09f66afB0a733c9500e3Cbb00a08CCBf0de95faE"}
        </p>
        <button className="bg-buttonColor text-white text-lg text-center font-extrabold self-center rounded-full cursor-pointer px-3 py-2 mt-4">Copy</button>
      </div>
    </div>
  );
};

export default ContractAddress;
