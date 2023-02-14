import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <div className='nav-links'>
    <Link to="/">Home</Link>{' '}
    <Link to="/About">About</Link>{' '}
    <Link to="/Contact">Contact</Link>{' '}
    </div>
      <Routes>
          <Route  path='/' element={<Home/ >} />
          <Route  path='/About' element={<About/ >} />
          <Route  path='/Contact' element={<Contact/ >} />

      </Routes>
    
    </BrowserRouter>


  );
}

export default App;
