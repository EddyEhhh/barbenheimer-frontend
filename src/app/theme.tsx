import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const darkTheme = createTheme(
    {
      palette: {
        mode: 'dark',
      },
      typography: {
        fontFamily: `${inter}`
      },
    }
  );

export default darkTheme;