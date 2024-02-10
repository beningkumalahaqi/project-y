"use client"

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetailPage = ({ productId }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProducts = async() => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.data)
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  return(
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={product.image_link} alt={product.img_alt_text} className="lg:max-w-lg rounded-lg shadow-2xl max-w-52 object-cover aspect-square" width={1000} height={1000} />
        <div>
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="py-6">{product.description}</p>
          {product.isAvailable ? <button className="btn btn-primary">Buy Now</button> : <button className="btn btn-primary" disabled >Sold Out</button> }
        </div>
      </div>
    </div>
    </>
  )

}

export default ProductDetailPage