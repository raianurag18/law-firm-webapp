import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { id, key } = await request.json();

    if (id === process.env.ADMIN_ID && key === process.env.ADMIN_KEY) {
      const response = NextResponse.json({ message: 'success' });
      response.cookies.set('isAdmin', 'true', { httpOnly: true, path: '/' });
      return response;
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
