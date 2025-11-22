"use client";

import { useNewsByCategory } from "@/components/hooks/news";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInView } from "@/components/animations/FadeInView";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const router = useRouter();
  
  const { data: newsData, isLoading, error } = useNewsByCategory(category);

  return (
    <PageTransition>
      <main className="space-y-6 py-8">
        {/* Back button and category title */}
        <FadeInView>
          <div className="space-y-4">
            <Button variant="ghost" className="gap-2" onClick={() => router.back()}>
              <ArrowLeft size={16} />
              Back
            </Button>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold capitalize">{category} News</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Latest headlines from {category}
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Results */}
        <FadeInView delay={0.2}>
          {error ? (
            <div className="text-center py-12 space-y-4">
              <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
                Failed to Load News
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Unable to fetch news for this category. Please try again later.
              </p>
            </div>
          ) : isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : newsData?.articles && newsData.articles.length > 0 ? (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Found {newsData.totalResults} articles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.articles.map((article, idx) => (
                  <FadeInView key={article.url} delay={0.1 * (idx % 6)}>
                    <ArticleCard
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
                  </FadeInView>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 space-y-4">
              <h2 className="text-xl font-bold text-gray-600 dark:text-gray-400">
                No Articles Found
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                No news articles found for this category at the moment.
              </p>
            </div>
          )}
        </FadeInView>
      </main>
    </PageTransition>
  );
}
