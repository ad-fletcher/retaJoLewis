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
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className={cn(
        "relative bg-[#720e1e] text-white font-medium rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-[#720e1e]",
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