"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ArrowButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ArrowButton({ text, href, onClick, size = 'md', className }: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const arrowSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const motionProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 25,
    },
    className: cn(
      "relative bg-[#720e1e] text-white font-medium rounded-none shadow-lg overflow-hidden cursor-pointer border border-[#720e1e]",
      sizeClasses[size],
      className
    ),
  };

  const content = (
    <>
      {/* Subtle hover background */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.03 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content wrapper */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <motion.span
          animate={{ x: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {text}
        </motion.span>
        <motion.span
          className="hidden md:inline-flex"
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ArrowRight size={arrowSizes[size]} strokeWidth={2} />
        </motion.span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          {...motionProps}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}