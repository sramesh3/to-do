/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gGrey: "#5f6368"
      },
      fontFamily: {
        gFont: '"Product Sans",Arial,sans-serif'
      },
      textIndent: {
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '8': '2rem',
      }
    },
  },
  variants: {
    extend: {
      textIndent: ['responsive'],  // Add other variants if needed
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-indent-0': {
          textIndent: '0',
        },
        '.text-indent-1': {
          textIndent: '0.25rem',
        },
        '.text-indent-2': {
          textIndent: '0.5rem',
        },
        '.text-indent-4': {
          textIndent: '1rem',
        },
        '.text-indent-8': {
          textIndent: '2rem',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

