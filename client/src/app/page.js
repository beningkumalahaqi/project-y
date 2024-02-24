import ProductCardWrap from "@/components/ProductCardWrap";
import Navbar from "@/components/Navbar";


export default async function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center p-8">
      <ProductCardWrap/>
    </div>
    </>
    
  )
}
