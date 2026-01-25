"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

gsap.registerPlugin(ScrollTrigger);

interface StickyCardData {
  index: string;
  title: string;
  image: StaticImageData;
  description: string;
}

export default function ProjectCard() {
  const stickyCardsData: StickyCardData[] = [
    {
      index: "01",
      title: "TaskFlow Manager",
      image: img1,
      description:
        "Responsive task management web application improving team productivity through real-time collaboration, notifications, role-based access, and intuitive user interface design principles.",
    },
    {
      index: "02",
      title: "SalesTrend Predictor",
      image: img2,
      description:
        "Machine learning sales forecasting system using historical data to predict trends, enhance accuracy, support strategic planning, and optimize business decisions.",
    },
    {
      index: "03",
      title: "FinanceTrack Mobile App",
      image: img3,
      description:
        "Mobile personal finance tracking application enabling expense categorization, budgeting, secure authentication, analytics dashboards, and improved financial awareness for users globally.",
    },
    {
      index: "04",
      title: "DataStream Automation",
      image: img4,
      description:
        "Automated data processing pipeline that cleans, transforms, and analyzes large datasets, reducing manual work and accelerating reporting insights delivery timelines.",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".sticky-card");

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: cards[cards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(card, {
                scale: 1 - progress * 0.25,
                rotation: (index % 2 === 0 ? 5 : -5) * progress,
                "--after-opacity": progress,
              });
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {stickyCardsData.map((card, index) => (
        <div
          key={index}
          className="sticky-card relative flex h-svh w-full gap-12 bg-white text-background p-6 will-change-transform
                     max-[1000px]:flex-col max-[1000px]:gap-0"
          style={{ "--after-opacity": 0 } as React.CSSProperties}
        >
          {/* Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-black/50 opacity-(--after-opacity) transition-opacity duration-100"
            aria-hidden
          />

          {/* Index */}
          <div className="flex-2 max-[1000px]:flex-1">
            <h1 className="text-6xl font-bold">{card.index}</h1>
          </div>

          {/* Content */}
          <div className="flex-4 pt-6">
            <div className="flex w-3/4 flex-col gap-6 max-[1000px]:w-full">
              <h1 className="w-3/4 text-3xl font-semibold">{card.title}</h1>

              <div className="w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="aspect-5/3 w-full object-cover"
                  sizes="(max-width: 1000px) 100vw, 75vw"
                />
              </div>

              <div className="flex gap-6 max-[1000px]:flex-col max-[1000px]:gap-2">
                <div className="flex-2">
                  <p className="uppercase font-semibold tracking-wide">
                    (About the state)
                  </p>
                </div>

                <div className="flex-4">
                  <p className="leading-relaxed text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
