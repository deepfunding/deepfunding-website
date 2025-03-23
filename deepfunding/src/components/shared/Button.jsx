import React from 'react';

/**
 * Reusable Button component
 * @param {Object} props - Component props
 * @param {string} [props.href] - URL if button should be a link
 * @param {string} [props.type='button'] - Button type (button, submit, reset)
 * @param {string} [props.variant='primary'] - Style variant (primary, secondary)
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  ...rest 
}) => {
  const baseStyles = 
    "inline-block uppercase text-xs tracking-[2px] leading-[20px] font-offside font-bold transition-all duration-200";

  const variantStyles = {
    primary: 
      "bg-cream text-green-light hover:bg-[#32343a] hover:text-[#d9d5c5] hover:-translate-y-[2px] px-[25px] py-3",
    secondary: 
      "bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-green hover:-translate-y-[2px] px-[25px] py-3",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return href ? (
    <a href={href} className={buttonStyles} {...rest}>
      {children}
    </a>
  ) : (
    <button type={type} className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button; 