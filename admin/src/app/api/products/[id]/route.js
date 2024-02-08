import { NextResponse } from "next/server";
import db from "../../../../../lib/db";

let ADMIN_ACCES = {
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
    usernameTypeOf: typeof(process.env.ADMIN_USER),
    passwordTypeof: typeof(process.env.ADMIN_PASS)
}

export const PATCH = async (request, {params}) =>{
    const body = await request.json();
    const product = await db.product.update({
        where:{
            id: Number(params.id)
        },
        data: {
          title: body.title,
          description: body.description,
          image_link: body.image_link,
          img_alt_text: body.img_alt_text,
          isVisible: body.isVisible,
          isAvailable: body.isAvailable,
      }
    });
    // Test Response
    // console.log(product)
    console.log(ADMIN_ACCES)
    return NextResponse.json(product, {status: 200});
}

export const DELETE = async (request, {params}) =>{
    const product = await db.product.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200});
}