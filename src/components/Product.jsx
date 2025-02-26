import React, { useState } from 'react'
import useFetchData from '../hooks/useElectronics';

const Product = () => {
    const [category, setCategory] = useState("electronics"); 
    const { data, isLoading,error} = useFetchData(`https://fakestoreapi.com/products/category/${category}`);
    
  
    const handleListItem = (setItems) =>{
      setCategory(setItems);
    }

  return (
    <div className='flex gap-2 border-b-blue-300 shadow-lg shadow-black m-1 min-w-1/6 min-h-96 mt-20'>
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
        </div>
  )
}

export default Product