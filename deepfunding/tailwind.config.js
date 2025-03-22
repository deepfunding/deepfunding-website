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

        // Brand color palette
        cream: {
          DEFAULT: "#d9d5c5",
          dark: "#c9c5b6",
        },
        green: {
          DEFAULT: "#17301c",
          medium: "#465058",
          light: "#808782",
        },
        yellow: {
          DEFAULT: "#f5ff67",
          bright: "#f5ff67", // Alias for consistency
        },
        orange: {
          DEFAULT: "#ff7846",
        },
        "deep-green": "hsl(var(--deep-green))",
        "highlight-yellow": "hsl(var(--highlight-yellow))",
        "border-light": "#e4ebf3",
        text: {
          light: "#666",
          DEFAULT: "#333",
          medium: "#3f4c51",
        },
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
