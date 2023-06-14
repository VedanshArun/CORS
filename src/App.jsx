/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import About from './components/About'
import CORSMsgs from './components/CORSMsgs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Solution from './components/Solution'

const App = () => {
  return (
    <>
        <div className="main">
            <div className='gradient'>
            </div>
        </div>
        <div className='app'>
            <Hero/>
            <About/>
            <CORSMsgs/>
            <Solution/>
            <Footer/>
        </div>
    </>
  )
}

export default App