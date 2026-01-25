"use client";

import React, { useCallback, useRef, ReactElement, ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  triggerOnEvent?: string;
}

export default function TextRevel({
  children,
  animateOnScroll = true,
  delay = 0,
  triggerOnEvent,
}: CopyProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  const setElementRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  const setDivRef = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "lines++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps: gsap.TweenVars = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay,
      };

      let tween: gsap.core.Tween | null = null;
      let scrollInstance: ScrollTrigger | null = null;
      let eventHandler: (() => void) | null = null;

      const runAnimation = () => {
        tween?.kill();
        tween = gsap.to(lines.current, animationProps);
      };

      const eventName = triggerOnEvent?.trim();

      if (eventName) {
        eventHandler = () => {
          runAnimation();
          window.removeEventListener(eventName, eventHandler!);
        };

        window.addEventListener(eventName, eventHandler);
      } else if (animateOnScroll) {
        scrollInstance = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
          onEnter: runAnimation,
        });
      } else {
        runAnimation();
      }

      return () => {
        tween?.kill();
        scrollInstance?.kill();
        if (eventName && eventHandler) {
          window.removeEventListener(eventName, eventHandler);
        }
        splitRef.current.forEach((split) => split?.revert());
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, triggerOnEvent],
    },
  );

  const isSingleElement = React.Children.count(children) === 1;
  const isIntrinsicElement =
    isSingleElement &&
    React.isValidElement(children) &&
    typeof children.type === "string";

  if (isIntrinsicElement) {
    return React.cloneElement(
      children as ReactElement,
      {
        ref: setElementRef,
      } as any,
    );
  }

  return (
    <div
      ref={setDivRef}
      data-copy-wrapper={isSingleElement ? undefined : "true"}
    >
      {children}
    </div>
  );
}
