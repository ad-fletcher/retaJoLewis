"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle hash navigation
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const performScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      setTimeout(performScroll, 100);
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SPEAKING", href: "/Speaking" },
    { name: "VANDERBILT", href: "/Vanderbilt" },
    { name: "CONTACT", href: "/Contact" },
  ];

  return (
    <header
      role="banner"
      className="relative bg-white z-50"
    >
      {/* Top Section with Logo */}
      <div className="relative border-b border-[#d4af37]/30 bg-white py-4 md:pt-6 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center gap-3 md:gap-4 relative">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-3 md:gap-4 w-full px-8 md:px-0">
            <Link href="/" className="block select-none group text-center">
              <span className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#720e1e] tracking-tight uppercase group-hover:opacity-90 transition-opacity block" style={{ fontFamily: 'Didot, "Playfair Display", serif' }}>
                Reta Jo Lewis
              </span>
            </Link>
            
            <div className="flex items-center w-full max-w-2xl gap-4">
               <div className="h-px bg-[#d4af37] flex-1 hidden md:block"></div>
               <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-gray-900 uppercase text-center leading-relaxed px-2 md:px-0">
               Advancing U.S. economic competitiveness, trade, and global investment through visionary policy leadership.               </p>
               <div className="h-px bg-[#d4af37] flex-1 hidden md:block"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 text-gray-900 hover:text-[#d4af37] transition-colors z-50"
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
        </div>
      </div>

      {/* Bottom Navigation Bar - Desktop */}
      <div className="bg-[#f5f0e6] hidden md:block">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex justify-center">
            <ul className="flex items-center gap-8 lg:gap-16 py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                <Link
                    href={link.href}
                    className={`text-xs font-medium tracking-[0.15em] transition-colors duration-300 hover:text-[#d4af37] uppercase ${
                      pathname === link.href ? "text-[#d4af37]" : "text-gray-900"
                    }`}
                >
                    {link.name}
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Gold Line Separator - Desktop */}
      <div className="h-1 bg-[#d4af37] hidden md:block"></div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#f5f0e6] shadow-2xl md:hidden z-50 transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside mobile menu */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-900 hover:text-[#d4af37] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="pt-16 pb-8 px-6 h-full flex flex-col">
          {/* Gold accent bar */}
          <div className="w-12 h-1 bg-[#d4af37] mb-8"></div>

          <nav className="flex-1">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-base font-medium tracking-[0.15em] uppercase transition-colors border-b border-[#d4af37]/20 ${
                      pathname === link.href 
                        ? "text-[#d4af37]" 
                        : "text-gray-900 hover:text-[#d4af37]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Gold Line Separator - Mobile (shown below header) */}
      <div className="h-0.5 bg-[#d4af37] md:hidden"></div>
    </header>
  );
}
