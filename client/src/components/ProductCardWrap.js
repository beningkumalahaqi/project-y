"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductCardWrap = () => {

  const [products, setProducts] = useState(null)

  console.log(products)

  useEffect(() => {

    const getProducts = async() => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data)
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:content-center md:grid-cols-2 justify-items-center place-items-center gap-x-0.5 sm:grid-cols-1 sm:gap-1">
    {products && products.data.map((data, index) => (
      <div key={index} className={!data.isVisible ? "hidden" : "card bg-base-100 shadow-xl"}>
        <figure><Image src={data.image_link} alt={data.img_alt_text} height={1000} width={1000} /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-2.5">{data.title}</h2>
          <div className="card-actions justify-center flex-col">
          <a className="btn btn-primary" href={"/product/" + data.id}>Detail</a>
          </div>
        </div>
      </div>
    ))}
    </div>
    
  )

}
export default ProductCardWrap