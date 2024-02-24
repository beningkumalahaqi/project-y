"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

const SearchPage = () => {

  const [products, setProducts] = useState([])
  const [productTitle, setProductTitle] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {

    const getProducts = async() => {
      
      if (productTitle){
        try {
          
          const response = await axios.get(`/api/products/search/${productTitle}`);

          if(response.data.data != []){
            setIsLoading(true)
            setProducts(response.data.data)
            setIsLoading(false)
          }
        } catch (error) {
          // Handle error
          console.error(error);
        }
      } 
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productTitle]);


  return(
    <>
    {!isLoading ? 
    (<><div className="navbar flex justify-center bg-base-100">
      <div className="">
        <a href="/"className="btn btn-ghost text-xl">Back to Home</a>
      </div>
      <div className="">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={(e) => setProductTitle(e.target.value)} value={productTitle} />
          <button type="submit"></button>
        </div>
      </div>
    </div>

    <div className="flex min-h-screen items-center justify-center p-8">
    <div 
    className= 
    {products.length > 1 ? "w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" 
                          :"w-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                          }>
    {products.map((data, index) => (
        <div key={data.id} className={!data.isVisible ? "hidden" : "w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"}>
          <a href={"/product/" + data.id}>
              <Image src={data.image_link}
                      alt={data.img_alt_text} 
                      className="h-80 w-72 object-cover rounded-xl aspect-square" 
                      height={1000}
                      width={1000}
                      />
              <div className="px-4 py-3 w-72 hidden">
                  <p className="text-lg font-bold text-black truncate block capitalize my-8">{data.title}</p>
                  <div className="flex items-center hidden">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                      <del>
                          <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                      </del>
                  </div>
              </div>
          </a>
      </div>
    ))}
    </div>
    </div>
    </> 
    ) : ( 
    <button 
    type="button" 
    className="btn loading">
    Saving...
    </button>)}
  </>
  )
}
export default SearchPage