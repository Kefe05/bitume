import Banner from "@/components/banner";
import RecentArticles from "@/components/recent-articles";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInView } from "@/components/animations/FadeInView";

export default function Home() {
  return (
    <PageTransition>
      <main className="space-y-4">
        <FadeInView>
          <Banner />
        </FadeInView>
        <FadeInView delay={0.2}>
          <RecentArticles />
        </FadeInView>
      </main>
    </PageTransition>
  );
}
