import React, { useState } from 'react'
import useFetchData from '../hooks/useElectronics';

const HomePage = () => {
  const [list, setList] = useState(false);
  const [category, setCategory] = useState("electronics"); 
  const { data, isLoading,error} = useFetchData(`https://fakestoreapi.com/products/category/${category}`);
  

  const handleListItem = (setItems) =>{
    setCategory(setItems);
  }

  const handleSideBar = () => {
    setList(prev => !prev);
  }

  return (
    <div className='max-h-screen h-screen w-full'>
        {/* navbar */}
        <div className='p-8 font-bold flex justify-end gap-8 bg-[#000000] text-white'>
            <span className='cursor-pointer'>Home</span>
            <span className='cursor-pointer'  onClick={handleSideBar}>Products</span>
            <span className='cursor-pointer'>Users</span>
            <span className='cursor-pointer'>Contact</span>
        </div>
        {/* body part && side-bar */}
        {list ? <div className='flex gap-2 border-b-blue-300 shadow-lg shadow-black m-1 min-w-1/6 min-h-96 mt-20'>
            <div className='bg-black text-white font-bold p-3 grid gap-y-8'>
                <div className='cursor-pointer' onClick={() => handleListItem("electronics")}>Electronics</div>
                <div className='cursor-pointer' onClick={() => handleListItem("jewelery")}>Jewelery's</div>
                <div className='cursor-pointer' onClick={() => handleListItem("men's clothing")}>Mens Clothing</div>
                <div className='cursor-pointer' onClick={() => handleListItem("women's clothing")}>Women's Clothing</div>
        </div>
        <div className="p-4">
  {isLoading && <p>Loading...</p>}
  {error && <p className="text-red-500">Error: {error}</p>}
  {!isLoading && !error && (
    <ul className="list-disc pl-5 grid gap-6">
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )}
</div>
        </div> : <div className='flex flex-col justify-center items-center h-screen gap-y-10 bg-gradient-to-br from-[#000000] to-[#3D0E13]'>
            <h1 className='text-4xl text-white'>Welcome to React</h1>
            <p className='max-w-4xl text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem id accusamus libero voluptate veritatis distinctio? Voluptates neque at quaerat odio asperiores nihil, eos sit repellat odit voluptate laudantium tempore impedit?
            Ab saepe nulla molestias dolorem suscipit laboriosam quia labore atque ea esse, similique repudiandae expedita nemo nam. Ex a consequuntur mollitia quis! Mollitia, corporis deleniti corrupti nemo perferendis explicabo repudiandae.</p>
            <button className='cursor-pointer border border-blue-600 p-1 text-blue-600 rounded-sm hover:text-blue-800 transition'>Explore More!!!</button>
        </div>}
    </div>
  )
}

export default HomePage