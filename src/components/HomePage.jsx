import React, { useState } from 'react'


const HomePage = () => {
    
  return (
    <div className='max-h-screen h-screen w-full'>
        <div className='flex flex-col justify-center items-center h-screen gap-y-10 bg-gradient-to-br from-[#000000] to-[#3D0E13]'>
            <h1 className='text-4xl text-white'>Welcome to React</h1>
            <p className='max-w-4xl text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem id accusamus libero voluptate veritatis distinctio? Voluptates neque at quaerat odio asperiores nihil, eos sit repellat odit voluptate laudantium tempore impedit?
            Ab saepe nulla molestias dolorem suscipit laboriosam quia labore atque ea esse, similique repudiandae expedita nemo nam. Ex a consequuntur mollitia quis! Mollitia, corporis deleniti corrupti nemo perferendis explicabo repudiandae.</p>
            <button className='cursor-pointer border border-blue-600 p-1 text-blue-600 rounded-sm hover:text-blue-800 transition'>Explore More!!!</button>
        </div>
    </div>
  )
}

export default HomePage