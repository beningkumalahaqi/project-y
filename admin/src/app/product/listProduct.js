"use client"

import UpdateProduct from "./updateProduct"
import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import axios from "axios"
import Image from "next/image"
import { useState, useEffect } from "react"


const ListProduct = () => {

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

  return (
    <main className="lg:min-h-screen lg:p-20 p-0">
      <div className="mb-2">
        <AddProduct />
      </div>
      <div className="lg:w-auto lg:overflow-y-hidden lg:overflow-x-hidden w-screen overflow-y-hidden overflow-x-scroll">
        <table className="table lg:table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Image Alt Text</th>
            <th>Is Visible</th>
            <th>Is Available</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td><Image src={product.image_link} alt={product.img_alt_text} width={100} height={100}/></td>
              <td>{product.img_alt_text}</td>
              <td><input type="checkbox" checked={product.isVisible} className="toggle toggle-success" readOnly /></td>
              <td><input type="checkbox" checked={product.isAvailable} className="toggle toggle-success" readOnly /></td>
              <td className="flex justify-center space-x-1">
                <UpdateProduct product={product}/>
                <DeleteProduct product={product}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </main>
  );

}
export default ListProduct