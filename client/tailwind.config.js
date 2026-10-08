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
        tint: "var(--color-tint)",
        dark: "var(--color-dark)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft:
          "0 18px 50px color-mix(in srgb, var(--color-primary-dark) 8%, transparent)",
        lift:
          "0 24px 70px color-mix(in srgb, var(--color-primary-dark) 16%, transparent)"
      },
      backgroundImage: {
        "hero-wine":
          "radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--color-primary-light) 42%, transparent), transparent 34%), linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary-dark) 48%, var(--color-primary) 100%)"
      }
    }
  },
  plugins: []
};
