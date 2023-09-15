import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useContextGlobal } from './Components/utils/global.context';

function App() {

  const { state } = useContextGlobal()

  useEffect(() => {
    document.body.className = `theme-${state.theme}`
    console.log(state.theme)
  }, [state.theme])


  return (
    <BrowserRouter >
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
