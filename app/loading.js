import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-blue rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-grey rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-teal rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default loading;
