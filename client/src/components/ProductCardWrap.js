"use client"

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductCardWrap = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async() => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.data)
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);


  return(
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {products.map((data, index) => (
        <div key={data.id} className={!data.isVisible ? "hidden" : "w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"}>
          <a href={"/product/" + data.id}>
              <Image src={data.image_link}
                      alt={data.img_alt_text} 
                      className="h-80 w-72 object-cover rounded-t-xl" 
                      height={1000}
                      width={1000}
                      />
              <div className="px-4 py-3 w-72">
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
  )
}
export default ProductCardWrap