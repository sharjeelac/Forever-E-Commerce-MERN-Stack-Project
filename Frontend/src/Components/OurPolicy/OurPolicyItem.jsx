import React from 'react'

const OurPolicyItem = ({icon, text1, text2}) => {
  return (
    <div>
      <img src={icon} className='w-12 m-auto mb-5' alt="icon`" />
      <p className='font-semibold'>{text1}</p>
      <p className='text-gray-400'>{text2}</p>
    </div>
  )
}

export default OurPolicyItem

