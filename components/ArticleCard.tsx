import Image from "next/image";

interface ArticleCardProps {
    title: string;
    brief: string;
    date: string;
}

export function ArticleCard({ title, brief, date }: ArticleCardProps) {
    return (
        <div className="text-gray-600">
            <div className="h-48 w-full">
                <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="article image" width={100} height={100} className="size-full bg-contain rounded-lg" />
            </div>
            <h4 className="text-black text-xl font-bold">{title}</h4>
            <p>{brief}</p>
            <small>{date}</small>
        </div>
    )
}