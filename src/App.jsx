import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Hero } from './components/template/pocket/Hero'
import { Header } from './components/template/pocket/Header'
import { PrimaryFeatures } from './components/template/pocket/PrimaryFeatures'
import { Team } from './components/template/keynote/Speakers'
import { Footer } from './components/template/pocket/Footer'

import { SecondaryFeatures } from './components/template/pocket/SecondaryFeatures'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
  
      <Header />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures/>
      {/* <NextFeatures/> */}
      {/* <Timeline /> */}
      <Team />
      <Footer />
    </>
  )
}

export default App
