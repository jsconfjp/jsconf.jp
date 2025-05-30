import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  languages,
  cookieName,
  headerName,
  fallbackLng,
} from "./src/app/i18n/settings";

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

  // URLから言語を検出 (例: /ja/... や /en/...)
  const pathname = req.nextUrl.pathname;
  let language = fallbackLng;

  // URLパスから言語を取得
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathnameIsMissingLocale) {
    const localeFromPath = languages.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (localeFromPath) {
      language = localeFromPath;
    }
  } else {
    // クッキーから言語を取得
    const cookieLanguage = req.cookies.get(cookieName)?.value;
    if (cookieLanguage && languages.includes(cookieLanguage)) {
      language = cookieLanguage;
    }
  }

  // レスポンスにヘッダーを設定
  const response = NextResponse.next();
  response.headers.set(headerName, language);

  return response;
}
