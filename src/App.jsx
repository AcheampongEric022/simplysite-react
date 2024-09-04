import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from "./Components/Hero/Hero"
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from "./Components/About/About"
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Tesimonials'
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"


function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "Our Programs" Title="What We Offer"/>
        <Programs />
      </div>
      <About />
      <div id='Campus'></div>
      <Title subTitle = "Gallery" Title="Campus Photos"/>
      <Campus />
      <Title subTitle = "TESTIMONIALS" Title="What Our Students Say"/>
      <Testimonials />
      <Title subTitle = "Contact Us" Title="get In Touch"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
