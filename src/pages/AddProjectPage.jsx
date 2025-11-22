import { ArrowLeft, ImagePlus, Plus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProjectPage = () => {
  const [image, setImage] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="min-h-screen mt-4 lg:mt-8 px-auto md:px-10 lg:px-15">
      <button
        onClick={() => navigate("/projects")}
        className="px-2 sm:px-3 py-2 sm:py-2 bg-[#D97757] text-white gap-1.5 rounded-xs text-xs sm:text-sm hover:bg-[#d97857ea] transition-colors flex items-center mb-2 sm:mb-4"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        <span className="hidden sm:block">Back</span>
      </button>

      <label className="text-sm lg:text-lg text-gray-800">Project Image</label>
      <label htmlFor="image">
        <div className="h-45 md:h-70 w-full sm:w-[40vw] mt-1 mb-1.5 md:mb-2.5 border-2 border-dashed border-gray-200 flex justify-center items-center cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-xs">
          {!image ? (
            <ImagePlus className="text-gray-400" />
          ) : (
            <img
              className="h-full w-full object-cover rounded-xs p-0.5"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
        </div>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
        />
      </label>

      <div className="mb-1.5 md:mb-2.5">
        <label className="text-sm lg:text-lg text-gray-800">
          Project Title
        </label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-200 rounded-xs"
        />
      </div>

      <div className="mb-1.5 md:mb-2.5">
        <label className="text-sm lg:text-lg text-gray-800">Github Link</label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-200 rounded-xs"
        />
      </div>

      <div className="mb-1.5 md:mb-2.5">
        <label className="text-sm lg:text-lg text-gray-800">Domain</label>
        <input
          type="text"
          className="w-full mt-1 py-1 px-1.5 border bg-gray-100 border-gray-200 rounded-xs"
        />
      </div>

      <button className="w-full sm:w-auto flex justify-center items-center px-2.5 sm:px-8 py-2 mt-3 sm:mt-4 border-2 border-black bg-black text-white gap-1.5 sm:gap-2 rounded-xs text-xs sm:text-sm hover:bg-gray-800 transition-colors">
        Add <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
};

export default AddProjectPage;
