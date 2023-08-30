import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Palette } from '@mui/icons-material';

// const darkTheme = createTheme(
//   {
//     palette: {
//       mode: 'dark'
//     }
//   }
// );

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({children,}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Header></Header>
        <main className={inter.className}> {children} </main>
    </>
  )
};
