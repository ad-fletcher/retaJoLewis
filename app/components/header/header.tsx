"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (!isMobileView) setMobileOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#about") {
      const performScroll = () => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          const elementRect = aboutElement.getBoundingClientRect();
          const elementTop = elementRect.top + window.scrollY;
          const elementHeight = elementRect.height;
          const scrollPosition = elementTop + elementHeight / 2 - window.innerHeight / 2;
          
          window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: "smooth",
          });
        }
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(performScroll, 100);
    }
  }, [pathname]);

  const scrollToAboutMiddle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const performScroll = () => {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        const elementRect = aboutElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.scrollY;
        const elementHeight = elementRect.height;
        const scrollPosition = elementTop + elementHeight / 2 - window.innerHeight / 2;
        
        window.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
      }
    };

    if (pathname !== "/") {
      // If not on home page, navigate first
      router.push("/");
      setTimeout(performScroll, 300);
    } else {
      // Already on home page, scroll immediately
      performScroll();
    }
    
    setMobileOpen(false);
  };

  return (
    <header
      role="banner"
      className={
        "fixed inset-x-0 top-0 z-100 transition-colors duration-300" +
        (scrolled || mobileOpen
          ? isMobile && mobileOpen
            ? " bg-[#4a121b]"
            : " backdrop-blur supports-backdrop-filter:bg-[#4a121b]/60 bg-[#4a121b]/80"
          : " bg-transparent")
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="block select-none">
              <span className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-white">Reta Jo Lewis</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Speaking"
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  Speaking
                </Link>
              </li>
              <li>
                <Link
                  href="/Affiliations"
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  Affiliations
                </Link>
              </li>
              <li>
                <Link
                  href="/Vanderbilt"
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  Vanderbilt
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div
            id="mobile-nav"
            className={
              (mobileOpen ? "block" : "hidden") +
              " md:hidden absolute inset-x-0 top-full mt-1 z-101 rounded-b-lg border border-white/10 bg-[#4a121b] shadow-lg"
            }
          >
            <ul className="px-4 py-3 space-y-1">
              <li>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base text-gray-200 hover:text-white hover:bg-white/10">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Speaking" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base text-gray-200 hover:text-white hover:bg-white/10">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/Affiliations" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base text-gray-200 hover:text-white hover:bg-white/10">
                  Affiliations
                </Link>
              </li>
              <li>
                <Link href="/Vanderbilt" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base text-gray-200 hover:text-white hover:bg-white/10">
                  Vanderbilt
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-base text-gray-200 hover:text-white hover:bg-white/10">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}


