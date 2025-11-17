import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "144c38e2155d4a7c94c1e4382d3068e7";
const BASE_URL = "https://newsapi.org/v2";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const country = searchParams.get('country') || 'us';
  const category = searchParams.get('category');

  try {
    let url = `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`;
    
    if (category && category !== 'all') {
      url += `&category=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
