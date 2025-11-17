"use client";

import { ArticleCard } from "./ArticleCard";
import { useTopHeadlines } from "./hooks/news";

export default function RecentArticles() {
  const { data: newsData, isLoading, error } = useTopHeadlines();
  if (error) {
    return (
      <section className="space-y-2">
        <h3 className="text-2xl font-bold">Recent Articles</h3>
        <div className="text-red-500">Error loading articles. Please try again later.</div>
      </section>
    );
  }

  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-bold">Recent Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? // Loading skeleton
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            ))
          : // Real articles (skip first one as it's used in banner)
            newsData?.articles.slice(1, 7).map((article, idx) => (
              <ArticleCard
                key={article.url}
                title={article.title}
                date={new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
                brief={article.description || "No description available"}
                imageUrl={article.urlToImage}
                url={article.url}
                source={article.source.name}
                article={article}
              />
            ))}
      </div>
    </section>
  )
}
