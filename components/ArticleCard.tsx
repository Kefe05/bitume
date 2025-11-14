import { Card } from "./ui/card"

interface ArticleCardProps {
    title: string;
    brief: string;
}

export function ArticleCard({ title, brief }: ArticleCardProps) {
    return (
        <div>
            <Card className="h-48">

            </Card>
            <h4>{title}</h4>
            <p>{brief}</p>
        </div>
    )
}