import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-xs font-medium rounded-md",
      md: "px-4 py-2.5 text-sm font-semibold rounded-lg",
      lg: "px-6 py-3 text-base font-semibold rounded-lg",
      xl: "px-8 py-4 text-lg font-bold rounded-xl tracking-wide",
    };

    const variantClasses = {
      primary:
        "bg-forest-800 text-cream-50 hover:bg-forest-700 active:bg-forest-900 border border-forest-900 shadow-sm focus:ring-2 focus:ring-forest-600 focus:ring-offset-2",
      secondary:
        "bg-bronze-500 text-white hover:bg-bronze-600 active:bg-bronze-700 border border-bronze-600 shadow-sm focus:ring-2 focus:ring-bronze-400 focus:ring-offset-2",
      accent:
        "bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 border border-amber-700 shadow-sm focus:ring-2 focus:ring-amber-500",
      outline:
        "bg-transparent text-forest-800 border-2 border-forest-800 hover:bg-forest-50 active:bg-forest-100 focus:ring-2 focus:ring-forest-700",
      ghost:
        "bg-transparent text-charcoal-800 hover:bg-cream-200 active:bg-cream-300 border border-transparent",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
