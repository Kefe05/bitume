"use client";

import Link from "next/link"
import {Heart, MessageSquare, Share2, SlashIcon} from "lucide-react"
import { useTopHeadlines, getStoredArticle } from "@/components/hooks/news";
import { useState, useEffect } from "react";
import { NewsArticle } from "@/types/news";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"

interface BannerProps {
  articleId: string;
}

export default function Banner({ articleId }: BannerProps) {
  const { data: newsData, isLoading } = useTopHeadlines();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // First, try to get from localStorage
    const storedArticle = getStoredArticle(articleId);
    if (storedArticle) {
      setArticle(storedArticle);
      return;
    }

    // If not in localStorage, search through fetched articles
    if (newsData?.articles) {
      const decodedUrl = decodeURIComponent(articleId);
      // Loop through all articles to find matching URL
      const foundArticle = newsData.articles.find(a => a.url === decodedUrl);
      if (foundArticle) {
        setArticle(foundArticle);
      }
    }
  }, [articleId, newsData]);
  if (isLoading) {
    return (
      <section className="space-y-4 animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
        <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </section>
    );
  }

  if (!isLoading && !article) {
    return (
      <section className="space-y-4">
        <div className="text-center text-gray-500">
          Article not found. Please go back to the main page and select an article.
        </div>
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  // Guard clause - should never reach here if article is null due to above check
  if (!article) {
    return null;
  }

  return (
    <section className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">News</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{article.source.name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className="text-3xl md:text-5xl font-bold">{article.title}</h2>
      <small className="text-gray-600 dark:text-gray-400">
        By {article.author || "Unknown"} • Published on {new Date(article.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </small>

      <div className="h-[400px] my-3 bg-gray-400 rounded-md relative overflow-hidden">
        <Image 
          src={imageError || !article.urlToImage ? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" : article.urlToImage} 
          alt={article.title} 
          fill
          className="object-cover rounded-md" 
          onError={() => setImageError(true)}
        />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        {article.description || "No description available for this article."}
      </p>

      {article.content && (
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">
            {article.content.replace(/\[\+\d+ chars\]$/, '...')}
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-lg transition-colors"
        >
          Read Full Article on {article.source.name}
        </a>
      </div>

      <hr />
      <div className="flex justify-center gap-10 items-center text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors">
          <Heart />
          <span>1.2k</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
          <MessageSquare />
          <span>1.2k</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition-colors">
          <Share2 />
          <span>1.2k</span>
        </div>
      </div>
      <hr />
    </section>
  )
}
