import { useNavigate } from "react-router-dom";
import Line from "../components/Line";
import { FileText } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div>
        <p className="text-4xl text-center">Hi, My name is</p>
        <div className="flex items-center gap-6 mt-8">
          <Line />{" "}
          <h1 className="prata-regular text-6xl">Ayaan Murshed Khan</h1>{" "}
          <Line />
        </div>
      </div>
      <p className="text-center text-2xl text-gray-500 mt-6 source-serif">
        Welcome to my website ...
      </p>
      <div className="w-full flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-2 border-2 border-black bg-black text-white rounded-2xl"
        >
          Projects
        </button>
        <button
          onClick={() => window.open("/Ayaan_Resume.pdf", "_blank")}
          className="px-6 py-2 border-2 border-black rounded-2xl flex gap-2 items-center"
        >
          Resume{" "}
          <FileText
            className="h-[18px] w-[18px] text-gray-950"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
