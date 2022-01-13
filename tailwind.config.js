module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'rubik-MonoOne': ['Rubik Mono One', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif'],
        },
        extend: {
            colors:{
                'background': '#FBF3E8',
                'brand-blue': '#032830',
                'brand-gray': '#7C6C77',
                'brand-green': '#479F76',
                'brand-orange': '#FD7E14',
            },
            backgroundImage: {
                'back_svg': 'url("/background.svg")',
            },
        }
    },
    plugins: [],
  }