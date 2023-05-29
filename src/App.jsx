import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portafoglio from './components/portafoglio/Portafoglio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certifications from './components/certifications/Certifications';



const App = () => {
  return (
  <>
    <Header />
    <Nav />
    <About />
    <Certifications />
    <Experience />
    <Portafoglio />
    <Contact />
    <Footer />

  </> 
  )
}

export default App;
