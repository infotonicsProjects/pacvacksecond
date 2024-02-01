import { NextResponse } from "next/server";
import { url } from "./Environment/index";
const getUserDetail = async (token) => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  };
  try {
    const res = await fetch(`${url}user`, requestOptions);
    if (!res.ok) {
      return "error";
    } else {
      return res.json();
    }
  } catch (err) {
    console.log(err.message, "error");
  }
};
export default async function middleware(request) {
  let response = NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (request.cookies.get("packM")) {
      const data = await getUserDetail(request.cookies.get("packM"));
      if (data?.user_type === "client") {
        response = NextResponse.redirect(
          new URL("/admin/auth/login", request.url),
        );
      } else if (data?.user_type === "admin") {
        response = NextResponse.next();
      } else {
        response.cookies.set({
          name: "packM",
          value: "fCYus4ImjRoEJQWaPQQS43k6EG8UnQNHrgOnypJD69fb3896",
          path: "/",
        });
      }
    }
  } else {
    if (request.cookies.get("packM")) {
    } else {
      response.cookies.set({
        name: "packM",
        value: "fCYus4ImjRoEJQWaPQQS43k6EG8UnQNHrgOnypJD69fb3896",
        path: "/",
      });
    }
  }

  // Setting cookies on the response using the `ResponseCookies` API

  return response;
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|img|sw.js|design2|auth/login|admin/auth/login|auth/signup|favicon.ico).*)",
  ],
};
