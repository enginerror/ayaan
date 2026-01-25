"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import cardImage from "./images/down-arrow.png";

const Marquee = () => {
  const currentScroll = useRef(0);
  const isScrollingDown = useRef(true);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const arrows = document.querySelectorAll(".arrow");

    tweenRef.current = gsap
      .to(".marquee-part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee-inner", { xPercent: -50 });

    const onScroll = () => {
      if (window.pageYOffset > currentScroll.current) {
        isScrollingDown.current = true;
      } else {
        isScrollingDown.current = false;
      }

      gsap.to(tweenRef.current!, {
        timeScale: isScrollingDown.current ? 1 : -1,
      });

      arrows.forEach((arrow) => {
        if (isScrollingDown.current) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll.current = window.pageYOffset;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = Array(5).fill("my work");

  return (
    <>
      {/* Marquee */}
      <section className="relative overflow-hidden bg-[#0f0f0f] py-8 text-9xl font-semibold uppercase text-[#eee]">
        <div className="marquee-inner flex w-fit flex-row">
          {items.map((text, index) => (
            <div
              key={index}
              className="marquee-part flex shrink-0 items-center px-1"
            >
              {text}
              <div className="arrow mx-4 h-20 w-15 rotate-90 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]">
                <Image src={cardImage} alt="arrow" width={70} height={70} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arrow active state */}
      <style jsx global>{`
        .arrow.active {
          transform: rotate(-180deg);
        }
      `}</style>
    </>
  );
};

export default Marquee;
