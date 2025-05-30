import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  // 静的ファイル、APIルート等を除外
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  // アイコンやChromeパスは無視
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();

  return NextResponse.next();
}
