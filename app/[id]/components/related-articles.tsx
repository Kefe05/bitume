import Suggestion from "./Suggestion"

export default function RelatedArticles() {
  return (
    <section className="space-y-4">
      <h3>Related Articles</h3>
      <div className="grid grid-cols-2 gap-8">
        {[1, 2].map((number) => <Suggestion key={number} />)}
      </div>

    </section>
  )
}
