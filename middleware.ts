import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const pathname = req.nextUrl.pathname;

//   const supabase = createMiddlewareClient<Database>({ req, res });
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//   const protectUrl = ['/dashboard', '/dashboard/ceo'];
//   if (!session && protectUrl.includes(pathname)) {
//     const url = new URL(req.url);
//     url.pathname = '/';
//     return NextResponse.redirect(url);
//   }
//   return res;
// }

// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';

// import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}

// export async function withAuthorization(req: NextRequest) {
//   const res = NextResponse.next()
//   const pathname = req.nextUrl.pathname;

//   const supabase = createMiddlewareClient<Database>({ req, res })
//   let { data: akun, error } = await supabase
//   .from('akun')
//   .select('roles')
//   .single()
//   if (akun?.roles === "CEO"){
//     const url = new URL(req.url);
//     url.pathname = "/CEO"
//     return NextResponse.rewrite(url);
//   }
//   return res
// }

// export const withAuthorization: MiddlewareFactory = (next) => {
//   return async (req: NextRequest, _next: NextFetchEvent) => {
//     const pathname = req.nextUrl.pathname;
//       const res = NextResponse.next()

//     if (["/admin"]?.some((path) => pathname.startsWith(path))) {
//         const supabase = createMiddlewareClient<Database>({ req, res })
//   let { data: akun, error } = await supabase
//   .from('akun')
//   .select('roles')
//   .single()
//       if (!akun?.roles) {
//         const url = new URL(`/user`, req.url);
//         url.searchParams.set("callbackUrl ", encodeURI(req.url));
//         return NextResponse.redirect(url);
//       }
//       if (akun?.roles !== "CEO") {
//         const url = new URL(`/403`, req.url);
//         return NextResponse.rewrite(url);
//       }
//     }
//     return next(req, _next);
//   };
// };

// export const withAuthorization: MiddlewareFactory = (next) => {
//   return async (request: NextRequest, _next: NextFetchEvent) => {
//     const pathname = request.nextUrl.pathname;

//     if (["/admin"]?.some((path) => pathname.startsWith(path))) {
//       const token = await getToken({
//         req: request,
//         secret: process.env.NEXTAUTH_SECRET,
//       });
//       if (!token) {
//         const url = new URL(`/api/auth/signin`, request.url);
//         url.searchParams.set("callbackUrl ", encodeURI(request.url));
//         return NextResponse.redirect(url);
//       }
//       if (token.role !== "admin") {
//         const url = new URL(`/403`, request.url);
//         return NextResponse.rewrite(url);
//       }
//     }
//     return next(request, _next);
//   };
// };
