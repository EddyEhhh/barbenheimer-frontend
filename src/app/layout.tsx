'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { ThemeProvider, Box } from '@mui/material'
import  darkTheme  from './theme'
import CssBaseline from '@mui/material/CssBaseline';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout ({children}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className = "pt-10"> 
      <ThemeProvider theme = {darkTheme}> 
        <CssBaseline enableColorScheme/>
          <div> <Header/> </div>
          {children}
      </ThemeProvider>
      </body>
    </html>
  )
};
