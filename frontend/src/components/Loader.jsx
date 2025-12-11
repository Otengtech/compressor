import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[90vh] bg-green-100 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-green-600 border-t-transparent"></div>
      <div className="mt-6">
        <span className="text-green-600 text-sm font-medium tracking-wider">
          LOADING
        </span>
      </div>
    </div>
  );
};

export default Loader;
