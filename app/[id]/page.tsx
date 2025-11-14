import RelatedArticles from './components/related-articles'
import Banner from "./components/Banner"
import Comments from './components/Comments'

export default function page() {
  return (
    <main className='space-y-8'>
        <Banner />
        <RelatedArticles />
        <Comments />
    </main>
  )
}
