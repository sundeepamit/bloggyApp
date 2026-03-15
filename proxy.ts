// protected /dsahboard route if authenticated user can access dashboard page other wise not 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from '@/lib/auth'
export default async function proxy(request: NextRequest) {
    // console.log(request)
    // console.log(request.url) http://localhost:3000/dashboard

    const session = await auth.api.getSession({
        headers: request.headers
    })
    const pathname = request.nextUrl.pathname // output: /dashboard

    const isProtectedRoute = pathname.startsWith("/dashboard");
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher: "/dashboard/:path*"
}