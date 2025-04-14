
import './App.scss'
import Topbanner from './components/Topbanner'
import Hero from './components/Hero'
import { useState } from 'react'
import Header from './components/Header'
function App() {

  const [topBanner, setTopBanner]=useState('')

  const upTopBanner =()=>{
    setTopBanner('up')
  }

  return (
    <div className={`app-container ${topBanner}`}>
      <Topbanner onClick={upTopBanner} />
      <Header/>
      <Hero/>

    </div>
  )
}

export default App
