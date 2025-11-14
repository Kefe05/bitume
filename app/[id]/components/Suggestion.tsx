import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Suggestion() {
    return (
        <div className="flex">
            <div className="max-w-sm w-fit">
                <small>Technology</small>
                <h4>The Future of AI: Trends and Predictions</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint!</p>
                <Link href="#">Read more</Link>
            </div>
            <Card className="h-24 w-[130px] bg-gray-400">

            </Card>
        </div>
    )
}