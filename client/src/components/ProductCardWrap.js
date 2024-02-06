import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProduct = async () => {
  const res = await prisma.product.findMany({})
  return res;
}


export default async function ProductCardWrap({}) {

  const ProductSource = await getProduct()


  return(
    <>
    {ProductSource.map((data) => (
      <div key={data.id} className={!data.isVisible ? "hidden" : "card w-96 bg-base-100 shadow-xl mx-2.5"}>
        <figure><img src={data.image_link} alt={data.image_alt_text} /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            {!data.isAvailable ? <a className="btn btn-primary" href="https://www.facebook.com/" target="_blank">Buy Now</a> : <button className="btn" disabled>Sold Out</button>}
          </div>
        </div>
      </div>
    ))}
    </>
    
  )

}