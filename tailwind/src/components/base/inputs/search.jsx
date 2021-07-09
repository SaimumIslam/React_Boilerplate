import React from "react";

function InputSearch(props) {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>

      <input
        {...props}
        type="text"
        className="w-full py-1.5 pl-10 pr-4 text-gray-700 rounded-md  focus:outline-none focus:ring transition duration-500 ease-in-out"
      />
    </div>
  );
}

export default InputSearch;
