/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors extracted from the CSS
        "deep-green": "hsl(var(--deep-green))",
        "highlight-yellow": "hsl(var(--highlight-yellow))",
        cream: "#d9d5c5",
        "cream-dark": "#c9c5b6",
        "green-dark": "#17301c",
        "green-medium": "#465058",
        "green-light": "#808782",
        "yellow-bright": "#f5ff67",
        orange: "#ff7846",
        "border-light": "#e4ebf3",
        "text-light": "#666",
        "text-dark": "#333",
        "text-medium": "#3f4c51",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        stencil: ['"Big Shoulders Stencil Display"', "Arial", "sans-serif"],
        offside: ["Offside", "Verdana", "sans-serif"],
        public: ['"Public Sans"', "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
