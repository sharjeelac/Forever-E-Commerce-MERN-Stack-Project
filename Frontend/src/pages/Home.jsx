import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicySection from '../Components/OurPolicy/OurPolicySection'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicySection/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
