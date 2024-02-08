import db from "../../../../lib/db"
import Image from "next/image"

export default async function Page({params}) {
  
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
  })

  return(
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={product.image_link} alt={product.img_alt_text} className="max-w-sm rounded-lg shadow-2xl" width={1000} height={1000} />
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