import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET(request) {
  
    //get detail post
    const product = await db.product.findMany()

    if (!product) {
      //return response JSON
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Data Post Not Found!",
          data: null,
        },
        {
          status: 404,
        }
      );
    }
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Post",
        data: product,
      },
      {
        status: 200,
      }
    );
  }