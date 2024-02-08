import { NextResponse } from "next/server";
import { cookies } from "next/headers"; 

const ADMIN_USER = process.env.ADMIN_USER
const ADMIN_PASS = process.env.ADMIN_PASS

let userAdmin = {
  username: ADMIN_USER,
  password: ADMIN_PASS
}

export const POST = async (request) =>{
  const body = await request.json()

  let user = {
    username: body.username,
    password: body.password
  }

  if(user.username == userAdmin.username && user.password == userAdmin.password) {
    const isAdmin = userAdmin.username;

    const oneDay = 24 * 60 * 60 * 1000
    cookies().set('isAdmin', isAdmin, { maxAge: oneDay })
  } else {
    alert("Nope")
  }

  return NextResponse.json(user, {status: 201});
}