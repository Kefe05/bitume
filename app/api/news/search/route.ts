import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "144c38e2155d4a7c94c1e4382d3068e7";
const BASE_URL = "https://newsapi.org/v2";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const sortBy = searchParams.get('sortBy') || 'publishedAt';

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search news' },
      { status: 500 }
    );
  }
}
