import React from 'react'
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Resources from './Pages/Resources';
import About from './Pages/About';

const App = () => {
  return (
    <div className='w-screen'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
