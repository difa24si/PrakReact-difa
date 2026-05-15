/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        latar: "#f3f4f6",
        teks: "#374151",
        teksSamping: "#6b7280",
        garis: "#e5e7eb",
        hijau: "#00B074",
        merah: "#ef4444",
        biru: "#1A4B9F",
      },
    },
  },
  plugins: [],
}