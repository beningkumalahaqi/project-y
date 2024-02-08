"use client"
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter()

  const userAdmin = {
    username : "admin",
    password : "admin",
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
  });


  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  async function onSubmitFunction(e) {
    e.preventDefault();

    console.log(user.username)
    console.log(userAdmin.username)

    if(user.username == userAdmin.username && user.password == userAdmin.password) {
      const isAdmin = userAdmin.username;

      const expirationAge = 7;
      Cookies.set("isAdmin", isAdmin, { expires: expirationAge });
      router.push("/product")
    } else {
      alert("Nope")
    }
  }
  return(
    <div className="min-h-screen bg-purple-400 flex justify-center items-center">
    <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
    <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
    <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20" onSubmit={onSubmitFunction}>
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-black">Login</h1>
      </div>
      <div className="space-y-4">
        <input id="username" name= "username" type="text" placeholder="Username" value={user.username} className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" onChange={onInputChange} />
        <input id="password" name= "password" type="text" placeholder="Password" value={user.password} className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" onChange={onInputChange} />
      </div>
      <div className="text-center mt-6">
        <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Login</button>
      </div>
    </form>
    <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
    <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
  </div>

  )
}