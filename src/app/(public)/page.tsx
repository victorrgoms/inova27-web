import { AboutSection } from '@/components/features/AboutSection';
import { ExploreSection } from '@/components/features/ExploreSection';
import { HeroSearch } from '@/components/features/HeroSearch';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSearch />
      <AboutSection />
      <ExploreSection />
    </div>
  );
}