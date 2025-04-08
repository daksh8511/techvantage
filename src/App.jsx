import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Introduction from './Components/Introduction/Introduction'
import FirstService from './Components/FirstService/FirstService'
import SecService from './Components/SecService/SecService'
import ThirdService from './Components/ThirdService/ThirdService'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <Introduction />
      <FirstService />
      <SecService />
      <ThirdService />
      <Contact />
      <Footer />
    </div>
  )
}

export default App