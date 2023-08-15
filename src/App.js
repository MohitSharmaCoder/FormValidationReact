import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
// import Section1 from './components/pages/Section1';
import './components/css/Section1.css'
import Section2 from './components/pages/Section2';

const App = () => {
  return (
    <>
      <Navbar />

      <Section2 />

    </>
  )
}

export default App

