/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        tint: "var(--color-tint)",
        dark: "var(--color-dark)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        grid: "var(--color-grid)",
        overlay: "var(--color-overlay)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft:
          "0 18px 50px color-mix(in srgb, var(--color-dark) 34%, transparent)",
        lift:
          "0 30px 90px color-mix(in srgb, var(--color-dark) 52%, transparent)"
      },
      backgroundImage: {
        "hero-wine":
          "radial-gradient(circle at 15% 18%, color-mix(in srgb, var(--color-primary) 34%, transparent), transparent 34%), radial-gradient(circle at 82% 22%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 28%), linear-gradient(135deg, var(--color-dark) 0%, var(--color-bg) 50%, var(--color-primary-dark) 100%)"
      }
    }
  },
  plugins: []
};
