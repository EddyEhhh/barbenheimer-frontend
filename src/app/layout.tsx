'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { ThemeProvider, Box } from '@mui/material'
import  darkTheme  from './theme'
import CssBaseline from '@mui/material/CssBaseline';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({children}: {
  children: React.ReactNode
}) {
  return (
      <ThemeProvider theme = {darkTheme}> 
        <CssBaseline enableColorScheme/>
        <html>
          <body className={`w-full ${inter.className}`}> {children} </body>
          <Header/>
        </html>
      </ThemeProvider>
  )
};
