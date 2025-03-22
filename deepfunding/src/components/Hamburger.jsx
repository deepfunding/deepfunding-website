import { useState } from 'react';

export default function Hamburger({ id, ariaControls }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    const menu = document.getElementById(ariaControls);
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <button
      id={id}
      className="text-[#d9d5c5]"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      aria-controls={ariaControls}
      onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
} 