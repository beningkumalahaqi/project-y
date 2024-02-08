"use client"
import Cookies from "js-cookie";

import LoginPage from "@/components/LoginPage";
import { useRouter } from "next/navigation";



export default  function Home() {

  const router = useRouter();

  const isLoggedIn = Cookies.get('isAdmin')
  if (isLoggedIn) {
    router.push("/product");
  }

   

   return <LoginPage/>
 
}
