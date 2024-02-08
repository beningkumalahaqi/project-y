import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import AddProduct from "./addProduct";
import UpdateProduct from "./updateProduct";
import DeleteProduct from "./deleteProduct";

let db = new PrismaClient()


export async function getProducts() {
  const res = await db.product.findMany({});
  return res;
};

export default async function Home() {

  let products = await getProducts()

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
          {products.map((product) => (
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


