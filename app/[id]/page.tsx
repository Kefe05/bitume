import RelatedArticles from './components/related-articles'
import Banner from "./components/Banner"
import Comments from './components/Comments'
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInView } from "@/components/animations/FadeInView";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <PageTransition>
      <main className='space-y-8'>
        <FadeInView>
          <Banner articleId={id} />
        </FadeInView>
        <FadeInView delay={0.2}>
          <RelatedArticles />
        </FadeInView>
        <FadeInView delay={0.3}>
          <Comments />
        </FadeInView>
      </main>
    </PageTransition>
  )
}
