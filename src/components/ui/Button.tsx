import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'bg-[var(--color-primary-base)] text-white hover:bg-[var(--color-primary-dark-base)] shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    outline: 'border border-[var(--color-primary-base)] text-[var(--color-primary-base)] hover:bg-[var(--color-primary-base)] hover:text-white',
    ghost: 'text-[var(--text-color)] hover:bg-[var(--border-color)]'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
