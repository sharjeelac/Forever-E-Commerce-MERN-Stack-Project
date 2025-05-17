import React from 'react'

import { NavLink } from 'react-router-dom'

const NavButton = ({btnName, btnPath}) => {
  return (
    <div>
      <NavLink to={btnPath} className='flex flex-col items-center gap-1'>
        <p>{btnName}</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>
    </div>
  )
}

export default NavButton

