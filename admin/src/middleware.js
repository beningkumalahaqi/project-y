import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let isLoggedIn = request.cookies.get("isAdmin")
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/product",
    "/product/:path",
  ],
};
