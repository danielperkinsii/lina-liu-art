module.exports = {
    purge: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}'
    ],
    theme: {
      extend: {
        
      },
    },
    variants: {
      textDecoration: ['responsive', 'hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
    plugins: [],
  }