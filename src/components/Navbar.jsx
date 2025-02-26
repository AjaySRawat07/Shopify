import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='p-8 font-bold flex justify-end gap-8 bg-[#000000] text-white'>
    <Link to="/" className='cursor-pointer'>Home</Link>
    <Link to="/products" className='cursor-pointer'>Products</Link>
    <Link to="/users" className='cursor-pointer'>Users</Link>
    <Link to="/contact" className='cursor-pointer'>Contact</Link>
</div>
  )
}

export default Navbar