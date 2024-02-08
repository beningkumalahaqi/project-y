import ProductCardWrap from "@/components/ProductCardWrap";


export default function Home() {
  return (
    <main className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 min-h-screen place-items-center gap-x-0.5 sm:grid-cols-1 sm:gap-1">
      <ProductCardWrap/>
    </main>
  );
}
