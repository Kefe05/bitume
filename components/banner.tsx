"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useTopHeadlines, storeArticle, useNewsCategories, useNewsByCategory } from "./hooks/news";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Banner() {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const router = useRouter();

  // Fetch categories from API
  const { categories, isLoading: categoriesLoading } = useNewsCategories();

  // Fetch news based on selected category
  const { data: topNewsData, isLoading: topNewsLoading } = useTopHeadlines();
  const { data: categoryNewsData, isLoading: categoryNewsLoading } = useNewsByCategory(
    selectedTopic,
    "us"
  );

  // Determine which data to use
  const newsData = selectedTopic === "all" ? topNewsData : categoryNewsData;
  const isLoading = selectedTopic === "all" ? topNewsLoading : categoryNewsLoading;

  // Create topics array with "all" first, then categories from API
  const topics = [
    { name: "all" },
    ...categories.map(cat => ({ name: cat }))
  ];

  // Get the first article for the banner
  const featuredArticle = newsData?.articles[0];



  return (
    <section className="space-y-4">
      {/* Search bar */}
      <div className="relative h-fit">
        <Input
          className="pl-10 focus-visible:ring-sky-300/10 focus-visible:border-sky-300 dark:focus-visible:border-amber-300 focus-visible:ring-2 shadow-none"
          placeholder="Search for topics, news..."
        />
        <Search className="absolute top-2 left-2 text-gray-400 " size={20} />
      </div>


      {/*Topics */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categoriesLoading ? (
          // Loading skeleton for topics
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))
        ) : (
          topics.map((topic, idx) => (
            <Button
              key={idx}
              onClick={() => setSelectedTopic(topic.name)}
              className={`capitalize rounded-full bg-transparent dark:text-gray-200 dark:hover:bg-amber-600 hover:bg-sky-600 text-gray-600 hover:text-white transition-all duration-300 whitespace-nowrap ${selectedTopic === topic.name ? 'bg-sky-600 text-white dark:bg-amber-600' : ''
                }`}
            >
              {topic.name}
            </Button>
          ))
        )}
      </div>

      {/* Banner */}
      {isLoading ? (
        <Card className="h-[400px] bg-gray-200 dark:bg-gray-800 animate-pulse">
          <CardContent className="flex flex-col justify-end space-y-4 h-full">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className="h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: featuredArticle?.urlToImage
              ? `url('${featuredArticle.urlToImage}')`
              : "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')"
          }}
        >
          <CardContent className="flex flex-col justify-end space-y-4 bg-black/40 h-full text-white">
            <h2 className="text-4xl md:text-6xl font-bold">
              {featuredArticle?.title || "Breaking: Major political Event unfolds"}
            </h2>
            <p className="text-sm md:text-base">
              {featuredArticle?.description || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui voluptatem minus atque alias similique non culpa nulla consequuntur autem."}
            </p>
            <Button
              className="w-fit text-lg bg-sky-600 hover:bg-sky-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white cursor-pointer"
              onClick={() => {
                if (featuredArticle) {
                  storeArticle(featuredArticle);
                  const articleId = encodeURIComponent(featuredArticle.url);
                  router.push(`/${articleId}`);
                }
              }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      )}




    </section>
  )
}
