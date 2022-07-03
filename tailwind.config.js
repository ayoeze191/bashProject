/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/**.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/bac.jpg')",
      },
      fontFamily: {
      'Poppins-Regular': ['Poppins-Regular'],
      'Poppins-Bold': ['Poppins-Bold'],
      'Inter-Black': ['Inter-Black']
      }
  },
  plugins: [],
}
}
