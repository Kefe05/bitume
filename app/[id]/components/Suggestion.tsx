"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NewsArticle } from "@/types/news";
import { storeArticle } from "@/components/hooks/news";
import Link from "next/link";

interface SuggestionProps {
    category?: string;
    title?: string;
    description?: string;
    imageUrl?: string | null;
    url: string;
    article?: NewsArticle;
}

export default function Suggestion({
    category = "Technology",
    title = "The Future of AI: Trends and Predictions",
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint!",
    imageUrl,
    url,
    article
}: SuggestionProps) {
    const router = useRouter();
    const [imageError, setImageError] = useState(false);
    const fallbackImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";

    const handleClick = () => {
        if (url && article) {
            storeArticle(article);
            const articleId = encodeURIComponent(url);
            router.push(`/${articleId}`);
        }
    };
    return (
        <div
            className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleClick}
        >
            <div className="flex-1 space-y-1">
                <span className="text-sky-500 dark:text-amber-400 text-xs font-medium">{category}</span>
                <h4 className="text-lg font-bold line-clamp-2">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{description}</p>
                <Link href={url}  className="text-sky-500 dark:text-amber-400 text-sm hover:underline">Read more →</Link >
            </div>
            <div className="h-24 w-[160px] bg-gray-200 dark:bg-gray-700 rounded-md relative overflow-hidden shrink-0">
                <Image
                    src={imageError || !imageUrl ? fallbackImage : imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                    onError={() => setImageError(true)}
                />
            </div>
        </div>
    )
}