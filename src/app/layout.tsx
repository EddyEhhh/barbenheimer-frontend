'use client'
import './globals.css'
import { Inter, Albert_Sans } from 'next/font/google'
import Header from './components/Header'
import { ThemeProvider, Box } from '@mui/material'
import  darkTheme  from './theme'
import CssBaseline from '@mui/material/CssBaseline';
const inter = Inter({ subsets: ['latin'] });
import { Suspense } from 'react'
import Footer from './footer'
import LoadingPage from './loading'
export default function RootLayout ({children}: {
  children: React.ReactNode
}) {
  return (

    <html>

      <body className={inter.className}> 
      <ThemeProvider theme = {darkTheme}> 
        <CssBaseline enableColorScheme/>
          <Header/> 
            <Box mt={8}>
              <Suspense fallback={<LoadingPage/>}>
                {children}
              </Suspense>
            </Box>
              <Footer></Footer>

      </ThemeProvider>
      </body>

    </html>

  )
};
