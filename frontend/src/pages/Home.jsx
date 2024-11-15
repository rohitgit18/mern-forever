import React from 'react'
import Hero from '../components/Hero.jsx'
import LetestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OverPolicy from '../components/OverPolicy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />
      <BestSeller />
      <OverPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
