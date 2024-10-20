const TabBar = () => {
  return (
    <div className="w-full bg-lightNav dark:bg-gray-600 flex items-center justify-center py-4 mt-11">
      <div className="w-full flex justify-around">
        {/* tab 1 */}
        <span className="flex gap-1 items-center cursor-pointer">
          <img
            className="w-[22px] h-[22px]"
            src="phi-blue-logo.png"
            alt="phi-blue-logo"
          />
          <p className="dark:text-white text-xs font-semibold">PHI</p>
        </span>
        {/* tab 2 */}
        <span className="flex gap-1 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 512 512"
            style={{ margin: "0px 2px 2px 0px" }}
          >
            <path
              fill="#00bfff"
              d="M287.03 20c-39.133.48-79.73 15.297-117 45.938h80.47v43.188c52.76-29.75 114.592-31.588 163.938.03l-18.188 9.72l64.688 50.72l-3.75-83.314l-26.407 14.126C395.99 48.792 345.038 20.644 290.907 20a162 162 0 0 0-3.875 0zm-268 64.625v212.75h212.782V84.625H19.032zm50.282 26.03H205.78v138.939h-18.718v-120.25H69.313v-18.688zm3.344 38.126l90.094 91.845l-13.344 13.094l-90.094-91.845zm206.656 61.75v212.782h212.75v-212.78h-212.75zm50.25 26.064h136.469V375.5h-18.686V255.28h-117.78l-.002-18.686zm3.344 38.094l90.125 91.875l-13.342 13.062l-90.125-91.844l13.343-13.092zm-278.53 63.656l3.75 83.312l23.312-12.47c60.927 88.637 169.99 106.485 259.625 32.814h-80.439v-43.188c-52.08 29.38-113 31.544-162.03 1.188l20.436-10.938z"
            ></path>
          </svg>
          <p className="dark:text-white text-xs font-semibold">Trade</p>
        </span>
        {/* tab 3 */}
        <span className="flex gap-1 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 16 16"
            style={{ margin: "0px 2px 2px 0px" }}
          >
            <g fill="#00bfff">
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932c0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853c0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836c0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91c0 .542-.412.914-1.135.982V8.518z"></path>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></path>
            </g>
          </svg>
          <p className="dark:text-white text-xs font-semibold">Supply</p>
        </span>
        {/* tab 3 */}
        <span className="flex gap-1 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            style={{ margin: "0px 2px 2px 0px" }}
          >
            <g
              fill="none"
              stroke="#00bfff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              color="#52bfff"
            >
              <path d="M21.5 11.029c.324.774.5 1.605.5 2.471c0 2.059-.995 3.924-2.607 5.279a1.07 1.07 0 0 0-.393.813V22h-2l-.794-1.133a.52.52 0 0 0-.552-.198a10.7 10.7 0 0 1-5.308 0a.52.52 0 0 0-.552.198L9 22H7v-2.384a1 1 0 0 0-.432-.824C5.493 18.052 2 16.602 2 15.058V13.5c0-.592.448-1.071 1-1.071c.607 0 1.102-.236 1.302-.863c.767-2.402 2.929-4.33 5.719-5.145"></path>
              <path d="M14.125 9.5v-6M16 3.5V2m0 9V9.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H13m4.875-3C18.496 6.5 19 5.996 19 5.375v-.75c0-.621-.504-1.125-1.125-1.125H13M7.5 12h.009"></path>
            </g>
          </svg>
          <p className="dark:text-white text-xs font-semibold">Liquidity</p>
        </span>
      </div>
    </div>
  );
};

export default TabBar;
