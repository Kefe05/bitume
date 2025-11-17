"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NewsArticle } from "@/types/news";
import { storeArticle } from "./hooks/news";

interface ArticleCardProps {
    title: string;
    brief: string;
    date: string;
    imageUrl?: string | null;
    url?: string;
    source?: string;
    article?: NewsArticle; // Full article data
}

export function ArticleCard({ title, brief, date, imageUrl, url, source, article }: ArticleCardProps) {
    const router = useRouter();
    const [imageError, setImageError] = useState(false);
    const fallbackImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";
    
    const handleClick = () => {
        if (url && article) {
            // Store the full article data
            storeArticle(article);
            // Create a simple ID from the URL for routing
            const articleId = encodeURIComponent(url);
            router.push(`/${articleId}`);
        }
    };
    return (
        <div 
            className="text-gray-600 dark:text-gray-200 space-y-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleClick}
        >
            <div className="h-48 w-full relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                <Image 
                    src={imageError || !imageUrl ? fallbackImage : imageUrl} 
                    alt={title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => setImageError(true)}
                />
            </div>
            <div className="space-y-2">
                {source && <span className="text-xs text-blue-600 dark:text-amber-400 font-medium">{source}</span>}
                <h4 className="text-gray-700 dark:text-gray-300 text-lg font-bold line-clamp-2">{title}</h4>
                <p className="text-sm line-clamp-3">{brief}</p>
                <small className="text-gray-500">{date}</small>
            </div>
        </div>
    )
}