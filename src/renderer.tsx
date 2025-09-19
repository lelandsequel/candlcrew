import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Taberna Restaurant Training Game</title>
        
        {/* TailwindCSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* FontAwesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'taberna': {
                      50: '#fef7ee',
                      100: '#fdedd3',
                      200: '#fbd7a5',
                      300: '#f8bb6d',
                      400: '#f49532',
                      500: '#f1770a',
                      600: '#e25d05',
                      700: '#bb4508',
                      800: '#95360e',
                      900: '#792e0f',
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body class="bg-gray-50 font-sans">
        {children}
        
        {/* Axios for API calls */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        
        {/* Custom JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
