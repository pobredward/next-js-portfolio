/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
      },
      fontFamily: {
        body: ['Helvetica', 'Arial', 'sans-serif'],
      },
      // Define your custom classes here
      // For example:
      customClasses: {
        'btn': {
          padding: '10px 20px',
          borderRadius: '4px',
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          fontWeight: 'bold',
          '@apply hover:bg-gray-500': '',
        },
      },
    },
  },
  plugins: [],
}
