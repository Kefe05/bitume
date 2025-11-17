"use client";

import Suggestion from "./Suggestion"
import { useTopHeadlines } from "@/components/hooks/news";

export default function RelatedArticles() {
  const { data: newsData, isLoading } = useTopHeadlines();
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-bold">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex gap-3 animate-pulse">
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
              <div className="h-24 w-[160px] bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          ))
        ) : (
          // Real articles - show 4 related articles
          newsData?.articles.slice(1, 5).map((article) => (
            <Suggestion 
              key={article.url}
              category={article.source.name}
              title={article.title}
              description={article.description || "No description available"}
              imageUrl={article.urlToImage}
              url={article.url}
              article={article}
            />
          ))
        )}
      </div>
    </section>
  )
}
