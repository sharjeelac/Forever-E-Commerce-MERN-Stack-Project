import React from 'react'
import OurPolicyItem from './OurPolicyItem'
import { assets } from '../../assets/assets'

const OurPolicySection = () => {
  return (
    <div  className='my-20 flex flex-col sm:flex-row justify-around gap-12 sm:gap2 text-center py-5'>
      <OurPolicyItem icon={assets.exchange_icon} text1='Easy Exchange Policy' text2='We offer hassle for free Exchange'/>
      <OurPolicyItem icon={assets.quality_icon} text1='7 Days Return Policy' text2='We offer 7 days free return Policy'/>
      <OurPolicyItem icon={assets.support_img} text1='24/7 Customer Support' text2='We Provide 24/7 Customer Support  '/>
    </div>
  )
}

export default OurPolicySection

