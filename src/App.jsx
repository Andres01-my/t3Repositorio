//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '.public/img/vite.svg'
//import './App.css'
import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content } from './features/layout/components/Content'
//components view
import { Article } from './features/views/components/Article'
import { Offers } from './features/views/components/Offers'
// Components auth
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorities } from './features/auth/components/Myfavorities'
// React Dom
import { HashRouter, Routes, Route } from "react-router-dom"
// EDITADO - Import FavoritesProvider
import { FavoritesProvider } from './context/FavoritesContext'
// EDITADO - Import MUI ThemeProvider
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// EDITADO - Gaming theme configuration
const gamingTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c3aed', // Violet/Purple gaming color
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    secondary: {
      main: '#06b6d4', // Cyan/Neon accent
      light: '#22d3ee',
      dark: '#0891b2',
    },
    background: {
      default: '#0f0f1a', // Dark background
      paper: '#1a1a2e',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
        },
      },
    },
  },
});


function App() {


  return (
    <>
      {/* EDITADO - Wrap application with ThemeProvider and FavoritesProvider */}
      <ThemeProvider theme={gamingTheme}>
        <CssBaseline />
        <FavoritesProvider>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Content />}></Route>
              <Route path='/article' element={<Article />}></Route>
              <Route path='/offers' element={<Offers />}></Route>
              <Route path='/myaccount' element={<Myaccount />}></Route>
              <Route path='/mybuys' element={<Mybuys />}></Route>
              <Route path='/myfavorities' element={<Myfavorities />}></Route>
            </Routes>
            <Footer></Footer>

          </HashRouter>
        </FavoritesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
