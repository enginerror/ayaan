import { Plus } from "lucide-react";
import React from "react";

const AddProjectPage = () => {
  return (
    <div className="min-h-screen px-14">
      <div className="h-40 w-full">
        <img className="bg-gray-200 h-fit w-fit" src="" alt="" />
      </div>
      <div className="mb-2">
        <label>Project Title</label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-300 rounded-xs"
        />
      </div>

      <div className="mb-2">
        <label>Github Link</label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-300 rounded-xs"
        />
      </div>

      <div className="mb-2">
        <label>Domain</label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-300 rounded-xs"
        />
      </div>

      <button
        className="flex items-center px-4 sm:px-6 py-1 sm:py-1.5 mt-4 border-2 border-black bg-black text-white gap-1.5 sm:gap-2 rounded-xs text-xs sm:text-sm hover:bg-gray-800 transition-colors"
      >
        Add{" "}
        <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
};

export default AddProjectPage;
