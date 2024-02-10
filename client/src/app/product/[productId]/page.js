import ProductDetailPage from "@/components/ProductDetailPage"

export default async function Page({params}) {

  return(<ProductDetailPage productId={params.productId}/>)
}