
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  onClick, 
  className = "", 
  fullWidth = false,
  variant = 'primary'
}) => {
  const baseStyles = "relative flex flex-col items-center justify-center transition-all duration-300 rounded-full font-semibold text-center overflow-hidden px-8 py-3 active:scale-[0.97]";
  
  const variants = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0071E3] shadow-sm",
    secondary: "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]",
    outline: "bg-transparent border border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/5"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : 'inline-flex'}
        ${className}
      `}
    >
      <span className={`${subtext ? 'text-lg' : 'text-base'}`}>{text}</span>
      {subtext && (
        <span className="text-[11px] opacity-70 font-medium mt-0.5 tracking-wide">
          {subtext}
        </span>
      )}
    </motion.button>
  );
};
