import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// Khởi tạo middleware với các ngôn ngữ và ngôn ngữ mặc định
const intlMiddleware = createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
});

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Kiểm tra nếu URL không chứa ngôn ngữ
  if (!pathname.startsWith('/en') && !pathname.startsWith('/vi')) {
    // Chuyển hướng đến ngôn ngữ mặc định (ví dụ: /vi)
    const url = new URL(`/vi${pathname}`, req.url);
    return NextResponse.redirect(url);
  }

  // Nếu đã có ngôn ngữ trong URL, gọi middleware từ next-intl
  return intlMiddleware(req);
}

export const config = {
  // Chỉ áp dụng middleware cho các đường dẫn quốc tế hóa
  matcher: ['/', '/(vi|en)/:path*'],
};
