/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-tl-br-profits' : 'linear-gradient(to bottom right, rgba(121, 241, 164, 1), rgba(14, 92, 173, 1))',
        'gradient-tl-br-tax-liability' : 'linear-gradient(to bottom right, rgba(255, 152, 101, 1), rgba(239, 48, 49, 1))',
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
