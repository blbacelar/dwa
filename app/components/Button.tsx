interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-bold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "cta-button",
    secondary: "bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400/10"
  };
  
  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-4 px-8 text-base",
    lg: "py-5 px-10 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 