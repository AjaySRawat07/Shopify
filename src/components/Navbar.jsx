import React from 'react'

const Navbar = () => {
  return (
<div className='p-8 font-bold flex justify-end gap-8 bg-[#000000] text-white'>
    <span className='cursor-pointer'>Home</span>
    <span className='cursor-pointer'>Products</span>
    <span className='cursor-pointer'>Users</span>
    <span className='cursor-pointer'>Contact</span>
</div>
  )
}

export default Navbar