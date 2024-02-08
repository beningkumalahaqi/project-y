import db from "../../lib/db";
import Image from "next/image";

const getProduct = async () => {
  const res = await db.product.findMany({})
  return res;
}


export default async function ProductCardWrap({}) {

  const ProductSource = await getProduct()


  return(
    <>
    {ProductSource.map((data) => (
      <div key={data.id} className={!data.isVisible ? "hidden" : "card bg-base-100 shadow-xl"}>
        <figure><Image src={data.image_link} alt={data.img_alt_text} height={1000} width={1000} /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-2.5">{data.title}</h2>
          <div className="card-actions justify-center flex-col">
          <a className="btn btn-primary" href={"/product/" + data.id}>Detail</a>
          </div>
        </div>
      </div>
    ))}
    </>
    
  )

}