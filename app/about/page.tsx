import Image from "next/image";
import Menu from "../components/Menu";
import Ayaan from "../components/images/Ayaan.png";
import TextRevel from "../components/TextRevel";

export default function about() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="m-5 mb-0">
        <Menu />

        <div className="mt-5">
          <TextRevel delay={0.5}>
            <h1 className="text-[50px] leading-[1.1] tracking-tight">
              &nbsp; &nbsp; &nbsp; &nbsp; I'm a freelance UI/UX designer and{" "}
              <span className="text-[#FF2F00]">
                began my career in web and front-end development in 2015
              </span>
              . I later transitioned into the design field, driven by a passion
              for web design, UI/UX, branding, and mobile application projects.
            </h1>
          </TextRevel>

          <div className="mt-8 flex justify-around items-center">
            <div>
              <Image className="h-auto w-44" src={Ayaan} alt={""} />
            </div>
              <div className="max-w-2xl flex flex-col gap-6">
            <TextRevel>
                <p className="text-[14.5px] uppercase tracking-tight leading-[1.4]">
                  I was born and raised in a small town in Kazakhstan called
                  Kyzylorda. When I enrolled in college in 2014 at the age of
                  15, I wasn’t sure what I wanted to do with my life. Initially,
                  I thought my profession would be related to the railway
                  industry. And Before delving into the world of web development
                  and design, I also worked as a waiter.
                </p>
            </TextRevel>
            <TextRevel animateOnScroll={false}>
                <p className="text-[14.5px] uppercase tracking-tight leading-[1.4]">
                  As a junior web developer I realized that I enjoyed the
                  creative aspect of my work more, and I made a full transition
                  into the field of design. Since then, I have worked as a
                  freelancer on platforms like upwork and collaborated with
                  companies and clients on a full-time or contract basis. I’ve
                  worked with prominent companies and clients.
                </p>
            </TextRevel>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
