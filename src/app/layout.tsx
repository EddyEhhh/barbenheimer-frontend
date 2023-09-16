'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { ThemeProvider, Box } from '@mui/material'
import  darkTheme  from './theme'
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout ({children}: {
  children: React.ReactNode
}) {
  return (
      <ThemeProvider theme = {darkTheme}> 
        <CssBaseline enableColorScheme/>
        <html>
          <body className = "pt-10"> {children} </body>
          <Header/>
        </html>
      </ThemeProvider>
  )
};
