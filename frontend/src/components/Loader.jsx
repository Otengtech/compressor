import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-screen bg-green-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-green-400 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
