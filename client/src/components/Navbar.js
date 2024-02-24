import Image from "next/image"

export default function Navbar(){
  return(
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Blazing Store</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    <a href="/search" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </a>
    </div>
  </div>
</div>
  )
}