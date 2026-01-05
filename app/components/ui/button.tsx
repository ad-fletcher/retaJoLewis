import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhysicsButtonProps {
  text: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export default function PhysicsButton({ text, onClick, size = 'md', className, icon }: PhysicsButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-xs tracking-widest',
    md: 'px-8 py-3 text-sm tracking-widest',
    lg: 'px-10 py-5 text-base tracking-widest',
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className={cn(
        "relative bg-[#1a1a1a] text-white font-medium uppercase border border-[#1a1a1a] shadow-sm hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors duration-300",
        sizeClasses[size],
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
        {icon}
      </span>
    </motion.button>
  );
}
