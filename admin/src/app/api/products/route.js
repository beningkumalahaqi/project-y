import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export const POST = async (request) =>{
    const body = await request.json()
    const product = await db.product.create({
        data: {
            title: body.title,
            description: body.description,
            image_link: body.image_link,
            img_alt_text: body.img_alt_text,
            isVisible: body.isVisible,
            isAvailable: body.isAvailable,
        }
    });
    return NextResponse.json(product, {status: 201});
}