import type { Metadata } from "next";
import Menu from "../components/Menu";
import TextRevel from "../components/TextRevel";

export const metadata: Metadata = {
  title: "Contact | ayaan.me",
  description:
    "Reach out to collaborate or start a conversation with Ayaan Murshed Khan.",
};

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="m-5 mb-0">
        <Menu />

        <div className="flex flex-col gap-10">
          <TextRevel>
            <div className="mt-18">
              <h1 className="text-[36px] leading-[1.3] tracking-tight">
                Hey Alex, my name is{" "}
                <span className="text-[#FF2F00]">[your first name]</span>. I
                would like to start a new project with you. I’m looking for{" "}
                <span className="text-[#FF2F00]">[type a service]</span>. The
                timing for this project is{" "}
                <span className="text-[#FF2F00]">[timeframe]</span>. The budget
                is <span className="text-[#FF2F00]">[your budget]</span>. You
                can reach me via email at{" "}
                <span className="text-[#FF2F00]">[your email]</span>.
              </h1>
            </div>
          </TextRevel>

          <div className="w-fit px-2.5 flex justify-center text-md border rounded-xl uppercase tracking-tighter cursor-pointer">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}
