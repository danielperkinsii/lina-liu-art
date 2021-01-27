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
      backgroundColor: ['odd'],
      textDecoration: ['responsive', 'hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
    plugins: [],
  }