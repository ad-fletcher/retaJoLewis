"use client";
import * as React from "react";
import styles from "./source.module.css";


export const LOGOS = [
  [
    <WEF key="1" />,
    <ExportImport key="2" />,
    <CFR key="3" />,
    <GMF key="4" />,
  ],
  [
    <LCW key="5" />,
    <State key="6" />,
    <REA key="7" />,
    <IWF key="8" />,
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

  const logos = LOGOS[index].slice(0, count ?? LOGOS[index].length);
  const logosNext = LOGOS[(index + 1) % LOGOS.length].slice(0, count ?? LOGOS[(index + 1) % LOGOS.length].length);

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




function ExportImport() {
  return (
    <img
      src="/exportImport.svg"
      alt="ExportImport"
    />
  );
}

function IWF() {
  return (
    <img
      src="/iwf.png"
      alt="Internatioal Womens Forum"
    />
  );
}
function CFR() {
  return (
    <img
      src="/cfr.svg"
      alt="Counicl on Foreign Relations"
    />
  );
}
function GMF() {
  return (
    <img
      src="/gmf.jpg"
      alt="German Marshall Fund"
    />
  );
}
function LCW() {
  return (
    <img
      src="/lcw.svg"
      alt="lcw"
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
function State() {
  return (
    <img
      src="/stateDep.png"
      alt="World Economic Forum"
    />
  );
}
function REA() {
  return (
    <img
      src="/rea.svg"
      alt="Rare Earths Americas"
    />
  );
}
