"use client";

import { useSearchParams } from "next/navigation";
import { useSearchNews } from "@/components/hooks/news";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInView } from "@/components/animations/FadeInView";
import { useRouter } from "next/router";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const router = useRouter()
  
  const { data: searchResults, isLoading, error } = useSearchNews(query);

  return (
    <PageTransition>
      <main className="space-y-6 py-8">
        {/* Back button and search query */}
        <FadeInView>
          <div className="space-y-4">
           
              <Button variant="ghost" className="gap-2 " onClick={() => router.back()}>
                <ArrowLeft size={16} />
                Back
              </Button>
            
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Search Results</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {query ? `Showing results for "${query}"` : "Enter a search query"}
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Results */}
        <FadeInView delay={0.2}>
          {error ? (
            <div className="text-center py-12 space-y-4">
              <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
                Failed to Load Search Results
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Unable to fetch search results. Please try again later.
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
          ) : searchResults?.articles && searchResults.articles.length > 0 ? (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Found {searchResults.totalResults} results
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.articles.map((article, idx) => (
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
                No Results Found
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Try searching with different keywords
              </p>
            </div>
          )}
        </FadeInView>
      </main>
    </PageTransition>
  );
}
