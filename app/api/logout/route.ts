import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ message: 'success' });
    response.cookies.set('isAdmin', '', { httpOnly: true, path: '/', maxAge: -1 });
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
