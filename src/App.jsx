import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Features from './components/Features'
import Performance from './components/Performance'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import Showcase from './components/Showcase'

gsap.registerPlugin(ScrollTrigger, SplitText); 

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App