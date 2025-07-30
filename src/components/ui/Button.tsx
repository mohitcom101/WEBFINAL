import React from 'react'
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-secondary focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-primary focus:ring-secondary',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      },
      size: {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | null;
  size?: "sm" | "md" | "lg" | null;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <motion.button
      className={clsx(buttonVariants({ variant, size }), className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...(props as any)} // ✅ to avoid TypeScript mismatch from HTMLButtonAttributes vs motion.button
    >
      {children}
    </motion.button>
  );
};

export default Button;