import RelatedArticles from './components/related-articles'
import Banner from "./components/Banner"
import Comments from './components/Comments'

interface PageProps {
  params: {
    id: string;
  };
}

export default function page({ params }: PageProps) {
  return (
    <main className='space-y-8'>
      <Banner articleId={params.id} />
      <RelatedArticles />
      <Comments />
    </main>
  )
}
