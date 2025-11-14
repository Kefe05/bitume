import { ArticleCard } from "./ArticleCard";










export default function RecentArticles() {
  return (
    <section>
      <h3>Recent Articles</h3>
      <div className="grid grid-cols-3 gap-6">
       {
          [1, 2, 3, 4, 5, 6].map((number) => <ArticleCard key={number}
            title={"This is the card"}
            brief={"this is the brief,this is the brief,this is the brief,this is the brief,"}
          /> )
       }
      </div>

    </section>
  )
}
