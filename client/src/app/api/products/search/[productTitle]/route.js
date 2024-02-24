import { NextResponse } from "next/server";
import { db } from "../../../../../../lib/db";

export const GET = async (request, {params} ) => {
   const product = await db.product.findMany({
    where: {
      title: {contains: params.productTitle}
    }
   })
  
   if (!product) {
     //return response JSON
     return NextResponse.json(
       {
         sucess: true,
         message: "Detail Data Product Not Found!",
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
       message: "Detail Product Post",
       data: product,
     },
     {
       status: 200,
     }
   );
}