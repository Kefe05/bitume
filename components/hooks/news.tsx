"use client";

import { useQuery } from "@tanstack/react-query";
import { NewsApiResponse, NewsArticle, NewsSourcesResponse } from "@/types/news";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "144c38e2155d4a7c94c1e4382d3068e7";
const BASE_URL = "https://newsapi.org/v2";

async function fetchTopHeadlines(country: string = "us"): Promise<NewsApiResponse> {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }
  
  return response.json();
}

export function useTopHeadlines(country: string = "us") {
  return useQuery({
    queryKey: ["topHeadlines", country],
    queryFn: () => fetchTopHeadlines(country),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

async function fetchNewsByCategory(category: string, country: string = "us"): Promise<NewsApiResponse> {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch news by category");
  }
  
  return response.json();
}

export function useNewsByCategory(category: string, country: string = "us") {
  return useQuery({
    queryKey: ["newsByCategory", category, country],
    queryFn: () => fetchNewsByCategory(category, country),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!category && category !== "all", // Don't fetch if category is "all"
  });
}

async function searchNews(query: string, sortBy: string = "publishedAt"): Promise<NewsApiResponse> {
  const response = await fetch(
    `${BASE_URL}/everything?q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to search news");
  }
  
  return response.json();
}

export function useSearchNews(query: string, sortBy: string = "publishedAt") {
  return useQuery({
    queryKey: ["searchNews", query, sortBy],
    queryFn: () => searchNews(query, sortBy),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!query && query.length > 2, // Only search if query is longer than 2 characters
  });
}

async function fetchNewsSources(): Promise<NewsSourcesResponse> {
  const response = await fetch(
    `${BASE_URL}/top-headlines/sources?apiKey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch news sources");
  }
  
  return response.json();
}

export function useNewsSources() {
  return useQuery({
    queryKey: ["newsSources"],
    queryFn: () => fetchNewsSources(),
    staleTime: 60 * 60 * 1000, // 1 hour - sources don't change often
  });
}

// Get unique categories from sources
export function useNewsCategories() {
  const { data: sourcesData, isLoading, error } = useNewsSources();
  
  const categories = sourcesData?.sources
    ? Array.from(new Set(sourcesData.sources.map(source => source.category)))
        .sort()
    : [];
  
  return { categories, isLoading, error };
}

// Store articles in localStorage for individual page access
export function storeArticle(article: NewsArticle) {
  if (typeof window !== 'undefined') {
    const articleId = encodeURIComponent(article.url);
    localStorage.setItem(`article_${articleId}`, JSON.stringify(article));
  }
}

export function getStoredArticle(articleId: string): NewsArticle | null {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`article_${articleId}`);
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

// Hook to get a specific article by ID
export function useArticle(articleId: string) {
  return useQuery({
    queryKey: ["article", articleId],
    queryFn: () => {
      // First try to get from localStorage
      const stored = getStoredArticle(articleId);
      if (stored) {
        return stored;
      }
      
      // If not found, we could implement a search or return null
      throw new Error("Article not found");
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: false, // Don't retry if article not found
  });
}