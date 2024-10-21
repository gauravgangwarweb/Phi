const BottomTabBar = () => {
  return (
    <div className="w-full bg-lightNav dark:bg-gray-600 fixed bottom-0 flex justify-around mt-4 py-2">
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="url(#tokenBrandedSwap0)"
              d="M7 9.351V10.5L10.5 8L7 5.75v1.022a5.5 5.5 0 0 0 .5 10.978c1.26 0 3-.443 4-1.5c1.25-1.443 2.74-5.077 2.74-5.077l-4.463 2.893a2.877 2.877 0 0 1-5.02-1.732A2.875 2.875 0 0 1 7 9.351"
            ></path>
            <path
              fill="url(#tokenBrandedSwap1)"
              d="M17 14.649V13.5L13.5 16l3.5 2.25v-1.022a5.5 5.5 0 0 0-.5-10.978c-1.26 0-3 .443-4 1.5c-1.25 1.443-2.74 5.077-2.74 5.077l4.463-2.893A2.874 2.874 0 1 1 17 14.65"
            ></path>
            <defs>
              <linearGradient
                id="tokenBrandedSwap0"
                x1="4.451"
                x2="10.227"
                y1="7.833"
                y2="20.777"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0076ef"></stop>
                <stop offset=".13" stopColor="#007ff6"></stop>
                <stop offset=".258" stopColor="#0084f6"></stop>
                <stop offset=".376" stopColor="#008bf9"></stop>
                <stop offset=".492" stopColor="#009df9"></stop>
                <stop offset=".612" stopColor="#00aef9"></stop>
                <stop offset=".731" stopColor="#00b9fa"></stop>
                <stop offset=".829" stopColor="#00c5fb"></stop>
                <stop offset="1" stopColor="#00ccfc"></stop>
              </linearGradient>
              <linearGradient
                id="tokenBrandedSwap1"
                x1="20.74"
                x2="13.74"
                y1="16.25"
                y2="6.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0076ef"></stop>
                <stop offset=".13" stopColor="#007ff6"></stop>
                <stop offset=".258" stopColor="#0084f6"></stop>
                <stop offset=".376" stopColor="#008bf9"></stop>
                <stop offset=".492" stopColor="#009df9"></stop>
                <stop offset=".612" stopColor="#00aef9"></stop>
                <stop offset=".731" stopColor="#00b9fa"></stop>
                <stop offset=".829" stopColor="#00c5fb"></stop>
                <stop offset="1" stopColor="#00ccfc"></stop>
              </linearGradient>
            </defs>
          </g>
        </svg>
        <p className="text-xs dark:text-white">Swap</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 512 512"
        >
          <path
            fill="#52bfff"
            d="M225.814 32.316q-5.933-.02-11.9.007c-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a72 72 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219q2.885 0 5.748.024c18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582q.266.243.526.49c3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a657 657 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602 602 0 0 0-46.357-9.645M103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1068 1068 0 0 0-15.18-29.581m142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508q-19.328-19.965-20.135-44.34a622 622 0 0 0-13.502-.213m182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1319 1319 0 0 0-35.107-15.512m-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327M360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a63 63 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a54 54 0 0 0-13.33-1.795m189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16s3.665 7.568 7.059 10.524c3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9 9 0 0 0-1.408-1.904m-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127 127 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353 353 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.4 39.4 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343m132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.4 26.4 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25m-6.683 49.062a115 115 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946"
          />
        </svg>
        <p className="text-xs dark:text-white">Earn</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#52bfff"
            d="M10.995 4.68v3.88A2.44 2.44 0 0 1 8.545 11h-3.86a2.38 2.38 0 0 1-1.72-.72 2.4 2.4 0 0 1-.71-1.72V4.69a2.44 2.44 0 0 1 2.43-2.44h3.87a2.42 2.42 0 0 1 1.72.72 2.4 2.4 0 0 1 .72 1.71m10.75.01v3.87a2.46 2.46 0 0 1-2.43 2.44h-3.88a2.5 2.5 0 0 1-1.73-.71 2.44 2.44 0 0 1-.71-1.73V4.69a2.4 2.4 0 0 1 .72-1.72 2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44m0 10.75v3.87a2.46 2.46 0 0 1-2.43 2.44h-3.88a2.5 2.5 0 0 1-1.75-.69 2.42 2.42 0 0 1-.71-1.73v-3.87a2.4 2.4 0 0 1 .72-1.72 2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44zm-10.75.01v3.87a2.46 2.46 0 0 1-2.45 2.43h-3.86a2.42 2.42 0 0 1-2.43-2.43v-3.87A2.46 2.46 0 0 1 4.685 13h3.87a2.5 2.5 0 0 1 1.73.72 2.45 2.45 0 0 1 .71 1.73"
          />
        </svg>
        <p className="text-xs dark:text-white">Dashboard</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#52bfff"
            d="M20.067 8.478c.492.88.557 2.014.3 3.327-.74 3.806-3.275 5.12-6.513 5.12h-.5a.805.805 0 0 0-.794.68l-.041.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.519l.949-6.02h1.386c4.678 0 7.749-2.203 8.795-6.502m-2.96-5.09c.762.868.984 1.81.753 3.285-.02.123-.04.24-.063.36-.735 3.773-3.088 5.446-6.955 5.446H8.957c-.63 0-1.173.414-1.353 1.002l-.015-.002-.93 5.894H3.123a.05.05 0 0 1-.051-.06L5.67 2.803A.95.95 0 0 1 6.608 2h5.975c2.183 0 3.717.469 4.524 1.388"
          />
        </svg>
        <p className="text-xs dark:text-white">PayPhi</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#52bfff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            color="#52bfff"
          >
            <path d="M8 6c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2m7.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"></path>
            <path d="M15.5 19c.105 0 .202-.05.397-.148l1.564-.796c.693-.352 1.039-.527 1.039-.806v-3.5m-3 5.25c-.105 0-.202-.05-.397-.148l-1.564-.796c-.693-.352-1.039-.527-1.039-.806v-3.5m3 5.25v-3.5m3-1.75c0-.279-.346-.454-1.039-.806l-1.564-.796c-.195-.098-.292-.148-.397-.148s-.202.05-.397.148l-1.564.796c-.693.351-1.039.527-1.039.806m6 0c0 .279-.346.454-1.039.806l-1.564.796c-.195.098-.292.148-.397.148m-3-1.75c0 .279.346.454 1.039.806l1.564.796c.195.098.292.148.397.148M2 4v8.043c0 .704 1.178 1.59 4.13 1.957M2.107 8.548C3.312 9.61 5.46 10.06 7.754 10.06m6.234-5.939v2.015"></path>
          </g>
        </svg>
        <p className="text-xs dark:text-white">Withdraw</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <svg
          fill="#52bfff"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          stroke="#52bfff"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"></path>
          </g>
        </svg>
        <p className="text-xs dark:text-white">Network</p>
      </button>
    </div>
  );
};

export default BottomTabBar;
