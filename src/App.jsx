import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Projects';
import {Toaster} from "react-hot-toast";
import Footer from './components/Footer';

function App() {

  return (
    <>
    <div>
     <Header/>
     <HeroSection/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
     <Toaster/>
    </>
  )
}

export default App
