import { NextResponse } from 'next/server';

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');
  const username = 'Admin';
  const password = 'Poiuytrewqaz1!';

  // Tworzymy token base64 z loginu i hasła
  const expectedAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

  if (basicAuth !== expectedAuth) {
    return new Response('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }

  return NextResponse.next();
}

// Zabezpieczenie całej strony
export const config = {
  matcher: '/:path*', // wszystkie ścieżki
};