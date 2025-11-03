"use client";
import * as React from "react";
import styles from "./source.module.css";


export const LOGOS = [
  [
    <WEF key="1" />,
    <CFR key="2" />,
    <LCW key="3" />,
    <LeadingAuthorities key="4" />,
  ],
  [
    <AmericanLeadershipInitiative key="5" />,
    <EllisIsland key="6" />,
    <BlueStarFamilies key="7" />,
    <WEF key="8" />,
  ],
];

export function LogosCarousel({
  stagger,
  count,
}: {
  stagger?: number;
  count?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    }
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const logoCount = count ?? (isMobile ? 3 : 4);
  const logos = LOGOS[index].slice(0, logoCount);
  const logosNext = LOGOS[(index + 1) % LOGOS.length].slice(0, logoCount);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  React.useEffect(() => {
    if (!animate) {
      return;
    }

    function loop() {
      setIndex((index) => (index + 1) % LOGOS.length);
    }

    const interval = setInterval(loop, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [animate]);

  return (
    <div
      className={`${styles.root} max-w-[720px] w-full`}
    >
      <div
        key={`${index}-exit`}
        className={`${styles.carouselContainer} flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16`}
      >
        {logos.map((logo, index) => {
          return (
            <Logo
              key={index}
              state="exit"
              animate={animate}
              index={index}
              stagger={stagger}
            >
              {logo}
            </Logo>
          );
        })}
      </div>
      {animate && (
        <div
          key={`${index}-enter`}
          className={`${styles.carouselContainer} flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16`}
        >
          {logosNext.map((logo, index) => {
            return (
              <Logo
                key={index}
                state="enter"
                animate={animate}
                index={index}
                stagger={stagger}
              >
                {logo}
              </Logo>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Logo({
  children,
  animate,
  index,
  state,
  stagger = 0.14,
}: {
  children: React.ReactNode;
  animate?: boolean;
  index: number;
  state?: "enter" | "exit";
  stagger?: number;
}) {
  return (
    <div
      className={styles.logo}
      data-state={state}
      data-animate={animate ? "true" : "false"}
      style={
        {
          "--delay": `${index * stagger}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}




function CFR() {
  return (
    <img
      src="/cfr.svg"
      alt="Council on Foreign Relations"
    />
  );
}
function LCW() {
  return (
    <img
      src="/lcw.png"
      alt="Leadership Council on Women in National Security"
    />
  );
}
function WEF() {
  return (
    <img
      src="/wef.png"
      alt="World Economic Forum"
    />
  );
}
function LeadingAuthorities() {
  return (
    <img
      src="/leadingauthorities.png"
      alt="Leading Authorities, Inc."
    />
  );
}
function AmericanLeadershipInitiative() {
  return (
    <img
      src="/americanLeadershipInitiative.webp"
      alt="American Leadership Initiative"
    />
  );
}
function EllisIsland() {
  return (
    <img
      src="/ellisIsland.webp"
      alt="Ellis Island Medals of Honor Advisory Committee"
    />
  );
}
function BlueStarFamilies() {
  return (
    <img
      src="/blueStarFamilies.png"
      alt="Blue Star Families National Advisory Board"
    />
  );
}
