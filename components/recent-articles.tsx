import { ArticleCard } from "./ArticleCard";

export default function RecentArticles() {
  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-bold">Recent Articles</h3>
      <div className="grid grid-cols-3 gap-6">
       {
          [1, 2, 3, 4, 5, 6].map((number) => <ArticleCard key={number}
            title={"This is the card"}
            date="Oct 26, 2023"
            brief={"this is the brief,this is the brief,this is the brief,this is the brief,"}
          /> )
       }
      </div>

    </section>
  )
}
