"use client"
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import 'dotenv/config'
import axios from "axios";

export default function LoginPage() {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });


  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  async function onSubmitFunction(e) {

    e.preventDefault();
    setIsLoading(true)

    await axios.post('/api/admin',{
      username: user.username,
      password: user.password
    })

    let isLoggedIn = Cookies.get("isAdmin")
    if (isLoggedIn) {
      router.push('/product')
    }
    
    setIsLoading(false)
  }

  return(
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">Login to access the Admin Page!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={onSubmitFunction}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" name="username" className="input input-bordered" required onChange={onInputChange} value={user.username} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required onChange={onInputChange} value={user.password} />
            </div>
            <div className="form-control mt-6">
            {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              ) : (
                <button type="button" className="btn btn-primary">
                  <button className="btn loading"></button>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}