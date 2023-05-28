/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#EBFAFF',
        secondary: '#5142F0'
      },
      backgroundImage: {
        wave: "url('/wave.svg')",
      },
      // dropShadow: {
      //   "xl":"0 20px 13px rgb(81, 66, 240, 0.08)",
      // }
    },
  },
  plugins: [],
}
