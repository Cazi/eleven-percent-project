import React from 'react'
import About from '../molecules/About'
import DataVis from '../molecules/DataVis'
import Discussion from '../molecules/Discussion'
import Heading from '../molecules/Heading'
import '../style/AboutStyle.css'
const Home = () => {
  return (
    <div className='home'>
      <Heading/>
      <About/>
      <Discussion/>
      <DataVis/>
    </div>
  )
}

export default Home