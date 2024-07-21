import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Resources from './Pages/Resources';
import About from './Pages/About';

// Import your roadmap page components
import SoftwareDevelopment from './components/Roadmaps/SoftwareDevelopment';
import AI_ML from './components/Roadmaps/AI_ML';
import DataScience from './components/Roadmaps/DataScience';
import Cybersecurity from './components/Roadmaps/Cybersecurity';


const App = () => {
  return (
    <div className='w-screen'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} />

          {/* Roadmap Routes */}
          <Route path='/software-development' element={<SoftwareDevelopment/>} />
          <Route path='/ai-ml' element={<AI_ML/>} />
          <Route path='/data-science' element={<DataScience />} />
          <Route path='/cybersecurity' element={<Cybersecurity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
