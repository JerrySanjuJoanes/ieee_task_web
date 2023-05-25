import { useState } from 'react'
import './App.css'
import Carousel from './components/carousel'
import Nav from './Components/Nav'
import Wmv from './Components/Wmv'
import Midcontainer from './Components/Midcontainer'
import Counter from './Components/Counter'
import Why from './Components/Why'
import Family from './Components/Family'
import Footer from './Components/Footer'
import Wave from 'react-wavify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav  />
      <Carousel/>
      <Wmv/>
      <Midcontainer/>
      <Counter/>
      {/* <Wave/> */}
      <Why/>

      <Family/>
      <Footer/>
      
    </>
  )
}

export default App
