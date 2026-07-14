import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Tutaj w przyszłości zintegrujemy tokeny sesyjne, by zablokować dostęp.
  // Na razie po prostu pozwalamy na wejście, ale struktura ochronna jest gotowa.
  
  // Przykładowa docelowa logika:
  // const token = request.cookies.get("session_token");
  // if (!token && (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/candidates"))) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    /*
     * Łapie wszystkie zapytania OPRÓCZ tych statycznych (CSS, JS, Obrazki)
     * i chroni nasze podstrony aplikacyjne.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
