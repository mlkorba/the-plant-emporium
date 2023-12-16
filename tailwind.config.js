/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    maxWidth: {
      container: '1520px',
      contentContainer: '1280px'
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xxl: '1400px'
      },
      backgroundImage: {
        succulents:
          'url("https://images.unsplash.com/photo-1519289776718-d7becf12a9f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      },
      colors: {
        oliveGreen: '#778A74',
        medGreen: '#324A49',
        jungleGreen: '#183E33',

        greyGreen: '#566269',
        slate: '#273339',
        darkPurple: '#54253a',
        lavender: '#A68191',

        raisin: '#353047',

        rosePink: '#ca93ac',
        medRosePink: '#8E4D6A',
        darkRosePink: '#935973'
      },
      boxShadow: {
        bannerShadow: '0 1px 2px 1 px #00000026'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  plugins: []
}
